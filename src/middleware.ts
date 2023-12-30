import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt")?.value;

  const verifiedToken =
    token &&
    (await verifyToken({ token }).catch((err) => {
      console.log(err);
    }));

  const url = request.url;

  if (request.nextUrl.pathname.startsWith("/admin") && !verifiedToken) {
    return NextResponse.redirect(new URL("/", url));
  }

  if (!request.nextUrl.pathname.startsWith("/admin") && verifiedToken) {
    return NextResponse.redirect(new URL("/admin", url));
  }
}
