import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Photo } from "@/components/Photo";
import { getAllArticles, getArticle, formatDate } from "@/lib/content";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-4 text-sm text-ink/50">{formatDate(article.date)}</div>

      <h1 className="font-serif text-5xl text-bark-600 leading-tight mb-6">
        {article.title}
      </h1>

      {article.summary && (
        <p className="text-xl text-ink/75 leading-relaxed mb-10 border-l-2 border-bark-300 pl-4">
          {article.summary}
        </p>
      )}

      {article.photo && (
        <figure className="mb-10">
          <Photo
            src={article.photo}
            alt={article.photo_caption ?? article.title}
            ratio="wide"
            priority
            sizes="(min-width: 768px) 768px, 100vw"
          />
          {article.photo_caption && (
            <figcaption className="mt-2 text-sm text-ink/50 text-center">
              {article.photo_caption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="prose prose-bark prose-lg max-w-none">
        <MDXRemote source={article.content} />
      </div>

      <div className="mt-16 pt-8 border-t border-bark-200">
        <a href="/articles" className="text-sm text-bark-600 hover:underline">
          ← All notes
        </a>
      </div>
    </article>
  );
}
