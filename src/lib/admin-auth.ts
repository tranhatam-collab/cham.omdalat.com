import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 12;

type AdminUser = {
  username: string;
  password: string;
  role: string;
};

export type AdminSession = {
  username: string;
  role: string;
  exp: number;
};

function getSigningSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
  if (!secret) {
    throw new Error("Missing ADMIN_SESSION_SECRET (or ADMIN_PASSWORD) for admin session signing.");
  }
  return secret;
}

function parseAdminUsersFromEnv(): AdminUser[] {
  const raw = process.env.ADMIN_USERS_JSON;
  if (!raw) {
    return [
      {
        username: process.env.ADMIN_USERNAME || "admin",
        password: process.env.ADMIN_PASSWORD || "changeme-in-production",
        role: "super_admin",
      },
    ];
  }

  const parsed = JSON.parse(raw) as unknown;
  if (!Array.isArray(parsed)) {
    throw new Error("ADMIN_USERS_JSON must be a JSON array.");
  }

  const users = parsed.filter(
    (entry): entry is AdminUser =>
      !!entry &&
      typeof entry === "object" &&
      typeof (entry as AdminUser).username === "string" &&
      typeof (entry as AdminUser).password === "string" &&
      typeof (entry as AdminUser).role === "string"
  );

  if (users.length === 0) {
    throw new Error("ADMIN_USERS_JSON contains no valid users.");
  }

  return users;
}

function safeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

function signPayload(payload: string): string {
  return createHmac("sha256", getSigningSecret()).update(payload).digest("base64url");
}

export function createAdminSessionToken(session: AdminSession): string {
  const payload = Buffer.from(JSON.stringify(session), "utf-8").toString("base64url");
  const signature = signPayload(payload);
  return `${payload}.${signature}`;
}

export function verifyAdminSessionToken(token: string | undefined): AdminSession | null {
  if (!token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  if (!safeEqual(signPayload(payload), signature)) return null;

  try {
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf-8")) as AdminSession;
    if (
      !decoded ||
      typeof decoded.username !== "string" ||
      typeof decoded.role !== "string" ||
      typeof decoded.exp !== "number"
    ) {
      return null;
    }
    if (decoded.exp <= Math.floor(Date.now() / 1000)) return null;
    return decoded;
  } catch {
    return null;
  }
}

export function authenticateAdmin(username: string, password: string): { username: string; role: string } | null {
  const user = parseAdminUsersFromEnv().find((entry) => entry.username === username);
  if (!user) return null;
  if (!safeEqual(user.password, password)) return null;
  return { username: user.username, role: user.role };
}

export function buildAdminSession(user: { username: string; role: string }): AdminSession {
  return {
    username: user.username,
    role: user.role,
    exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS,
  };
}

export async function getAdminSessionFromCookies(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  return verifyAdminSessionToken(token);
}

export function getAdminSessionMaxAge(): number {
  return SESSION_MAX_AGE_SECONDS;
}
