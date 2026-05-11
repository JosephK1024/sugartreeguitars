type Props = {
  url: string;
  caption?: string;
};

function getEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);

    // YouTube: youtube.com/watch?v=ID or youtu.be/ID
    if (u.hostname === "youtu.be") {
      return `https://www.youtube.com/embed${u.pathname}`;
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }

    // Vimeo: vimeo.com/ID
    if (u.hostname === "vimeo.com") {
      const id = u.pathname.replace("/", "");
      if (id) return `https://player.vimeo.com/video/${id}`;
    }

    return null;
  } catch {
    return null;
  }
}

export function VideoEmbed({ url, caption }: Props) {
  const embed = getEmbedUrl(url);
  if (!embed) return null;

  return (
    <figure className="my-10">
      <div className="relative aspect-video rounded-sm overflow-hidden border border-bark-200 bg-bark-100">
        <iframe
          src={embed}
          title={caption ?? "Build video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-ink/60 text-center">{caption}</figcaption>
      )}
    </figure>
  );
}
