import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const user = userAgent(request);

  const response = NextResponse.next();

  response.cookies.set("userAgent", user.ua, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/user-agent",
  });

  return response;
}

export const config = {
  matcher: "/user-agent",
};
