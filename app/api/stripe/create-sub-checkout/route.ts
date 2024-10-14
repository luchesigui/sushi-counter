import { auth, signIn } from "@/app/lib/auth";
import stripe from "@/app/lib/stripe";
import { db } from "@/app/lib/firebase"; // Added import for database operations
import { NextRequest, NextResponse } from "next/server";
import { getCustomerId } from "@/app/server/stripe/get-customer-id";

export async function POST(req: NextRequest) {
  const { testeId } = await req.json();

  const price = process.env.STRIPE_SUBSCRIPTION_PRICE_ID;

  if (!price) {
    throw new Error("No STRIPE_PRODUCT_PRICE_ID");
  }

  const session = await auth();
  const userId = session?.user?.id;
  const userEmail = session?.user?.email;

  if (!userId || !userEmail) {
    throw new Error("User not authenticated");
  }

  const customerId = await getCustomerId(userId, userEmail);

  const metadata = {
    testeId,
    price,
    userId,
    userEmail,
  };

  try {
    const stripeSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price,
          quantity: 1,
        },
      ],
      mode: "subscription",
      payment_method_types: ["card"],
      success_url: `${req.headers.get("origin")}/?status=success`,
      cancel_url: `${req.headers.get("origin")}/?status=canceled`,
      metadata: metadata,
      customer: customerId,
    });

    if (!stripeSession.url) {
      throw new Error("No session URL");
    }

    return NextResponse.json({ sessionId: stripeSession.id });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
