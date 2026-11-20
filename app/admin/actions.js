"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { isAdmin, passwordOk, setAdmin, clearAdmin } from "@/lib/articles-auth";
import { saveArticle, getArticle, deleteArticle, slugify } from "@/lib/articles-store";

const clip = (v, n) => String(v ?? "").trim().slice(0, n);

export async function loginAction(formData) {
  if (!passwordOk(formData.get("password"))) redirect("/admin?err=pw");
  await setAdmin();
  redirect("/admin");
}

export async function logoutAction() {
  await clearAdmin();
  redirect("/");
}

export async function saveAction(formData) {
  if (!(await isAdmin())) redirect("/admin");
  const title = clip(formData.get("title"), 160);
  const body = clip(formData.get("body"), 60000);
  const oldSlug = clip(formData.get("oldSlug"), 90);
  const slug = slugify(clip(formData.get("slug"), 120) || title);
  if (title.length < 5 || body.length < 50 || slug.length < 3) redirect("/admin?err=short" + (oldSlug ? "&edit=" + oldSlug : ""));

  const existing = oldSlug ? await getArticle(oldSlug) : null;
  if (!existing && (await getArticle(slug))) redirect("/admin?err=slug");

  const a = {
    slug,
    title,
    description: clip(formData.get("description"), 300),
    body,
    status: formData.get("status") === "draft" ? "draft" : "published",
    createdAt: existing?.createdAt || Date.now(),
    updatedAt: Date.now(),
  };
  await saveArticle(a);
  if (existing && oldSlug !== slug) await deleteArticle(oldSlug);
  revalidatePath("/articles");
  redirect("/admin?ok=" + slug);
}

export async function deleteAction(formData) {
  if (!(await isAdmin())) redirect("/admin");
  await deleteArticle(clip(formData.get("slug"), 90));
  revalidatePath("/articles");
  redirect("/admin?ok=deleted");
}
