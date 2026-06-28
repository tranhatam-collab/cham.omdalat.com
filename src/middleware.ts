import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme-in-production";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Root → /vi redirect
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/vi", request.url));
  }

  // Admin auth guard
  if (pathname.startsWith("/admin")) {
    // Allow /admin/login without auth
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    const session = request.cookies.get("admin_session")?.value;
    if (session !== ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/admin/:path*"],
};
