import {
  NextRequest,
  NextResponse,
} from "next/server";

export function middleware(
  request: NextRequest
) {
  const { pathname } =
    request.nextUrl;

  if (
    pathname ===
      "/connect" ||
    pathname ===
      "/insights" ||
    pathname === "/investors" ||
    pathname ===
      "/investors-and-partners"
  ) {
    const url =
      request.nextUrl.clone();

    url.pathname = "/";

    return NextResponse.rewrite(
      url
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
  "/connect",
  "/insights",
  "/investors",
  "/investors-and-partners",
],
};