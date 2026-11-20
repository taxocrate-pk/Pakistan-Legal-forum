import "server-only";
import { put, get, list, del } from "@vercel/blob";

const key = (slug) => `articles/${slug}.json`;

export function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-")
    .slice(0, 90)
    .replace(/-$/, "");
}

export async function saveArticle(a) {
  await put(key(a.slug), JSON.stringify(a), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function getArticle(slug) {
  if (!/^[a-z0-9-]{3,90}$/.test(slug || "")) return null;
  try {
    const r = await get(key(slug), { access: "private", useCache: false });
    if (!r) return null;
    return JSON.parse(await new Response(r.stream).text());
  } catch {
    return null;
  }
}

export async function deleteArticle(slug) {
  if (!/^[a-z0-9-]{3,90}$/.test(slug || "")) return;
  await del(key(slug));
}

export async function listArticles() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  const slugs = [];
  let cursor;
  do {
    const r = await list({ prefix: "articles/", cursor, limit: 1000 });
    slugs.push(...r.blobs.map((b) => b.pathname.slice(9, -5)));
    cursor = r.hasMore ? r.cursor : undefined;
  } while (cursor);
  const all = (await Promise.all(slugs.map(getArticle))).filter(Boolean);
  return all.sort((a, b) => b.createdAt - a.createdAt);
}
