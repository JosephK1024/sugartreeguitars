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
      <div className="space-y-5 text-lg text-ink/85 leading-relaxed max-w-prose mb-12">
        <p>
          Four of our eight annual guitars are designated experimental &mdash; builds
          that push beyond proven combinations into new territory. Different tonewoods.
          Unconventional bracing approaches. New reinforcement methods. Material
          combinations that haven&rsquo;t been extensively documented.
        </p>
        <p>
          Some become the standard approaches of future builds. Some teach us what
          not to do. All of them advance our understanding of what acoustic
          instruments can be.
        </p>
        <p className="text-bark-600 italic font-serif text-xl">
          We don&rsquo;t experiment in shortcuts. We experiment in materials and
          design choices that need to be heard before they can be judged.
        </p>
      </div>

      <div className="rounded-sm border border-bark-200 bg-bark-50 p-6 mb-16 text-ink/80">
        <h2 className="font-serif text-xl text-bark-600 mb-2">How we run an experiment</h2>
        <ul className="space-y-2 text-sm leading-relaxed">
          <li>
            <strong>Isolate one variable.</strong> Where possible, experiments are
            built in pairs &mdash; two near-identical guitars with one element changed.
            The two bocote parlors below are an example: same body, same bracing,
            same construction; only the top wood differs.
          </li>
          <li>
            <strong>Document everything.</strong> Tap-tone notes at every stage,
            weight measurements, plate-flex impressions, photographs of bracing
            geometry.
          </li>
          <li>
            <strong>Listen long enough to mean it.</strong> Verdicts come after the
            instrument has settled, been played in, and been heard in more than one
            room.
          </li>
        </ul>
        <p className="mt-4 text-sm text-ink/70">
          See the underlying decisions in our{" "}
          <Link href="/philosophy" className="text-bark-600 underline">build system</Link>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {builds.map((b) => (
          <Link key={b.slug} href={`/builds/${b.slug}`} className="group block">
            <ImagePlaceholder ratio="square" label={b.title} />
            <div className="mt-4 space-y-2">
              <StatusBadge status={b.status} />
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
