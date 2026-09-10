import fs from "node:fs";
import path from "node:path";

/**
 * The circle-of-fifths tool is a complete, self-contained HTML document that
 * owns its own markup and stylesheet, so it is served as-is rather than
 * rendered through the app router's layout.
 *
 * This is a route handler rather than a next.config rewrite: Amplify serves
 * public/ from CloudFront and the app from a separate compute layer, so a
 * rewrite pointing at a file in public/ reaches the Next server, finds no
 * matching route there, and 404s. Returning the bytes from a real route works
 * on any host.
 *
 * The file is read once at module scope and the response is prerendered at
 * build time, so no filesystem access happens per request.
 */
const html = fs.readFileSync(
  path.join(process.cwd(), "public", "tools", "circle-of-fifths", "index.html"),
  "utf-8",
);

export const dynamic = "force-static";

export function GET() {
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
