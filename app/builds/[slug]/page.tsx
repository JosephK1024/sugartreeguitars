import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Photo } from "@/components/Photo";
import { StatusBadge } from "@/components/StatusBadge";
import { SpecsTable } from "@/components/SpecsTable";
import { BuyButton } from "@/components/BuyButton";
import { getAllBuilds, getBuild, formatPrice } from "@/lib/content";

const buildPhotos: Record<string, string> = {
  "koa-000-12fret": "/images/headstock-detail.jpeg",
  "bocote-parlor-adirondack": "/images/headstock-back.jpeg",
  "bocote-parlor-bearclaw": "/images/dread-top.jpeg",
};

export function generateStaticParams() {
  return getAllBuilds().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const build = getBuild(slug);
  if (!build) return {};
  return {
    title: build.title,
    description: build.summary ?? `${build.body} — ${build.top} top, ${build.back_sides} back and sides.`,
  };
}

export default async function BuildPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const build = getBuild(slug);
  if (!build) notFound();

  const price = formatPrice(build.price, build.currency);

  return (
    <article className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        {buildPhotos[build.slug] ? (
          <Photo
            src={buildPhotos[build.slug]}
            alt={build.hero_caption ?? `${build.title} — ${build.body}, ${build.back_sides}`}
            ratio="square"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <ImagePlaceholder
            ratio="square"
            label={build.hero_caption ?? `${build.body} · ${build.back_sides}`}
          />
        )}

        <div>
          <StatusBadge status={build.status} />
          <h1 className="font-serif text-5xl text-bark-600 mt-4 leading-tight">
            {build.title}
          </h1>
          {build.summary && (
            <p className="mt-4 text-lg text-ink/80 leading-relaxed">{build.summary}</p>
          )}

          {build.status === "available" && price && (
            <div className="mt-8 p-6 bg-bark-50 border border-bark-200 rounded-sm">
              <div className="text-3xl font-serif text-bark-600 mb-1">{price}</div>
              <div className="text-sm text-ink/70 mb-4">
                Payment in full at reservation. Domestic shipping &amp; hardshell case included.
              </div>
              <BuyButton slug={build.slug} />
            </div>
          )}

          {build.status === "sold" && (
            <div className="mt-8 text-sm text-ink/60 italic">
              This instrument has found its player.
            </div>
          )}

          {build.status === "given" && (
            <div className="mt-8 text-sm text-bark-600 italic">
              Given to a musician through the SugarTree giving program.
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <h2 className="font-serif text-2xl text-bark-600 mb-4">Specifications</h2>
          <SpecsTable build={build} />
        </div>

        <div className="prose prose-bark prose-lg max-w-none">
          <MDXRemote source={build.content} />
        </div>
      </div>
    </article>
  );
}
