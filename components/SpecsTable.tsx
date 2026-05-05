import type { Build } from "@/lib/content";

type Row = { label: string; value?: string | number | null };

export function SpecsTable({ build }: { build: Build }) {
  const rows: Row[] = [
    { label: "Body", value: build.body },
    { label: "Top", value: build.top },
    { label: "Back & sides", value: build.back_sides },
    { label: "Neck", value: build.neck },
    { label: "Fretboard", value: build.fretboard },
    { label: "Bridge", value: build.bridge },
    { label: "Bracing", value: build.bracing },
    { label: "Scale length", value: build.scale },
    { label: "Frets to body", value: build.frets_to_body },
    { label: "Nut width", value: build.nut_width },
    { label: "Strings", value: build.string_set },
    { label: "Glue", value: build.glue },
    { label: "Construction", value: build.construction },
    { label: "Year", value: build.year },
    { label: "Serial", value: build.serial },
  ].filter((r) => r.value !== undefined && r.value !== null && r.value !== "");

  return (
    <dl className="border-t border-bark-200">
      {rows.map((r) => (
        <div
          key={r.label}
          className="grid grid-cols-[10rem_1fr] gap-4 border-b border-bark-200 py-3 text-sm"
        >
          <dt className="text-ink/60 uppercase tracking-wider text-xs pt-0.5">
            {r.label}
          </dt>
          <dd className="text-ink/90">{String(r.value)}</dd>
        </div>
      ))}
    </dl>
  );
}
