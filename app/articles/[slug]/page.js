import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getArticle } from "@/lib/articles-store";
import { isAdmin } from "@/lib/articles-auth";
import { ART } from "@/lib/articles-config";

export const dynamic = "force-dynamic";

async function load(params) {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) return null;
  if (a.status !== "published" && !(await isAdmin())) return null;
  return a;
}

export async function generateMetadata({ params }) {
  const a = await load(params);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description || a.body.replace(/[#*\[\]()>_`]/g, "").slice(0, 155),
    alternates: { canonical: `/articles/${a.slug}/` },
    robots: a.status === "published" ? undefined : { index: false },
  };
}

function render(md) {
  // strip any raw HTML script/style/iframe; Markdown links stay as normal (followed) links
  const html = marked.parse(md, { gfm: true, breaks: false });
  return html.replace(/<(script|style|iframe|object|embed)[\s\S]*?<\/\1>/gi, "").replace(/\son\w+="[^"]*"/gi, "");
}

export default async function Article({ params }) {
  const a = await load(params);
  if (!a) notFound();
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description || undefined,
    datePublished: new Date(a.createdAt).toISOString(),
    dateModified: new Date(a.updatedAt || a.createdAt).toISOString(),
    mainEntityOfPage: `${ART.siteUrl}/articles/${a.slug}`,
    publisher: { "@type": "Organization", name: ART.siteName, url: ART.siteUrl },
  };
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 font-sans text-[#1d2733]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <p className="text-sm">
        <Link href="/" className="underline">{ART.siteName}</Link> › <Link href="/articles" className="underline">Articles</Link>
      </p>
      {a.status !== "published" && <p className="mt-3 rounded bg-yellow-100 p-2 text-sm">Draft preview</p>}
      <h1 className="mt-3 text-3xl font-bold leading-tight">{a.title}</h1>
      <p className="mt-2 text-sm text-gray-500">{new Date(a.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
      <article className="art-body mt-6" dangerouslySetInnerHTML={{ __html: render(a.body) }} />
      <style>{`.art-body{line-height:1.75;font-size:17px}.art-body h2{font-size:1.5rem;font-weight:700;margin:1.8em 0 .6em}.art-body h3{font-size:1.2rem;font-weight:700;margin:1.4em 0 .5em}.art-body p{margin:0 0 1em}.art-body ul,.art-body ol{margin:0 0 1em 1.4em}.art-body ul{list-style:disc}.art-body ol{list-style:decimal}.art-body a{color:#163a5c;text-decoration:underline}.art-body table{border-collapse:collapse;margin:1em 0;width:100%}.art-body td,.art-body th{border:1px solid #ddd;padding:6px 8px;text-align:left}.art-body blockquote{border-left:4px solid #c9a54a;padding-left:1em;color:#444}`}</style>
    </main>
  );
}
