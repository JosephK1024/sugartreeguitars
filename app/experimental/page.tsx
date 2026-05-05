import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { StatusBadge } from "@/components/StatusBadge";
import { getAllBuilds } from "@/lib/content";

export const metadata = { title: "Experimental Builds" };

export default function ExperimentalPage() {
  const builds = getAllBuilds().filter(
    (b) => b.status === "experimental" || b.experimental,
  );

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-serif text-5xl text-bark-600 mb-6">Experimental Builds</h1>
      <p className="text-lg text-ink/80 leading-relaxed max-w-prose mb-16">
        Four of our eight annual guitars are designated experimental — builds that push
        beyond proven combinations into new territory. Different tonewoods. Unconventional
        bracing approaches. New reinforcement methods. Material combinations that
        haven&rsquo;t been extensively documented. Some become the standard approaches of
        future builds. Some teach us what not to do. All of them advance our understanding
        of what acoustic instruments can be.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {builds.map((b) => (
          <Link key={b.slug} href={`/builds/${b.slug}`} className="group block">
            <ImagePlaceholder ratio="square" label={b.title} />
            <div className="mt-4 space-y-2">
              <StatusBadge status="experimental" />
              <h2 className="font-serif text-2xl text-bark-600 group-hover:underline">
                {b.title}
              </h2>
              {b.summary && <p className="text-ink/75 text-sm leading-relaxed">{b.summary}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
