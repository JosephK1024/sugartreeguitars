import Link from "next/link";
import { Photo } from "@/components/Photo";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { getAllArticles, formatDate } from "@/lib/content";

export const metadata = { title: "Notes" };

const PER_PAGE = 3;

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const all = getAllArticles();
  const totalPages = Math.max(1, Math.ceil(all.length / PER_PAGE));
  const current = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const articles = all.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-serif text-5xl text-bark-600 mb-4">Notes</h1>
      <p className="text-lg text-ink/75 max-w-prose mb-12">
        Thinking out loud on lutherie, tonewoods, tools, and the decisions that
        shape every build.
      </p>

      {all.length === 0 ? (
        <p className="text-ink/60 italic">No notes yet — check back soon.</p>
      ) : (
        <>
          <div className="divide-y divide-bark-200">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="group flex gap-8 py-10 items-start"
              >
                {a.photo ? (
                  <div className="shrink-0 w-32 h-32 sm:w-40 sm:h-40">
                    <Photo
                      src={a.photo}
                      alt={a.photo_caption ?? a.title}
                      ratio="square"
                      sizes="160px"
                    />
                  </div>
                ) : (
                  <div className="shrink-0 w-32 h-32 sm:w-40 sm:h-40">
                    <ImagePlaceholder ratio="square" label="" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-ink/50 mb-2">{formatDate(a.date)}</div>
                  <h2 className="font-serif text-2xl text-bark-600 group-hover:underline leading-snug mb-3">
                    {a.title}
                  </h2>
                  {a.summary && (
                    <p className="text-ink/75 leading-relaxed line-clamp-3">{a.summary}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-bark-200">
              {current > 1 ? (
                <Link
                  href={`/articles?page=${current - 1}`}
                  className="text-sm text-bark-600 hover:underline"
                >
                  ← Newer
                </Link>
              ) : (
                <span />
              )}
              <span className="text-sm text-ink/40">
                {current} / {totalPages}
              </span>
              {current < totalPages ? (
                <Link
                  href={`/articles?page=${current + 1}`}
                  className="text-sm text-bark-600 hover:underline"
                >
                  Older →
                </Link>
              ) : (
                <span />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
