import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-bark-200 bg-bark-50 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3 items-start">
        <div className="flex items-center gap-3">
          <Image src="/brand/sugartree-mark.svg" alt="" width={48} height={48} />
          <div>
            <div className="font-serif text-bark-600 text-lg">SugarTree Guitars</div>
            <div className="text-sm text-ink/70">Amelia, Ohio</div>
          </div>
        </div>
        <div className="text-sm text-ink/80 space-y-2">
          <div className="font-medium text-bark-600">Eight guitars a year. Four given away.</div>
          <div className="italic">Nothing Extra. Nothing Missing.</div>
          <div className="italic">Give the Unheard a Voice.</div>
        </div>
        <nav className="text-sm flex flex-col gap-2 md:items-end">
          <Link href="/builds" className="hover:text-bark-600">Builds</Link>
          <Link href="/tonewoods" className="hover:text-bark-600">Tonewoods</Link>
          <Link href="/philosophy" className="hover:text-bark-600">Philosophy</Link>
          <Link href="/experimental" className="hover:text-bark-600">Experimental</Link>
          <Link href="/giving" className="hover:text-bark-600">Giving</Link>
          <Link href="/about" className="hover:text-bark-600">About</Link>
        </nav>
      </div>
      <div className="border-t border-bark-200/60">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-ink/60 flex justify-between">
          <span>© {new Date().getFullYear()} SugarTree Guitars</span>
          <span>Handbuilt. Ohio.</span>
        </div>
      </div>
    </footer>
  );
}
