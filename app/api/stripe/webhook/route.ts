import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }
  const raw = await req.text();
  const stripe = getStripe();
  try {
    const event = stripe.webhooks.constructEvent(raw, sig, secret);
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const slug = session.metadata?.slug;
      console.log("[stripe] checkout completed for build:", slug, session.id);
      // TODO: notify builder by email; mark slug as sold in content workflow
    }
    return NextResponse.json({ received: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Webhook error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
