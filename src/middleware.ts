import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("moddleware");
  const refreshToken = req.cookies.get("refreshToken")?.value;
  if (!refreshToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/review/:path*", "/category/:path*"],
};
