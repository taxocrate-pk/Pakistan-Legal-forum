import Link from "next/link";
import { isAdmin } from "@/lib/articles-auth";
import { listArticles, getArticle } from "@/lib/articles-store";
import { loginAction, logoutAction, saveAction, deleteAction } from "./actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin", robots: { index: false, follow: false } };

const box = "mx-auto max-w-3xl px-4 py-8 font-sans text-[#1d2733]";
const inp = "mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-base";
const btn = "rounded bg-[#0f2a44] px-5 py-2 font-semibold text-white";
const ERR = {
  pw: "Wrong password.",
  short: "Title (5+), body (50+ characters) are required.",
  slug: "An article with this URL already exists. Change the slug.",
};

export default async function Admin({ searchParams }) {
  const sp = await searchParams;
  if (!(await isAdmin())) {
    return (
      <main className={box}>
        <h1 className="text-2xl font-bold">Admin login</h1>
        <form action={loginAction} className="mt-4 max-w-sm space-y-3">
          <input type="password" name="password" required placeholder="Password" className={inp} />
          {sp.err === "pw" && <p className="text-red-700">{ERR.pw}</p>}
          <button className={btn}>Log in</button>
        </form>
      </main>
    );
  }

  const editing = sp.edit ? await getArticle(sp.edit) : null;
  const articles = await listArticles();

  return (
    <main className={box}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{editing ? "Edit article" : "Add new article"}</h1>
        <form action={logoutAction}><button className="text-sm underline">Log out</button></form>
      </div>

      {sp.ok && sp.ok !== "deleted" && (
        <p className="mt-4 rounded bg-green-50 p-3 text-green-900">
          Saved. <Link className="underline" href={`/articles/${sp.ok}`}>View article</Link>
        </p>
      )}
      {sp.ok === "deleted" && <p className="mt-4 rounded bg-green-50 p-3">Deleted.</p>}
      {ERR[sp.err] && sp.err !== "pw" && <p className="mt-4 rounded bg-red-50 p-3 text-red-800">{ERR[sp.err]}</p>}

      <form action={saveAction} className="mt-6 space-y-4" key={editing?.slug || "new"}>
        <input type="hidden" name="oldSlug" value={editing?.slug || ""} />
        <label className="block font-medium">Title
          <input name="title" required defaultValue={editing?.title} className={inp} />
        </label>
        <label className="block font-medium">URL slug <span className="font-normal text-gray-500">(optional, made from the title if empty)</span>
          <input name="slug" defaultValue={editing?.slug} className={inp} placeholder="court-marriage-procedure-in-karachi" />
        </label>
        <label className="block font-medium">Meta description <span className="font-normal text-gray-500">(150–160 characters)</span>
          <input name="description" defaultValue={editing?.description} maxLength={300} className={inp} />
        </label>
        <label className="block font-medium">Article (paste from ChatGPT; Markdown supported)
          <textarea name="body" required rows={18} defaultValue={editing?.body} className={inp + " font-mono text-sm"}
            placeholder={"## Heading\n\nParagraph with a [link text](https://example.com/page/)."} />
        </label>
        <label className="block font-medium">Status
          <select name="status" defaultValue={editing?.status || "published"} className={inp}>
            <option value="published">Publish now</option>
            <option value="draft">Save as draft</option>
          </select>
        </label>
        <div className="flex gap-3">
          <button className={btn}>{editing ? "Update" : "Publish"}</button>
          {editing && <Link href="/admin" className="rounded border px-5 py-2">Cancel</Link>}
        </div>
      </form>

      <h2 className="mt-12 text-xl font-bold">All articles ({articles.length})</h2>
      <ul className="mt-3 divide-y rounded border bg-white">
        {articles.map((a) => (
          <li key={a.slug} className="flex flex-wrap items-center gap-3 p-3">
            <span className="flex-1">
              <Link href={`/articles/${a.slug}`} className="font-medium underline">{a.title}</Link>
              <span className="ml-2 text-xs text-gray-500">{a.status === "draft" ? "DRAFT · " : ""}{new Date(a.createdAt).toLocaleDateString("en-GB")}</span>
            </span>
            <Link href={`/admin?edit=${a.slug}`} className="text-sm underline">Edit</Link>
            <form action={deleteAction}>
              <input type="hidden" name="slug" value={a.slug} />
              <button className="text-sm text-red-700 underline">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
