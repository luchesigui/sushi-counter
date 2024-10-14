import { auth } from "@/app/lib/auth";
import { db } from "@/app/lib/firebase";
import stripe from "@/app/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("User not authorized to create portal");
  }

  try {
    const userRef = db.collection("users").doc(userId);
    const doc = await userRef.get();
    const customerId = doc.data()?.stripeCustomerId;

    if (!customerId) {
      throw new Error("User does not have a billing account");
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${req.headers.get("origin")}/`,
    });

    return NextResponse.json({
      url: portalSession.url,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
