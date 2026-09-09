import Link from "next/link";

export const metadata = {
  title: "The Circle of Fifths for Guitar",
  description:
    "A free interactive circle of fifths built for guitarists: chord families, capo positions, chord and scale diagrams in nine tunings, all seven modes, and a practice mode. No sign-up.",
  alternates: { canonical: "/circle-of-fifths" },
  openGraph: {
    title: "The Circle of Fifths for Guitar — free interactive tool",
    description:
      "Chord families, capo positions, chord and scale diagrams in nine tunings, all seven modes. Free from SugarTree Guitars.",
    type: "website",
  },
};

const APP_URL = "/tools/circle-of-fifths/index.html";

const features = [
  {
    title: "Nine tunings",
    body: "Standard, Double Drop D, Modal E, Modal D, DADGAD, Open G, Open Gsus4, Open C6, and the Crosby tuning. Every chord and scale diagram redraws for the tuning you pick.",
  },
  {
    title: "Chord shapes you can trust",
    body: "Each voicing is brute-force checked to sound only real chord tones with the root in the bass — never a hand-guessed shape. Flip any chord between its E-shape and A-shape.",
  },
  {
    title: "All seven modes",
    body: "Ionian through Locrian, built on your key's own tonic and spelled from its own letter, each with a fretboard diagram, note names, and a note on the mood it carries.",
  },
  {
    title: "Four genre sounds",
    body: "Plain/Folk, Jazz, Blues, and Punk reshape the whole chord family at once — and the progressions list follows along, so a 12-bar blues reads G7–C7–D7 instead of G–C–D.",
  },
  {
    title: "Embellishment chips",
    body: "Swap any chord for add9, maj7, sus2, sus4, m7, m9, dom7, or a power chord, with a caption on the feel it brings. Which chips appear depends on the chord's real role in the key.",
  },
  {
    title: "Capo positions",
    body: "For any key, the lowest capo fret that lets you play fully open C, D, E, G, A, Am, Dm, or Em shapes — so you can stay in the shapes your hands already know.",
  },
  {
    title: "Positions up the neck",
    body: "Walk any scale or mode through every position it naturally falls into, root-anchored, from the nut to the top of the neck. Your choices are remembered as you change keys.",
  },
  {
    title: "A place for song ideas",
    body: "Catch chord and note snippets in a scratchpad while you noodle, then export the lot when something starts to turn into a song.",
  },
];

export default function CircleOfFifthsPage() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-bark-600/80">
          A free tool from SugarTree Guitars
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-bark-600 leading-tight">
          The Circle of Fifths, for Guitar
        </h1>
        <p className="mt-5 text-lg text-ink/80 leading-relaxed">
          Pick the key you already play in. It lays out the seven chords that belong to it, the
          neighbors worth borrowing from, a capo position that keeps you in open shapes, and
          every chord and scale drawn on the fretboard — in nine different tunings.
        </p>
        <p className="mt-5 text-sm text-ink/60">
          Free to use. No sign-up, nothing to install, and it works on a phone.
        </p>
        <p className="mt-6">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-bark-600 text-bark-600 rounded-sm hover:bg-bark-50 transition-colors text-sm"
          >
            Open it full screen
            <span aria-hidden="true">↗</span>
          </a>
        </p>
      </section>

      <section className="mx-auto max-w-[100rem] px-3 sm:px-6 pb-4">
        <div className="rounded-sm border border-bark-200 overflow-hidden bg-white shadow-sm">
          <iframe
            src={APP_URL}
            title="Interactive circle of fifths for guitar"
            className="block w-full h-[calc(100vh-7rem)] min-h-[34rem]"
          />
        </div>
        <p className="mt-3 text-center text-xs text-ink/50">
          Scrolls inside its own frame. For the full-screen version — including practice mode —{" "}
          <a href={APP_URL} target="_blank" rel="noopener" className="underline hover:text-bark-600">
            open it in its own tab
          </a>
          .
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-serif text-3xl text-bark-600 text-center">What&rsquo;s in it</h2>
        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="font-serif text-xl text-bark-600">{f.title}</h3>
              <p className="mt-2 text-ink/75 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-bark-200 bg-bark-50/40">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl text-bark-600">
            Built by someone who builds guitars
          </h2>
          <p className="mt-5 text-lg text-ink/80 leading-relaxed">
            SugarTree makes eight handcrafted acoustic guitars a year in Amelia, Ohio, and gives
            four extraordinary instruments away to musicians who deserve them. This tool is free
            because the playing matters more than the selling.
          </p>
          <p className="mt-6 text-ink/70 italic">Nothing Extra. Nothing Missing.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/builds"
              className="inline-flex items-center px-6 py-3 bg-bark-600 text-cream rounded-sm hover:bg-bark-700 transition-colors"
            >
              See the guitars
            </Link>
            <Link
              href="/giving"
              className="inline-flex items-center px-6 py-3 border border-bark-600 text-bark-600 rounded-sm hover:bg-bark-50 transition-colors"
            >
              The giving program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
