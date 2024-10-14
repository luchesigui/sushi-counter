import "server-only";

import { db } from "@/app/lib/firebase";
import stripe from "@/app/lib/stripe";

export async function getCustomerId(
  userId: string,
  userEmail: string
): Promise<string> {
  try {
    const userRef = db.collection("users").doc(userId);
    const userData = (await userRef.get()).data();
    const stripeCustomerId = userData?.stripeCustomerId;

    if (stripeCustomerId) {
      return stripeCustomerId;
    }

    const stripeCustomer = await stripe.customers.create({
      email: userEmail,
      name: userData?.name,
      metadata: {
        userId,
      },
    });
    await userRef.update({
      stripeCustomerId: stripeCustomer.id,
    });

    return stripeCustomer.id;
  } catch (error) {
    console.error("Error getting or creating customer ID:", error);
    throw new Error("Failed to get or create customer ID");
  }
}
