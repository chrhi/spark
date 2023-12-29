import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("user-token")?.value;

  const verifiedToken =
    token &&
    (await verifyToken({ token }).catch((err) => {
      console.log(err);
    }));

  const url = request.url;

  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/", url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/:path*",
};
