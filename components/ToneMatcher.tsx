"use client";

import { useMemo, useState, type ReactNode } from "react";

type Tier = "stiff" | "flexible";
type Character = "bright" | "warm";

type TopWood = {
  name: string;
  tier: Tier;
  voice: string;
};

type BackSidesWood = {
  name: string;
  character: Character;
  voice: string;
};

type BodyShape = {
  name: string;
  note: string;
};

type ScaleLength = {
  name: string;
  /** Reads naturally mid-sentence; `name` is for the dropdown. */
  inline: string;
  feel: string;
};

type FretboardRadius = {
  name: string;
  feel: string;
};

const TOP_WOODS: TopWood[] = [
  {
    name: "Adirondack spruce",
    tier: "stiff",
    voice: "articulate with enormous headroom, and overtones that bloom under hard playing",
  },
  {
    name: "Sitka spruce",
    tier: "stiff",
    voice: "clear and all-purpose, with a touch more midrange warmth than Adirondack",
  },
  {
    name: "Bear claw Sitka",
    tier: "stiff",
    voice: "close to plain Sitka in stiffness, with a slightly more complex overtone shimmer from the figure",
  },
  {
    name: "Alaskan yellow cedar",
    tier: "stiff",
    voice: "focused and almost bell-like, taking time to fully open up",
  },
  {
    name: "Port Orford cedar",
    tier: "stiff",
    voice: "warmer and more immediately responsive than spruce, without the usual long cedar break-in",
  },
  {
    name: "Redwood",
    tier: "flexible",
    voice: "lush and warm at moderate volume, with a lower ceiling for headroom",
  },
  {
    name: "Mahogany",
    tier: "flexible",
    voice: "compressed and midrange-forward — an honest, direct kind of voice",
  },
];

const BACK_SIDES_WOODS: BackSidesWood[] = [
  {
    name: "Bocote",
    character: "bright",
    voice: "dark and authoritative, with complex overtones and a beautiful, medium-length sustain bloom",
  },
  {
    name: "Hawaiian koa",
    character: "warm",
    voice: "sweet and immediately musical, with a soft attack, round warm bass, and treble that chimes rather than glares",
  },
  {
    name: "Bolivian rosewood (Morado)",
    character: "bright",
    voice: "warm and complex, the closest legal alternative to Brazilian — loud, clear, and stable over time",
  },
  {
    name: "Indian rosewood",
    character: "bright",
    voice: "dark, dense, and richly overtone-laden, with a low end that stays clear under heavy playing",
  },
  {
    name: "Brazilian rosewood",
    character: "bright",
    voice: "the richest of the rosewoods, with an overtone stack that shimmers across the whole range",
  },
  {
    name: "Katalox",
    character: "bright",
    voice: "balanced and punchy, rosewood-adjacent without the sourcing complexity",
  },
  {
    name: "Crelicam ebony",
    character: "bright",
    voice: "bright and glassy, with a demanding character that rewards careful building",
  },
  {
    name: "Mahogany",
    character: "warm",
    voice: "honest and midrange-forward, harmonically generous without being busy",
  },
  {
    name: "Maple",
    character: "bright",
    voice: "bright and articulate, adding almost no color of their own — every note arrives exactly as picked",
  },
  {
    name: "Black walnut",
    character: "warm",
    voice: "warm and balanced, sitting tonally between mahogany and rosewood",
  },
  {
    name: "Cherry",
    character: "warm",
    voice: "light and bright, with a tone-color that mellows as the wood and finish age",
  },
];

const BODY_SHAPES: BodyShape[] = [
  {
    name: "Parlor",
    note: "the small body concentrates and focuses whatever character the woods bring — bracing choices have an outsized effect, and the response is quick, if not built for big bass",
  },
  {
    name: "00",
    note: "the body stays intimate but makes a touch more room for low end to develop than a parlor does",
  },
  {
    name: "000 / OM",
    note: "the balanced size lets the full voice of the wood pairing develop without favoring bass or treble",
  },
  {
    name: "Dreadnought",
    note: "the larger body is built for bass and volume, so the woods' character comes through at higher output, at some cost to fingerstyle nuance",
  },
];

const SCALE_LENGTHS: ScaleLength[] = [
  {
    name: "Short (24.9\")",
    inline: "short 24.9\" scale",
    feel: "slightly lower string tension and a slinkier feel under the left hand, with a marginally rounder low end",
  },
  {
    name: "Long (25.4\", Martin long scale)",
    inline: "long 25.4\" scale",
    feel: "higher string tension for the same pitch and gauge, adding definition and headroom at some cost to left-hand ease",
  },
];

const FRETBOARD_RADII: FretboardRadius[] = [
  {
    name: "Vintage (12\")",
    feel: "a pronounced curve that feels great for cowboy chords and rhythm playing, but can fret out on hard bends",
  },
  {
    name: "Modern compound (16\"+)",
    feel: "flatter and faster under the hand, and far more forgiving of aggressive bends and lead lines",
  },
];

function pairingOutcome(topTier: Tier, backCharacter: Character): string {
  if (topTier === "stiff" && backCharacter === "bright") {
    return "Maximum projection, brightness, and note separation.";
  }
  if (topTier === "stiff" && backCharacter === "warm") {
    return "Focused fundamental, warmer coloration, direct.";
  }
  if (topTier === "flexible" && backCharacter === "bright") {
    return "Warm and sensitive with good projection.";
  }
  return "Maximum warmth. Limited headroom.";
}

export function ToneMatcher() {
  const [topName, setTopName] = useState(TOP_WOODS[0].name);
  const [backName, setBackName] = useState(BACK_SIDES_WOODS[0].name);
  const [bodyName, setBodyName] = useState(BODY_SHAPES[2].name);
  const [scaleName, setScaleName] = useState(SCALE_LENGTHS[1].name);
  const [radiusName, setRadiusName] = useState(FRETBOARD_RADII[1].name);

  const description = useMemo(() => {
    const top = TOP_WOODS.find((w) => w.name === topName)!;
    const back = BACK_SIDES_WOODS.find((w) => w.name === backName)!;
    const body = BODY_SHAPES.find((b) => b.name === bodyName)!;
    const scale = SCALE_LENGTHS.find((s) => s.name === scaleName)!;
    const radius = FRETBOARD_RADII.find((r) => r.name === radiusName)!;

    const outcome = pairingOutcome(top.tier, back.character);

    return [
      `${outcome} The ${top.name} top is ${top.voice}. The ${back.name} back and sides are ${back.voice}.`,
      `In a ${body.name}, ${body.note}.`,
      `At a ${scale.inline}, expect ${scale.feel}.`,
      `A ${radius.name.toLowerCase()} fretboard radius is a matter of feel, not tone — ${radius.feel}.`,
    ].join(" ");
  }, [topName, backName, bodyName, scaleName, radiusName]);

  return (
    <div className="border border-bark-200 rounded-sm bg-bark-50 p-6 sm:p-8">
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <Field label="Top wood">
          <select
            value={topName}
            onChange={(e) => setTopName(e.target.value)}
            className="w-full border border-bark-200 rounded-sm bg-white p-2 text-ink/90"
          >
            {TOP_WOODS.map((w) => (
              <option key={w.name} value={w.name}>
                {w.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Back & sides wood">
          <select
            value={backName}
            onChange={(e) => setBackName(e.target.value)}
            className="w-full border border-bark-200 rounded-sm bg-white p-2 text-ink/90"
          >
            {BACK_SIDES_WOODS.map((w) => (
              <option key={w.name} value={w.name}>
                {w.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Body shape & size">
          <select
            value={bodyName}
            onChange={(e) => setBodyName(e.target.value)}
            className="w-full border border-bark-200 rounded-sm bg-white p-2 text-ink/90"
          >
            {BODY_SHAPES.map((b) => (
              <option key={b.name} value={b.name}>
                {b.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Scale length">
          <select
            value={scaleName}
            onChange={(e) => setScaleName(e.target.value)}
            className="w-full border border-bark-200 rounded-sm bg-white p-2 text-ink/90"
          >
            {SCALE_LENGTHS.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Fretboard radius" className="sm:col-span-2">
          <select
            value={radiusName}
            onChange={(e) => setRadiusName(e.target.value)}
            className="w-full sm:w-1/2 border border-bark-200 rounded-sm bg-white p-2 text-ink/90"
          >
            {FRETBOARD_RADII.map((r) => (
              <option key={r.name} value={r.name}>
                {r.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="border-t border-bark-200 pt-6">
        <div className="text-xs uppercase tracking-widest text-bark-500 mb-2">
          What you&rsquo;d get
        </div>
        <p className="font-serif text-lg text-bark-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="block text-xs uppercase tracking-widest text-bark-500 mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}
