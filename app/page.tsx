import Link from "next/link";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Photo } from "@/components/Photo";
import { getAllBuilds } from "@/lib/content";

export default function HomePage() {
  const builds = getAllBuilds().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-bark-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/brand/sugartree-mark.svg"
              alt=""
              width={64}
              height={64}
              className="mb-6"
            />
            <h1 className="font-serif text-5xl md:text-6xl text-bark-600 leading-[1.05]">
              Eight guitars a year.
              <br />
              Every one of them extraordinary.
            </h1>
            <p className="mt-6 text-lg text-ink/80 max-w-prose leading-relaxed">
              Handcrafted acoustic guitars built with an engineer&rsquo;s precision, a
              musician&rsquo;s ear, and a philosopher&rsquo;s refusal to accept convention.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/builds"
                className="inline-flex items-center px-6 py-3 bg-bark-600 text-cream rounded-sm hover:bg-bark-700 transition-colors"
              >
                See the builds
              </Link>
              <Link
                href="/philosophy"
                className="inline-flex items-center px-6 py-3 border border-bark-600 text-bark-600 rounded-sm hover:bg-bark-50 transition-colors"
              >
                The philosophy
              </Link>
            </div>
          </div>
          <Photo
            src="/images/headstock-detail.jpeg"
            alt="Slotted headstock with gold tuners — close detail of a SugarTree build."
            ratio="portrait"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-lg leading-relaxed text-ink/85">
        <p>
          SugarTree Guitars are built one at a time, in small batches of eight annually,
          by a builder who believes that extraordinary sound begins long before the first
          brace is glued. Four guitars each year push the boundaries of what acoustic
          instruments can be. Four are available by commission or sale to players who know
          the difference. And four go to musicians who need them most.
        </p>
      </section>

      {/* Atmospheric break — wood selection */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <Photo
          src="/images/wood-drying.jpeg"
          alt="Tonewood plates curing on the drying rack."
          ratio="wide"
          sizes="(min-width: 1280px) 1152px, 100vw"
        />
        <p className="mt-4 text-sm text-ink/60 italic font-serif">
          Tonewood, curing. The sound begins before the first cut.
        </p>
      </section>

      {/* Three Pillars */}
      <section className="border-y border-bark-200 bg-bark-50">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-3 gap-12">
          <Pillar
            title="The Wood Speaks First"
            body="Every tonewood is chosen by ear before it&rsquo;s chosen by eye. If it doesn&rsquo;t tap right, it doesn&rsquo;t make the cut."
          />
          <Pillar
            title="Engineering Meets Craft"
            body="Carbon fiber reinforcement, relieved bridges, forward shifted bracing, and AI-assisted design bring centuries of lutherie knowledge to every build decision."
          />
          <Pillar
            title="Eight Guitars. Four Given Away."
            body="Every year, four SugarTree guitars go to underprivileged musicians who deserve an instrument as extraordinary as their talent."
          />
        </div>
      </section>

      {/* Current Builds */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-serif text-4xl text-bark-600">Current Builds</h2>
          <Link href="/builds" className="text-sm text-bark-600 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {builds.map((b) => {
            const heroPhoto = b.photos?.[0];
            return (
              <Link
                key={b.slug}
                href={`/builds/${b.slug}`}
                className="group block"
              >
                {heroPhoto ? (
                  <Photo
                    src={heroPhoto}
                    alt={`${b.title} — ${b.body}, ${b.back_sides}`}
                    ratio="square"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                ) : (
                  <ImagePlaceholder ratio="square" label={`${b.body} · ${b.back_sides}`} />
                )}
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-widest text-bark-500">
                    {b.status}
                  </div>
                  <div className="font-serif text-2xl text-bark-600 group-hover:underline">
                    {b.title}
                  </div>
                  <div className="text-sm text-ink/70 mt-1">
                    {b.top} top · {b.back_sides} back &amp; sides
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quiet feature shot */}
      <section className="border-t border-bark-200 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <Photo
            src="/images/wall-classical.jpeg"
            alt="A finished SugarTree guitar at rest on the workshop wall."
            ratio="portrait"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div>
            <h2 className="font-serif text-4xl text-bark-600 leading-tight">
              The voice was always in the tree.
            </h2>
            <p className="mt-6 text-lg text-ink/80 leading-relaxed">
              Our job is simply to find it and set it free. Every SugarTree guitar
              is the result of three stages of voicing &mdash; tap tuning at wood
              selection, flex feel after thickness sanding, and tap tuning through
              brace carving. We stop when the wood says stop.
            </p>
            <Link
              href="/philosophy"
              className="mt-8 inline-flex items-center text-bark-600 border-b border-bark-600 pb-1 hover:text-bark-700"
            >
              How we build →
            </Link>
          </div>
        </div>
      </section>

      {/* Giving teaser */}
      <section className="border-t border-bark-200 bg-bark-600 text-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Give the Unheard a Voice.</h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/85 max-w-prose mx-auto">
            A guitar placed in the hands of a musician who has never held a truly great
            instrument is not charity. It is an act of listening &mdash; an acknowledgment
            that the voice was always there, waiting for the right resonance to release it.
          </p>
          <Link
            href="/giving"
            className="mt-8 inline-flex items-center px-6 py-3 border border-cream rounded-sm hover:bg-cream hover:text-bark-600 transition-colors"
          >
            The giving program
          </Link>
        </div>
      </section>
    </>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-serif text-2xl text-bark-600 mb-3">{title}</h3>
      <p className="text-ink/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
