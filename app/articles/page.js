import Link from "next/link";
import { listArticles } from "@/lib/articles-store";
import { ART } from "@/lib/articles-config";

export const dynamic = "force-dynamic";
export const metadata = {
  title: `Legal Articles | ${ART.siteName}`,
  description: `Latest legal articles and updates from ${ART.siteName} on Pakistani family, property, corporate and tax law.`,
  alternates: { canonical: "/articles" },
};

export default async function Articles() {
  const items = (await listArticles()).filter((a) => a.status === "published");
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 font-sans text-[#1d2733]">
      <p className="text-sm"><Link href="/" className="underline">{ART.siteName}</Link> › Articles</p>
      <h1 className="mt-3 text-3xl font-bold">Legal Articles</h1>
      <ul className="mt-6 space-y-5">
        {items.map((a) => (
          <li key={a.slug}>
            <Link href={`/articles/${a.slug}`} className="text-lg font-semibold text-[#163a5c] underline">{a.title}</Link>
            {a.description && <p className="mt-1 text-gray-600">{a.description}</p>}
          </li>
        ))}
        {!items.length && <li className="text-gray-500">No articles yet.</li>}
      </ul>
    </main>
  );
}
