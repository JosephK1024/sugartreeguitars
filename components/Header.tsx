import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/builds", label: "Builds" },
  { href: "/articles", label: "Notes" },
  { href: "/tonewoods", label: "Tonewoods" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/giving", label: "Giving" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="border-b border-bark-200 bg-cream/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="SugarTree Guitars home">
          <Image
            src="/brand/sugartree-mark.svg"
            alt=""
            width={40}
            height={40}
            priority
          />
          <span className="font-serif text-bark-600 text-xl tracking-wide hidden sm:inline">
            SugarTree Guitars
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap text-ink/80 hover:text-bark-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {/* Static page served by rewrite, outside the app router — plain
              anchor so it does a real navigation rather than an RSC fetch. */}
          <a
            href="/circle-of-fifths"
            className="shrink-0 whitespace-nowrap text-ink/80 hover:text-bark-600 transition-colors"
          >
            Circle of Fifths
          </a>
        </nav>
      </div>
    </header>
  );
}
