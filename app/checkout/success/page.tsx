import Link from "next/link";

export const metadata = { title: "Reservation confirmed" };

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-serif text-5xl text-bark-600 mb-6">Thank you.</h1>
      <p className="text-lg text-ink/80 leading-relaxed">
        Your reservation has been received. The builder will be in touch shortly with
        next steps, expected timeline, and shipping details.
      </p>
      <p className="mt-6 text-ink/70 italic">Nothing Extra. Nothing Missing.</p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center px-6 py-3 border border-bark-600 text-bark-600 rounded-sm hover:bg-bark-50"
      >
        Back to home
      </Link>
    </div>
  );
}
