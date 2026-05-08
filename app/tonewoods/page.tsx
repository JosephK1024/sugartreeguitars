import { Photo } from "@/components/Photo";

export const metadata = {
  title: "Tonewoods",
  description:
    "How SugarTree selects and pairs tonewoods. Stiffness, density, character, and the woods we keep on hand.",
};

const topWoods = [
  {
    name: "Adirondack spruce",
    role: "Primary top and bracing wood",
    note: "Stiffest of the spruces, highest strength-to-weight. Maximum headroom; rewards thinning.",
  },
  {
    name: "Sitka spruce",
    role: "Top wood option",
    note: "Stiffness somewhat below Adirondack but consistent and predictable. Reliable for dread and 000 voicings.",
  },
  {
    name: "Bear claw Sitka",
    role: "Top wood — figured",
    note: "Stiffness varies with the figure. Tap tuning every stage matters more here than on plain-grain stock.",
  },
  {
    name: "Redwood",
    role: "Soundboards and tone bars",
    note: "More flexible, lower density. Beautiful at moderate volume; pairs especially well with bocote. Not used for necks (learned the hard way).",
  },
  {
    name: "Mahogany",
    role: "Reference top and back/sides",
    note: "Flexible relative to stiffness, on the heavier side. Shows up in honest, midrange-forward voices.",
  },
];

const backSidesWoods = [
  {
    name: "Bocote",
    note: "Dark, complex, authoritative. Strong fundamental, complex overtones, beautiful sustain bloom, medium decay. Best paired with Adirondack for articulation and clarity. Excellent with Sitka. Redwood pairing produces extraordinary warmth at moderate volumes. Avoid mahogany top — it wastes bocote's complexity.",
  },
  {
    name: "Hawaiian koa",
    note: "Sweet, complex, warm, immediately musical. Distinctive midrange in the best sense. Slightly soft attack — notes develop after pick contact. Bass round and warm rather than extended; treble chimes rather than glares. The 000 body is ideal — large enough to let the full voice develop, small enough to keep the midrange sweetness in focus. Ribbon-grain heartwood performs closer to theoretical best than heavily figured pieces.",
  },
  {
    name: "Bolivian rosewood (Morado)",
    note: "Warm, complex, the closest legal alternative to Brazilian. Five-year reference dreadnought built with this wood and a Sitka top remains stable, loud, clear.",
  },
  {
    name: "Katalox",
    note: "Balanced, punchy, underrated. Worth specifying when a builder wants rosewood-adjacent character without sourcing concerns.",
  },
  {
    name: "Crelicam ebony",
    note: "Bright and glassy. Demanding to work — narrow tolerance for moisture and movement. Reserved for builds where its character earns the difficulty.",
  },
  {
    name: "Mahogany",
    note: "Honest, midrange-forward, harmonically generous. The reference back-and-sides wood for measuring everything else against.",
  },
  {
    name: "Walnut",
    note: "Available. Warm and balanced when well-quartered.",
  },
  {
    name: "Cherry",
    note: "Available. Light, bright, ages handsomely with UV exposure.",
  },
];

const honestAssessments = [
  {
    name: "Maple",
    verdict: "Limited use",
    note: "Bright, reflective, sterile for our philosophy. It works in archtop, bluegrass flatpicking, and recording contexts — but it's incompatible with the touch-sensitive fingerpicking voice we're after. Better used for necks, bindings, or sold and traded.",
  },
  {
    name: "Padauk",
    verdict: "Avoid",
    note: "Splintery and unpredictable to work with. The vivid orange-red color fades to a generic brown within months to years. Acoustic properties adequate but not exceptional. Better options exist in inventory.",
  },
];

export default function TonewoodsPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-serif text-5xl text-bark-600 mb-6">Tonewoods</h1>
      <p className="text-lg text-ink/75 max-w-prose mb-12">
        How we select and pair the woods that make a guitar a voice. Tap tone first.
        Visual character second.
      </p>

      <Photo
        src="/images/wood-drying.jpeg"
        alt="Tonewood plates curing on the drying rack."
        ratio="wide"
        className="mb-16"
        priority
        sizes="(min-width: 1024px) 896px, 100vw"
      />

      {/* Selection philosophy */}
      <section className="mb-20">
        <h2 className="font-serif text-3xl text-bark-600 mb-4">Selection Philosophy</h2>
        <div className="space-y-4 text-lg text-ink/85 leading-relaxed">
          <p>
            Every tonewood gets tap-tuned and flex-tested before visual evaluation.
            Consistent grain and density beat dramatic figure. Highly figured wood
            introduces acoustic unpredictability and ages less consistently than
            ribbon-grain or straight-grain stock. Plates that fail the tap test are
            rejected regardless of how they photograph.
          </p>
          <p>
            Sapwood is avoided &mdash; density difference, stability difference,
            finishing inconsistency. Quartersawn stock is preferred for neck and
            brace material. The criterion is always: what does this piece of wood
            actually sound like and how predictably will it age?
          </p>
        </div>
      </section>

      {/* Top woods */}
      <section className="mb-20">
        <h2 className="font-serif text-3xl text-bark-600 mb-4">Top Woods</h2>
        <p className="text-ink/75 mb-8">
          Ranked, top to bottom, by stiffness-to-weight.
        </p>
        <ol className="space-y-6">
          {topWoods.map((w, i) => (
            <li key={w.name} className="grid grid-cols-[3rem_1fr] gap-4 pb-6 border-b border-bark-200">
              <div className="font-serif text-3xl text-bark-400">{i + 1}</div>
              <div>
                <div className="font-serif text-2xl text-bark-600">{w.name}</div>
                <div className="text-xs uppercase tracking-widest text-bark-500 mt-1">
                  {w.role}
                </div>
                <p className="mt-2 text-ink/85 leading-relaxed">{w.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Back/sides */}
      <section className="mb-20">
        <h2 className="font-serif text-3xl text-bark-600 mb-4">Back &amp; Sides</h2>
        <p className="text-ink/75 mb-8">
          The character the top is paired against. We keep an inventory wide enough
          to match a build to a player&rsquo;s sound, not the other way around.
        </p>
        <div className="space-y-8">
          {backSidesWoods.map((w) => (
            <div key={w.name} className="pb-6 border-b border-bark-200 last:border-0">
              <h3 className="font-serif text-2xl text-bark-600 mb-2">{w.name}</h3>
              <p className="text-ink/85 leading-relaxed">{w.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tonal pairing principles */}
      <section className="mb-20">
        <h2 className="font-serif text-3xl text-bark-600 mb-4">Tonal Pairing</h2>
        <p className="text-ink/75 mb-8">
          Four interactions you can predict before the first cut.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <PairCard
            top="Stiff top"
            backSides="stiff back &amp; sides"
            result="Maximum projection, brightness, and note separation."
          />
          <PairCard
            top="Stiff top"
            backSides="warm back &amp; sides"
            result="Focused fundamental, warmer coloration, direct."
          />
          <PairCard
            top="Flexible top"
            backSides="stiff back &amp; sides"
            result="Warm and sensitive with good projection."
          />
          <PairCard
            top="Flexible top"
            backSides="warm back &amp; sides"
            result="Maximum warmth. Limited headroom."
          />
        </div>

        <div className="mt-12 space-y-4 text-lg text-ink/85 leading-relaxed">
          <p>
            <strong>Body shape compounds these choices.</strong> A parlor body
            concentrates and focuses tonal character &mdash; bracing decisions have
            outsized effect on a small body. A 12-fret body join drives the bridge
            closer to the lower-bout center, where the top is most compliant: fuller
            bass, more complex bloom, vibrating area more evenly distributed both
            sides of the bridge.
          </p>
          <p>
            <strong>Forward shifted X bracing and a 12-fret join are
            acoustically aligned.</strong> Both point toward maximum lower-bout
            vibration. When we choose them together, we&rsquo;re stacking the deck
            on purpose.
          </p>
        </div>
      </section>

      {/* What we don't use */}
      <section className="mb-20">
        <h2 className="font-serif text-3xl text-bark-600 mb-4">What We Don&rsquo;t Use</h2>
        <p className="text-ink/75 mb-8">
          Honest assessments of woods we keep around but won&rsquo;t generally
          build with. Tradition is a starting point, not an answer.
        </p>
        <div className="space-y-8">
          {honestAssessments.map((w) => (
            <div key={w.name} className="grid md:grid-cols-[1fr_2fr] gap-6 pb-6 border-b border-bark-200 last:border-0">
              <div>
                <h3 className="font-serif text-2xl text-bark-600">{w.name}</h3>
                <div className="text-xs uppercase tracking-widest text-bark-500 mt-1">
                  {w.verdict}
                </div>
              </div>
              <p className="text-ink/85 leading-relaxed text-lg">{w.note}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="font-serif text-xl text-bark-600 italic max-w-prose">
        The wood was never the constraint. The willingness to listen to it was.
      </p>
    </article>
  );
}

function PairCard({ top, backSides, result }: { top: string; backSides: string; result: string }) {
  return (
    <div className="border border-bark-200 rounded-sm p-6 bg-bark-50">
      <div className="text-sm uppercase tracking-widest text-bark-500 mb-2">{top}</div>
      <div className="font-serif text-lg text-bark-600 mb-3" dangerouslySetInnerHTML={{ __html: `+ ${backSides}` }} />
      <p className="text-ink/80 leading-relaxed">{result}</p>
    </div>
  );
}
