"use client";

import { useState } from "react";

export function BuyButton({ slug, label = "Reserve this guitar" }: { slug: string; label?: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handle() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Could not start checkout");
      }
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handle}
        disabled={loading}
        className="inline-flex items-center justify-center px-6 py-3 bg-bark-600 text-cream rounded-sm hover:bg-bark-700 transition-colors disabled:opacity-60"
      >
        {loading ? "Redirecting…" : label}
      </button>
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
}
