import Image from "next/image";
import clsx from "clsx";

type Props = {
  src: string;
  alt: string;
  ratio?: "square" | "video" | "portrait" | "wide";
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const ratios: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function Photo({
  src,
  alt,
  ratio = "video",
  className,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: Props) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-sm bg-bark-100 border border-bark-200",
        ratios[ratio],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
