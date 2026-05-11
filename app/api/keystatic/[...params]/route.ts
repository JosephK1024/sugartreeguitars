import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "@/keystatic.config";

const { GET: _GET, POST: _POST } = makeRouteHandler({
  config,
  clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID ?? "",
  clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET ?? "",
  secret: process.env.KEYSTATIC_SECRET ?? "",
});

function fixUrl(request: Request): Request {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return request;
  const base = new URL(siteUrl);
  const url = new URL(request.url);
  if (url.hostname === base.hostname) return request;
  url.protocol = base.protocol;
  url.hostname = base.hostname;
  url.port = base.port;
  return new Request(url.toString(), request);
}

export async function GET(request: Request) {
  return _GET(fixUrl(request));
}

export async function POST(request: Request) {
  return _POST(fixUrl(request));
}
