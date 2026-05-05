import { NextResponse } from "next/server";
import { getBuild } from "@/lib/content";
import { getStripe, siteUrl } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { slug?: string };
    if (!body.slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }
    const build = getBuild(body.slug);
    if (!build) {
      return NextResponse.json({ error: "Build not found" }, { status: 404 });
    }
    if (build.status !== "available" || typeof build.price !== "number") {
      return NextResponse.json(
        { error: "This guitar is not available for purchase" },
        { status: 400 },
      );
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: (build.currency ?? "USD").toLowerCase(),
            unit_amount: Math.round(build.price * 100),
            product_data: {
              name: build.title,
              description:
                build.summary ?? `${build.body} — ${build.top} top, ${build.back_sides}`,
              metadata: { slug: build.slug },
            },
          },
        },
      ],
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      metadata: { slug: build.slug },
      success_url: `${siteUrl()}/checkout/success?session_id={CHECKOUT_SESSION_ID}&slug=${build.slug}`,
      cancel_url: `${siteUrl()}/builds/${build.slug}?canceled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
