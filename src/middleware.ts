import { NextRequest, NextResponse } from "next/server";
import { server } from "./api/instance/instance";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/oauth")) {
    const week = 24 * 60 * 60 * 1000 * 7;
    const code = req.nextUrl.searchParams.get("code");
    const provider = req.nextUrl.searchParams.get("provider");
    const redirect =
      process.env.NEXT_PUBLIC_REDIRECT_URI || "http://localhost:3000";
    const { data } = await server.post(`auth/${provider}/token`, {
      authorizationCode: code,
      redirectUri:
        provider == "google" ? `${redirect}/oauth?provider=google` : "/",
    });
    const { refreshToken, accessToken } = data;
    const res = NextResponse.redirect(new URL("/", req.url));
    res.cookies.set("accessToken", accessToken);
    res.cookies.set("refreshToken", refreshToken);

    return res;
  }

  if (!req.cookies.has("accessToken"))
    return NextResponse.redirect(new URL("/login", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/review/:path*", "/category/:path*", "/oauth"],
};
