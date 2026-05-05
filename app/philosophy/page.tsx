export const metadata = { title: "Philosophy" };

const sections = [
  {
    title: "Wood Selection",
    body: "Every tonewood chosen by ear before eye. Three stage voicing process: tap tuning at selection, flex feel after thickness sanding, tap tuning through brace carving. Consistent grain and density prioritized over dramatic figure. Plates rejected if tap tone is dull, inconsistent, or lacks sustain regardless of visual appeal.",
  },
  {
    title: "Built Light",
    body: "Carbon fiber hollow tube replaces steel truss rods. Relieved bridge undersides remove dead weight from the soundboard. Spanish cedar necks replace heavier alternatives. Lightweight tuning machines specified for every build. Every gram evaluated for acoustic cost before inclusion.",
  },
  {
    title: "Forward Shifted Scalloped X Bracing",
    body: "X brace intersection positioned toward soundhole versus standard post-war position. Increases free vibrating area of lower bout. Improves bass response and volume from thinner tops. Returns to pre-war building practice abandoned for production efficiency not acoustic reasons.",
  },
  {
    title: "Hide Glue for Soundboard Bracing",
    body: "Hot hide glue used for brace-to-soundboard joints specifically. Cures glass hard — harder than surrounding wood. Glue line acoustically transparent. Squeeze out fillets left in place deliberately — creates gradual stiffness transition, distributes stress at brace feet, improves energy transfer. Titebond used where reversibility and open time matter more.",
  },
  {
    title: "AI Assisted Design",
    body: "Every build benefits from AI assisted design research. Centuries of lutherie knowledge, thousands of builders’ insights, materials science synthesized into each build decision. AI informs. Builder decides.",
  },
  {
    title: "The Charity Commitment",
    body: "Four guitars donated annually to underprivileged musicians. Same standard. Same materials. Same care. Not charity — an act of listening.",
  },
];

export default function PhilosophyPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-serif text-5xl text-bark-600 mb-6">Build Philosophy</h1>
      <p className="text-lg text-ink/75 max-w-prose mb-16">
        The principles that guide every SugarTree build. Refined through experiment,
        failure, pivot, and reflection.
      </p>

      <div className="space-y-12">
        {sections.map((s) => (
          <section
            key={s.title}
            className="grid md:grid-cols-[1fr_2fr] gap-8 pb-12 border-b border-bark-200 last:border-0"
          >
            <h2 className="font-serif text-3xl text-bark-600">{s.title}</h2>
            <p className="text-ink/85 leading-relaxed text-lg">{s.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
