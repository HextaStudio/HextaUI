import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { imageCache, contentCache, staticCache } from "../../utils/cache-config";

export const runtime = "edge";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Cache images
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|webp|avif|gif|ico)$/)) {
    response.headers.set(
      "Cache-Control",
      `public, max-age=${imageCache.browser.maxAge}, s-maxage=${imageCache.edge.maxAge}, stale-while-revalidate`
    );
  }

  // Cache static assets
  else if (request.nextUrl.pathname.match(/\.(css|js)$/)) {
    response.headers.set(
      "Cache-Control",
      `public, max-age=${staticCache.browser.maxAge}, s-maxage=${staticCache.edge.maxAge}, stale-while-revalidate`
    );
  }

  // Cache API responses and docs pages
  else if (
    request.nextUrl.pathname.startsWith("/docs/") ||
    request.nextUrl.pathname.startsWith("/api/")
  ) {
    response.headers.set(
      "Cache-Control",
      `public, max-age=${contentCache.browser.maxAge}, s-maxage=${contentCache.edge.maxAge}, stale-while-revalidate`
    );
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
