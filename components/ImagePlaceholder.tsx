import clsx from "clsx";

type Props = {
  label?: string;
  ratio?: "square" | "video" | "portrait" | "wide";
  className?: string;
};

const ratios: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function ImagePlaceholder({ label = "Photograph forthcoming", ratio = "video", className }: Props) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-sm border border-bark-200 bg-bark-100 flex items-center justify-center text-bark-600/70",
        ratios[ratio],
        className,
      )}
      aria-label={label}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <pattern id="wood" width="6" height="100" patternUnits="userSpaceOnUse">
            <path d="M3 0 L3 100" stroke="#593219" strokeOpacity="0.15" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#wood)" />
      </svg>
      <span className="relative font-serif text-sm tracking-wide italic">{label}</span>
    </div>
  );
}
