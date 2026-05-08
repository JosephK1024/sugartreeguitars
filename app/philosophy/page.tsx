import { Photo } from "@/components/Photo";

export const metadata = { title: "Philosophy" };

const summary = [
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
    body: "X brace intersection positioned toward soundhole versus standard post-war position. Increases free vibrating area of lower bout. Improves bass response and volume from thinner tops. Returns to pre-war building practice abandoned for production efficiency, not acoustic reasons.",
  },
  {
    title: "Hide Glue for Soundboard Bracing",
    body: "Hot hide glue used for brace-to-soundboard joints specifically. Cures glass hard — harder than surrounding wood. Glue line acoustically transparent. Squeeze out fillets left in place deliberately — they create gradual stiffness transition, distribute stress at brace feet, and improve energy transfer. Titebond used where reversibility and open time matter more.",
  },
  {
    title: "AI Assisted Design",
    body: "Every build benefits from AI assisted design research. Centuries of lutherie knowledge, thousands of builders' insights, materials science synthesized into each build decision. AI informs. Builder decides.",
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
      <p className="text-lg text-ink/75 max-w-prose mb-12">
        The principles that guide every SugarTree build. Refined through experiment,
        failure, pivot, and reflection.
      </p>

      <Photo
        src="/images/philosophy.jpeg"
        alt="A soundboard with bracing layout marked out before carving."
        ratio="wide"
        className="mb-16"
        priority
        sizes="(min-width: 1024px) 896px, 100vw"
      />

      <div className="space-y-12">
        {summary.map((s) => (
          <section
            key={s.title}
            className="grid md:grid-cols-[1fr_2fr] gap-8 pb-12 border-b border-bark-200 last:border-0"
          >
            <h2 className="font-serif text-3xl text-bark-600">{s.title}</h2>
            <p className="text-ink/85 leading-relaxed text-lg">{s.body}</p>
          </section>
        ))}
      </div>

      {/* Deep dive */}
      <div className="mt-24">
        <h2 className="font-serif text-4xl text-bark-600 mb-4">The Build System</h2>
        <p className="text-lg text-ink/75 max-w-prose mb-16">
          A long-form walk through every consequential decision in a SugarTree
          build, and the physics or experience that justifies it.
        </p>

        <DeepSection id="weight" title="Weight">
          <p>
            Weight is the enemy of resonance and sustain. Every unnecessary gram is a
            gram the soundboard has to move. Every component decision &mdash; truss
            rod, neck wood, bridge, tuning machines, binding choices &mdash; gets
            evaluated through the lens of acoustic cost of mass before adoption.
          </p>
          <p>
            This isn&rsquo;t minimalism for its own sake. A heavier component that
            earns its mass acoustically (a denser bridge plate, a stiffer brace at a
            stress point) stays. A heavier component that doesn&rsquo;t (a steel
            truss rod, an over-thick bridge, ornamental binding that adds nothing
            structurally) goes.
          </p>
        </DeepSection>

        <DeepSection id="neck" title="Neck Construction">
          <p>
            <strong>Spanish cedar</strong> for the neck core &mdash; significantly
            lighter than mahogany, resonant, historically proven in classical
            construction. Excellent workability: carves, planes, and rasps cleanly.
            Stable when properly dried and quartersawn.
          </p>
          <p>
            <strong>Carbon fiber hollow tube (10×10mm)</strong> in place of a steel
            truss rod. The tube is stiffer per gram than steel, has no adjustment
            mechanism to fail or be set incorrectly, no dead metal mass vibrating
            separately inside the neck, and transmits vibration more coherently with
            the surrounding wood. The hollow tube preserves bending resistance while
            reducing mass &mdash; the I-beam principle. A five-year-old dreadnought
            with this construction confirms long-term stability under steel-string
            load.
          </p>
          <p>
            <strong>Ebony fretboard</strong> compensates structurally for the
            cedar&rsquo;s softness and adds stiffness to the neck assembly. Fret
            slots are cut slightly thicker and stabilized with thin CA at each slot.
            All builds use Spanish heel construction &mdash; neck and body
            mechanically unified, no separate joint to slip over time.
          </p>
        </DeepSection>

        <DeepSection id="bracing" title="Bracing">
          <p>
            <strong>Forward shifted scalloped X bracing</strong>, with the X
            intersection moved toward the soundhole versus standard post-war
            practice. This increases the free vibrating area of the lower bout,
            improves bass response, and lets thinner tops produce more volume. It
            isn&rsquo;t a new idea &mdash; it returns to pre-war building practice
            that was abandoned for production efficiency, not acoustic reasons.
          </p>
          <p>
            <strong>Adirondack spruce</strong> for the main X braces. Tone bars and
            transverse braces sometimes paired with redwood &mdash; a split approach
            that gets tonal coherence without structural risk in the most stressed
            members.
          </p>
          <p>
            <strong>Brace scalloping happens after gluing</strong>, with tap tuning
            at each stage guiding how much material to remove. The squeeze-out
            fillets at brace feet are left in place deliberately. They create a
            gradual stiffness transition between brace and soundboard, distribute
            stress, and are acoustically superior to a cleaned, sharp junction.
          </p>
        </DeepSection>

        <DeepSection id="glue" title="Glue Strategy">
          <p>
            <strong>Hide glue for brace-to-soundboard joints specifically.</strong>{" "}
            It cures glass hard &mdash; harder than the surrounding spruce. The
            glue line is acoustically transparent: no damping layer between brace
            and top. The fillets at the brace feet cure rigid, contributing
            structurally as well as acoustically.
          </p>
          <p>
            <strong>Titebond everywhere else.</strong> Longer open time, consistent
            viscosity, adequate reversibility, decades of proven track record.
            Old Brown Glue or fish glue serve as middle-ground alternatives where
            those properties are wanted without the hot-pot routine.
          </p>
          <p>
            We&rsquo;re skeptical of hide glue orthodoxy as a universal rule. We
            apply it where physics justify it &mdash; not out of tradition.
          </p>
        </DeepSection>

        <DeepSection id="gobar" title="The Gobar Deck">
          <p>
            Adjustable curtain rods, used as gobars. Each rod tuned individually by
            tactile feel &mdash; different pressure for different brace positions.
            A continuous bead of squeeze-out along the full length of every brace
            foot is the visual confirmation of complete joint contact.
          </p>
          <p>
            Variable per-rod pressure is, in our hands, superior to fixed
            spring-rate gobars. The objective is uniform contact, not uniform force.
          </p>
        </DeepSection>

        <DeepSection id="soundboard" title="Soundboard">
          <p>
            <strong>Thin tops</strong>, worked deliberately close to the structural
            limit. The top is held by the upper transverse brace during tap
            tuning &mdash; minimizing interference with plate response.
          </p>
          <p>Tap tuning runs in three stages:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Wood selection.</strong> Listening for sustain, clarity, and
              consistency across the plate.
            </li>
            <li>
              <strong>Flex feel after thickness sanding.</strong> Stiffness
              distribution, cross-grain compliance, safety check.
            </li>
            <li>
              <strong>Brace carving.</strong> An iterative conversation with the
              top. We stop when the wood says stop.
            </li>
          </ol>
          <p>
            <strong>Cross-grained Adirondack bridge plate</strong>, 2.5mm thick,
            CA-hardened pin holes, edges beveled to soften the stiffness
            discontinuity at the perimeter. Positioned slightly toward the tail
            block. Cross grain stitches across potential split lines at the pin
            holes; same material family as top and braces means no impedance
            discontinuity.
          </p>
        </DeepSection>

        <DeepSection id="bridge" title="Bridge">
          <p>
            <strong>Ebony pyramid bridge</strong>, scaled to body size. The
            underside is relieved &mdash; material removed from the interior field,
            leaving a 3.5&ndash;4mm perimeter gluing border and full thickness
            preserved around pin holes and saddle slot walls. Relief depth is
            roughly 2mm.
          </p>
          <p>
            The perimeter does the structural work, resisting the rotational pull
            of string tension. The interior field, once glued, contributes nothing
            structurally and only adds mass. Removing it cuts bridge mass 20&ndash;35%
            without reducing the gluing footprint. A lighter bridge accelerates
            faster &mdash; less energy lost in bridge movement &mdash; and the top
            moves more freely in the center zone.
          </p>
          <p>
            One detail that matters: when clamping a relieved bridge, the caul
            must contact the perimeter, not the center.
          </p>
          <p>
            <strong>Bone saddle</strong>, compensated for the specific scale length,
            minimum height for break angle, densest available blank.
          </p>
        </DeepSection>

        <DeepSection id="interior" title="Interior Philosophy">
          <p>
            We don&rsquo;t obsess over interior cosmetics. Joint integrity matters;
            appearance there does not. Vintage instruments that have aged into
            extraordinary voices were built the same way &mdash; rough where rough
            didn&rsquo;t matter, precise where precision changed everything.
          </p>
          <p>
            Tool marks, squeeze-out, minor irregularities: acceptable where they
            don&rsquo;t affect the acoustic outcome. Precision is reserved for the
            places where precision changes the sound &mdash; not the places where
            it only changes the photograph.
          </p>
        </DeepSection>

        <DeepSection id="wood-selection" title="Wood Selection">
          <p>
            Tap tune and flex test before visual evaluation. Consistent grain and
            density over dramatic figure &mdash; highly figured wood introduces
            acoustic unpredictability and ages less consistently than ribbon-grain
            or straight-grain stock.
          </p>
          <p>
            Sapwood is avoided: density difference, stability difference, finishing
            inconsistency. Quartersawn stock is preferred for neck and brace
            material. Plates that fail the tap test are rejected regardless of how
            they photograph.
          </p>
          <p>
            For the long version of this thinking and the woods we keep on hand,
            see <a href="/tonewoods" className="text-bark-600 underline">our tonewoods notes</a>.
          </p>
        </DeepSection>
      </div>
    </article>
  );
}

function DeepSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <h3 className="font-serif text-3xl text-bark-600 mb-4">{title}</h3>
      <div className="space-y-4 text-lg text-ink/85 leading-relaxed">{children}</div>
    </section>
  );
}
