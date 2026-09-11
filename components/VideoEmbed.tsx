type Props = {
  url: string;
  caption?: string;
  /** Shown before playback starts. Without it a self-hosted file is a black box. */
  poster?: string;
};

type Embed =
  | { kind: "iframe"; src: string }
  | { kind: "file"; src: string; type: string };

const FILE_TYPES: Record<string, string> = {
  mp4: "video/mp4",
  m4v: "video/mp4",
  webm: "video/webm",
  ogv: "video/ogg",
  mov: "video/quicktime",
};

function resolveEmbed(url: string): Embed | null {
  try {
    const u = new URL(url);

    // YouTube: youtube.com/watch?v=ID or youtu.be/ID
    if (u.hostname === "youtu.be") {
      return { kind: "iframe", src: `https://www.youtube.com/embed${u.pathname}` };
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return { kind: "iframe", src: `https://www.youtube.com/embed/${id}` };
    }

    // Vimeo: vimeo.com/ID
    if (u.hostname === "vimeo.com") {
      const id = u.pathname.replace("/", "");
      if (id) return { kind: "iframe", src: `https://player.vimeo.com/video/${id}` };
    }

    // A video file served from anywhere — S3, CloudFront, or this site.
    // Matched on the path only, so presigned URLs with query strings still work.
    const ext = u.pathname.split(".").pop()?.toLowerCase();
    if (ext && FILE_TYPES[ext]) {
      return { kind: "file", src: url, type: FILE_TYPES[ext] };
    }

    return null;
  } catch {
    return null;
  }
}

/** Whether this URL will actually produce a player — lets callers skip the heading. */
export function canEmbedVideo(url: string | undefined): boolean {
  return !!url && resolveEmbed(url) !== null;
}

export function VideoEmbed({ url, caption, poster }: Props) {
  const embed = resolveEmbed(url);
  if (!embed) return null;

  return (
    <figure className="my-10">
      <div className="relative aspect-video rounded-sm overflow-hidden border border-bark-200 bg-bark-100">
        {embed.kind === "iframe" ? (
          <iframe
            src={embed.src}
            title={caption ?? "Build video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <video
            controls
            preload="metadata"
            playsInline
            poster={poster}
            className="absolute inset-0 w-full h-full bg-black object-contain"
          >
            <source src={embed.src} type={embed.type} />
            Your browser can&rsquo;t play this video.{" "}
            <a href={embed.src} className="underline">
              Download it instead
            </a>
            .
          </video>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-ink/60 text-center">{caption}</figcaption>
      )}
    </figure>
  );
}
