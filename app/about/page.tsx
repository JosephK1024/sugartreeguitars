import { Photo } from "@/components/Photo";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-5xl text-bark-600 mb-12">About the Builder</h1>

      <Photo
        src="/images/builder-portrait.jpeg"
        alt="The builder, in the workshop, holding a guitar."
        ratio="wide"
        className="mb-12"
        priority
        sizes="(min-width: 768px) 768px, 100vw"
      />

      <div className="prose prose-bark prose-lg max-w-none space-y-6 leading-relaxed">
        <p>
          Some builders come to lutherie through music. Others through woodworking. I came
          through both &mdash; drawn in by instruments that moved me deeply and frustrated
          by the fact that the guitars capable of that kind of resonance were simply out of
          reach for most people. Not because the craft was secret. Not because the materials
          were mythical. But because the prices had drifted so far from ordinary life that
          extraordinary sound had become the privilege of the few.
        </p>
        <p>I wanted to change that in the only way available to me. I decided to build.</p>

        <hr className="border-bark-200 my-10" />

        <p>
          My early builds followed tradition faithfully. I mimicked the past, learned the
          established methods, respected the conventions, and produced guitars that were
          genuinely good. That foundation was necessary and I don&rsquo;t regret a moment
          of it. But at some point every builder who takes the craft seriously faces a
          choice &mdash; remain a skilled practitioner of inherited knowledge or become
          someone with opinions of their own.
        </p>
        <p>
          I started questioning which woods truly belonged together rather than which
          combinations tradition had blessed. I stopped valuing visual beauty over the
          structural and acoustic properties that actually serve the sound. I wrestled with
          the age old debates &mdash; hand tools or power tools, hide glue or modern
          adhesives, CNC or not &mdash; and eventually understood that these debates, while
          interesting, were distractions from the real question. What do the best builders
          actually do?
        </p>
        <p>
          The great builders of every era started by learning from the past. But at some
          point the best of them stopped asking what had always been done and started
          asking what the wood, the physics, and the player actually needed. They used the
          best tools available to them. They sought the best materials they could find.
          They studied those who came before and watched carefully those who were
          innovating around them. They let their failures teach them as much as their
          successes.
        </p>
        <p>That is the builder I decided to become.</p>

        <hr className="border-bark-200 my-10" />

        <p>
          The philosophy that guides every SugarTree guitar emerged not from a single
          insight but from accumulated questioning &mdash; experiment, failure, pivot,
          reflection, and a willingness to set aside what I thought I knew.
        </p>
        <p>
          Weight is the enemy of resonance and sustain. Every unnecessary gram on an
          instrument is a gram the soundboard has to move. Carbon fiber reinforcement
          instead of heavy steel. Relieved bridge undersides. Spanish cedar necks.
          Lightweight tuning machines. Every decision examined through the lens of what it
          costs acoustically before it&rsquo;s made.
        </p>
        <p>
          Inconsistent wood grain and density defeat design intentions. If we don&rsquo;t
          question the assumption that dramatic figure equals quality we may never hear
          what consistent ribbon grain koa or straight grained Adirondack spruce is capable
          of. Woods that photograph modestly often perform extraordinarily. Woods chosen
          for visual impact sometimes introduce acoustic unpredictability that works
          against everything else in the build. Selection rigor matters more than
          selection convention.
        </p>
        <p>
          Visual simplicity in service of acoustic purpose. SugarTree guitars are
          beautiful &mdash; but their beauty comes from the honesty of well chosen
          materials and clean purposeful design rather than ornamentation for its own
          sake. The interior of a SugarTree guitar is not immaculate. It is honest. The
          great vintage instruments that inspire this work were built the same way &mdash;
          rough where rough didn&rsquo;t matter, precise where precision changed
          everything.
        </p>
        <p>
          Experiment. Fail. Pivot. Reflect. Question what we think we know. Four of our
          eight annual guitars are designated experimental builds &mdash; combinations and
          approaches that push beyond proven territory. Some become standard practice.
          Some teach us what not to do. All of them move our understanding forward.
        </p>

        <hr className="border-bark-200 my-10" />

        <p>
          The greatest addition to my builder&rsquo;s toolkit in recent years has been AI
          assisted design &mdash; not as a replacement for craft judgment but as a research
          capability that no single builder could develop alone. Centuries of lutherie
          knowledge, thousands of makers&rsquo; insights, materials science, acoustic
          physics &mdash; accessible and synthesized in the design process of every
          SugarTree guitar. The AI informs the decisions. The wood, the hands, and the ear
          make them.
        </p>

        <hr className="border-bark-200 my-10" />

        <p>
          I&rsquo;ve always believed that every voice deserves to be heard. Not as an
          abstract principle but as something lived. If we don&rsquo;t question our
          assumptions we may never hear something genuinely valuable &mdash; in music, in
          materials, in people, in places we weren&rsquo;t expecting to find it. The voice
          was always there. Sometimes we simply need to stop assuming we already know where
          to listen.
        </p>
        <p>That conviction finds expression in the workshop and beyond it.</p>
        <p>
          Four SugarTree guitars every year go to underprivileged musicians through
          partnerships with music education programs and community organizations. Not
          entry level instruments. Not compromised builds. The same guitars built to the
          same standard as every other instrument that leaves this workshop &mdash; voiced
          with the same care, built from the same quality of material, carrying the same
          intention. Extraordinary instruments should reach extraordinary players regardless
          of their circumstances. Talent is not distributed according to economic
          advantage. Access to great tools should not be either.
        </p>
        <p>
          A guitar placed in the hands of a musician who has never held a truly great
          instrument is not charity. It is an act of listening &mdash; an acknowledgment
          that the voice was always there, waiting for the right resonance to release it.
        </p>

        <hr className="border-bark-200 my-10" />

        <p className="font-serif text-2xl text-bark-600 not-italic">
          SugarTree. The voice was always in the tree. My job is simply to find it and set
          it free.
        </p>
        <p className="italic text-bark-600">
          Nothing Extra. Nothing Missing.
          <br />
          Give the Unheard a Voice.
        </p>
      </div>
    </article>
  );
}
