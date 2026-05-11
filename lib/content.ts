import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BuildStatus =
  | "in-progress"
  | "available"
  | "sold"
  | "experimental"
  | "given";

export type BuildFrontmatter = {
  slug: string;
  title: string;
  body: string;
  status: BuildStatus;
  year?: number;
  serial?: string;
  top: string;
  back_sides: string;
  neck: string;
  fretboard: string;
  bridge: string;
  bracing?: string;
  scale?: string;
  frets_to_body?: number;
  nut_width?: string;
  string_set?: string;
  glue?: string;
  construction?: string;
  price?: number;
  currency?: string;
  experimental?: boolean;
  summary?: string;
  hero_caption?: string;
  photos?: string[];
  video_url?: string;
};

export type ArticleFrontmatter = {
  slug: string;
  title: string;
  date: string;
  photo?: string;
  photo_caption?: string;
  summary?: string;
};

export type Article = ArticleFrontmatter & { content: string };

export type Build = BuildFrontmatter & { content: string };

function resolveImagePath(p: string | undefined): string | undefined {
  if (!p) return undefined;
  return p.startsWith("/") ? p : `/images/${p}`;
}

const BUILDS_DIR = path.join(process.cwd(), "content", "builds");

export function getAllBuilds(): Build[] {
  if (!fs.existsSync(BUILDS_DIR)) return [];
  const files = fs
    .readdirSync(BUILDS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const builds = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    const raw = fs.readFileSync(path.join(BUILDS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const fm = data as Omit<BuildFrontmatter, "slug">;
    if (fm.photos) fm.photos = fm.photos.map((p) => resolveImagePath(p)!);
    return { slug, content, ...fm } as Build;
  });

  return builds.sort((a, b) => {
    const order: Record<BuildStatus, number> = {
      "in-progress": 0,
      available: 1,
      experimental: 2,
      sold: 3,
      given: 4,
    };
    return order[a.status] - order[b.status];
  });
}

export function getBuild(slug: string): Build | null {
  const all = getAllBuilds();
  return all.find((b) => b.slug === slug) ?? null;
}

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const articles = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const fm = data as Omit<ArticleFrontmatter, "slug">;
    if (fm.photo) fm.photo = resolveImagePath(fm.photo);
    return { slug, content, ...fm } as Article;
  });

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string): Article | null {
  const all = getAllArticles();
  return all.find((a) => a.slug === slug) ?? null;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function formatPrice(price?: number, currency = "USD"): string | null {
  if (typeof price !== "number") return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
