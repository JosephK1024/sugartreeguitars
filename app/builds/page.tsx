import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Photo } from "@/components/Photo";
import { StatusBadge } from "@/components/StatusBadge";
import { getAllBuilds, formatPrice } from "@/lib/content";

const buildPhotos: Record<string, string> = {
  "koa-000-12fret": "/images/headstock-detail.jpeg",
  "bocote-parlor-adirondack": "/images/headstock-back.jpeg",
  "bocote-parlor-bearclaw": "/images/dread-top.jpeg",
};

export const metadata = { title: "Builds" };

export default function BuildsPage() {
  const builds = getAllBuilds();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-serif text-5xl text-bark-600 mb-4">Builds</h1>
      <p className="text-lg text-ink/75 max-w-prose mb-12">
        Eight guitars a year. Four experimental. Four sale or given. Each one
        documented from wood selection to final voicing.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {builds.map((b) => {
          const price = formatPrice(b.price, b.currency);
          return (
            <Link key={b.slug} href={`/builds/${b.slug}`} className="group block">
              {buildPhotos[b.slug] ? (
                <Photo
                  src={buildPhotos[b.slug]}
                  alt={`${b.title} — ${b.body}, ${b.back_sides}`}
                  ratio="square"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : (
                <ImagePlaceholder
                  ratio="square"
                  label={`${b.body} · ${b.back_sides}`}
                />
              )}
              <div className="mt-4 space-y-2">
                <StatusBadge status={b.status} />
                <h2 className="font-serif text-2xl text-bark-600 group-hover:underline">
                  {b.title}
                </h2>
                <div className="text-sm text-ink/70">
                  {b.top} top · {b.back_sides} back &amp; sides
                </div>
                {price && b.status === "available" && (
                  <div className="text-bark-700 font-medium">{price}</div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
