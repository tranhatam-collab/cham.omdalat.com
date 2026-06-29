import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  ADMIN_SESSION_COOKIE,
  authenticateAdmin,
  buildAdminSession,
  createAdminSessionToken,
  getAdminSessionMaxAge,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (typeof username !== "string" || typeof password !== "string") {
      return NextResponse.json(
       { error: "Invalid credentials" },
       { status: 400 }
      );
    }

    const user = authenticateAdmin(username, password);
    if (!user) {
      return NextResponse.json(
       { error: "Invalid credentials" },
       { status: 401 }
      );
    }

    const sessionToken = createAdminSessionToken(buildAdminSession(user));
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_SESSION_COOKIE, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: getAdminSessionMaxAge(),
    });

    return NextResponse.json({ success: true, role: user.role });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
