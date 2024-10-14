import "server-only"; // Evita que o código seja executado no cliente

import { sendEmailTo } from "@/app/lib/ses";

import Stripe from "stripe";
import { db } from "@/app/lib/firebase";
import stripe from "@/app/lib/stripe";

export async function handleStripeCancelSubscription(
  event: Stripe.CustomerSubscriptionDeletedEvent
) {
  const customerId = event.data.object.customer;

  if (customerId) {
    const customer = (await stripe.customers.retrieve(
      customerId as string
    )) as Stripe.Customer;
    const userId = customer.metadata.userId;
    const userEmail = customer.email;

    if (!userId || !userEmail) {
      throw new Error("Missing user data");
    }

    const userRef = db.collection("users").doc(userId);
    const doc = await userRef.get();

    if (doc.exists) {
      await userRef.update({
        subscription: false,
      });

      await sendEmailTo({
        userEmail,
        emailSubject: "Assinatura cancelada",
        emailBody: `<html><body>
          <p>Infelizmente, sua assinatura foi cancelada. Se tiver alguma dúvida, por favor, entre em contato conosco.</p>
        </body></html>`,
      });
    }
  }
}
