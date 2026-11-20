import "server-only";
import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "crypto";

const COOKIE = "art_admin";
const h = (s) => createHash("sha256").update(s).digest("hex");

function token() {
  const pw = process.env.ADMIN_PASSWORD || "";
  return pw ? h("articles-admin:" + pw) : null;
}

export function passwordOk(input) {
  const pw = process.env.ADMIN_PASSWORD || "";
  if (!pw || typeof input !== "string") return false;
  return timingSafeEqual(Buffer.from(h(input)), Buffer.from(h(pw)));
}

export async function setAdmin() {
  (await cookies()).set(COOKIE, token(), {
    httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearAdmin() {
  (await cookies()).delete(COOKIE);
}

export async function isAdmin() {
  const t = token();
  const c = (await cookies()).get(COOKIE)?.value;
  return !!t && !!c && c.length === t.length && timingSafeEqual(Buffer.from(c), Buffer.from(t));
}
