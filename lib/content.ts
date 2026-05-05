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
};

export type Build = BuildFrontmatter & { content: string };

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
    return { slug, content, ...(data as Omit<BuildFrontmatter, "slug">) } as Build;
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

export function formatPrice(price?: number, currency = "USD"): string | null {
  if (typeof price !== "number") return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
