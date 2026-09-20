import { Photo } from "@/components/Photo";
import { ToneMatcher } from "@/components/ToneMatcher";

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
    name: "Alaskan yellow cedar",
    role: "Top wood option",
    note: "Pale, tight-grained, and stiff for its weight. Slower to “open up” than spruce, but rewards patience with a focused, almost bell-like clarity once played in — spruce-like headroom with a touch more sweetness.",
  },
  {
    name: "Port Orford cedar",
    role: "Top wood option — limited supply",
    note: "Rare and aromatic, with a stiffness-to-weight ratio that rivals Adirondack. Warmer and more immediately responsive than spruce, without the long break-in period cedar tops are known for. Used selectively.",
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
    name: "Indian rosewood",
    note: "The industry-standard rosewood since the 1969 export restrictions on Brazilian, and for good reason — dark, dense, and richly overtone-laden, with a low end that stays clear under heavy playing. Fully legal to source and trade with the right paperwork, and the wood behind most guitars people describe as “rosewood-voiced.”",
  },
  {
    name: "Brazilian rosewood",
    note: "The historic benchmark for complexity and sustain — a deeper overtone stack than any other rosewood, shimmering across the whole range. Listed under CITES Appendix I since 1992, so every board we use is certified pre-ban or otherwise legally documented stock, paperwork included. Available on request, priced accordingly.",
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
    name: "Maple",
    note: "Bright, articulate, and honest — it doesn't add color so much as get out of the way, which is exactly what some players want. Hard maple (including birdseye) leans clean and percussive; bigleaf maple splits the difference with a bit more warmth and figure. A strong choice for a guitar meant to sit in a mix, or for a player who wants every note to arrive exactly as picked.",
  },
  {
    name: "Black walnut",
    note: "Warm and balanced when well-quartered, sitting tonally between mahogany and rosewood — less overtone complexity than rosewood, more low-end weight than mahogany. Handsome, understated grain that doesn't need figure to look finished.",
  },
  {
    name: "Cherry",
    note: "Light, bright, and ages beautifully with UV exposure, deepening from pale pink-brown toward amber over its first years in the sun. The set currently in inventory came from a supplier labeling it “Cherry Dream” — best read as a trade name for a nicely figured cherry rather than a distinct species.",
  },
];

const neckWoods = [
  {
    name: "Spanish cedar",
    role: "Our default neck wood",
    note: "Light, stable, and easy to carve to a comfortable profile. Paired with a carbon fiber reinforcement tube, it holds its set reliably across seasons — the signature SugarTree neck.",
  },
  {
    name: "Mahogany",
    role: "Available by request",
    note: "Slightly heavier and stiffer than Spanish cedar, with a long track record in steel-string necks.",
  },
  {
    name: "Maple",
    role: "Available by request",
    note: "Denser and stiffer still — favored when a player wants maximum neck rigidity, at some cost in weight.",
  },
];

const fingerboardWoods = [
  {
    name: "Ebony",
    role: "Our default",
    note: "Dense, glassy-smooth under the fingers, and stable across humidity swings. Black or lightly streaked, depending on the board.",
  },
  {
    name: "Rosewood",
    role: "Available by request",
    note: "A more open pore structure than ebony, with a touch of natural give under the fingers that some players prefer.",
  },
  {
    name: "Osage orange",
    role: "Available by request",
    note: "Bright yellow-green when fresh, mellowing to a warm amber-brown with light exposure. Dense and hard — an unusual but excellent alternative to ebony.",
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

      {/* Neck woods */}
      <section className="mb-20">
        <h2 className="font-serif text-3xl text-bark-600 mb-4">Neck Woods</h2>
        <p className="text-ink/75 mb-8">
          Stability and carvability matter more here than tone &mdash; the neck is
          along for the ride, not driving the voice.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {neckWoods.map((w) => (
            <div key={w.name} className="border border-bark-200 rounded-sm p-5 bg-bark-50">
              <div className="font-serif text-xl text-bark-600">{w.name}</div>
              <div className="text-xs uppercase tracking-widest text-bark-500 mt-1 mb-2">
                {w.role}
              </div>
              <p className="text-ink/80 leading-relaxed text-sm">{w.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fingerboard & bridge */}
      <section className="mb-20">
        <h2 className="font-serif text-3xl text-bark-600 mb-4">Fingerboard &amp; Bridge Woods</h2>
        <p className="text-ink/75 mb-8">
          The same three woods serve both roles &mdash; dense, hard, and stable
          under string tension.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {fingerboardWoods.map((w) => (
            <div key={w.name} className="border border-bark-200 rounded-sm p-5 bg-bark-50">
              <div className="font-serif text-xl text-bark-600">{w.name}</div>
              <div className="text-xs uppercase tracking-widest text-bark-500 mt-1 mb-2">
                {w.role}
              </div>
              <p className="text-ink/80 leading-relaxed text-sm">{w.note}</p>
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

        <div className="border border-bark-200 rounded-sm overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-[9rem_1fr_1fr]">
            <div className="hidden sm:block bg-bark-100 border-b border-r border-bark-200" />
            <div className="p-4 bg-bark-100 border-b border-r border-bark-200 font-serif text-base sm:text-lg text-bark-600 text-center hidden sm:flex items-center justify-center">
              Stiff back &amp; sides
            </div>
            <div className="p-4 bg-bark-100 border-b border-bark-200 font-serif text-base sm:text-lg text-bark-600 text-center hidden sm:flex items-center justify-center">
              Warm back &amp; sides
            </div>

            <div className="hidden sm:flex items-center justify-center p-4 bg-bark-100 border-r border-bark-200 font-serif text-lg text-bark-600 text-center">
              Stiff top
            </div>
            <div className="border-r border-bark-200">
              <PairCell
                label="Stiff top + stiff back & sides"
                result="Maximum projection, brightness, and note separation."
              />
            </div>
            <PairCell
              label="Stiff top + warm back & sides"
              result="Focused fundamental, warmer coloration, direct."
            />

            <div className="hidden sm:flex items-center justify-center p-4 bg-bark-100 border-r border-t border-bark-200 font-serif text-lg text-bark-600 text-center">
              Flexible top
            </div>
            <div className="border-r border-t border-bark-200">
              <PairCell
                label="Flexible top + stiff back & sides"
                result="Warm and sensitive with good projection."
              />
            </div>
            <div className="border-t border-bark-200">
              <PairCell
                label="Flexible top + warm back & sides"
                result="Maximum warmth. Limited headroom."
              />
            </div>
          </div>
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

      {/* Build Your Tone tool */}
      <section className="mb-20">
        <h2 className="font-serif text-3xl text-bark-600 mb-4">Build Your Tone</h2>
        <p className="text-ink/75 mb-8">
          Pick a top, a back &amp; sides wood, a body, and a scale length, and
          we&rsquo;ll describe the guitar they&rsquo;d make together. Not a
          substitute for playing one &mdash; a starting point for a conversation.
        </p>
        <ToneMatcher />
      </section>

      <p className="font-serif text-xl text-bark-600 italic max-w-prose">
        The wood was never the constraint. The willingness to listen to it was.
      </p>
    </article>
  );
}

function PairCell({ label, result }: { label: string; result: string }) {
  return (
    <div className="p-5 bg-white h-full flex flex-col gap-2">
      <div className="text-xs uppercase tracking-widest text-bark-500 sm:hidden">
        {label}
      </div>
      <p className="text-ink/85 leading-relaxed">{result}</p>
    </div>
  );
}
