import { NextRequest, NextResponse } from "next/server";
import { server } from "./api/instance/instance";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/oauth")) {
    const code = req.nextUrl.searchParams.get("code");
    const provider = req.nextUrl.searchParams.get("provider");
    const redirectUri =
      provider === "google"
        ? `${process.env.NEXT_PUBLIC_BASE}/oauth?provider=google`
        : "/";
    const { data } = await server.post(`auth/${provider}/token`, {
      authorizationCode: code,
      redirectUri: redirectUri,
    });
    const { refreshToken, accessToken } = data;
    const res = NextResponse.redirect(new URL("/", req.url));
    res.cookies.set("accessToken", accessToken, {
      maxAge: 60 * 60 * 24 * 7, //일주일
    });
    res.cookies.set("refreshToken", refreshToken, {
      maxAge: 60 * 60 * 24 * 30, //한달,
    });

    return res;
  }

  if (!req.cookies.has("accessToken"))
    return NextResponse.redirect(new URL("/login", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/review/:path*", "/category/:path*", "/oauth"],
};
