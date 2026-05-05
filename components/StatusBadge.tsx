import clsx from "clsx";
import type { BuildStatus } from "@/lib/content";

const styles: Record<BuildStatus, string> = {
  "in-progress": "bg-bark-100 text-bark-700 border-bark-300",
  available: "bg-bark-600 text-cream border-bark-600",
  experimental: "bg-cream text-bark-600 border-bark-400 border-dashed",
  sold: "bg-bark-50 text-ink/50 border-bark-200 line-through",
  given: "bg-bark-50 text-bark-600 border-bark-300",
};

const labels: Record<BuildStatus, string> = {
  "in-progress": "In Progress",
  available: "Available",
  experimental: "Experimental",
  sold: "Sold",
  given: "Given",
};

export function StatusBadge({ status }: { status: BuildStatus }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 text-xs uppercase tracking-widest border rounded-sm",
        styles[status],
      )}
    >
      {labels[status]}
    </span>
  );
}
