import { Photo } from "@/components/Photo";

export const metadata = { title: "The Giving Program" };

export default function GivingPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-serif text-5xl text-bark-600 mb-6">Give the Unheard a Voice.</h1>
      <p className="text-xl text-ink/85 leading-relaxed max-w-prose mb-12">
        Every year SugarTree donates four guitars to underprivileged musicians. Same
        standard. Same materials. Same care. Not entry level instruments. Not compromised
        builds.
      </p>

      <Photo
        src="/images/recipient-parlor.jpeg"
        alt="A young musician with a SugarTree parlor guitar."
        ratio="wide"
        className="mb-16"
        priority
        sizes="(min-width: 768px) 768px, 100vw"
      />

      <div className="prose prose-bark prose-lg max-w-none space-y-6 leading-relaxed">
        <p>
          Here are their stories. A guitar placed in the hands of a musician who has never
          held a truly great instrument is not charity. It is an act of listening &mdash; an
          acknowledgment that the voice was always there, waiting for the right resonance to
          release it.
        </p>
        <p>
          Recipient stories will appear here as instruments are placed. We work in
          partnership with music education programs and community music organizations to
          identify musicians whose talent deserves an instrument as extraordinary as they
          are.
        </p>
      </div>
    </article>
  );
}
