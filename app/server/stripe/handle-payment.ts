import "server-only"; // Evita que o código seja executado no cliente

import { sendEmailTo } from "@/app/lib/ses";
import stripe from "@/app/lib/stripe";

import Stripe from "stripe";

export async function handleStripePayment(
  event: Stripe.CheckoutSessionCompletedEvent
) {
  if (event.data.object.payment_status === "paid") {
    // pagagamento por cartão com sucesso
    const testeId = event.data.object.metadata?.testeId;
    const userEmail = event.data.object.customer_details?.email;

    if (userEmail) {
      await sendEmailTo({
        userEmail,
        emailSubject: "Compra com sucesso!",
        emailBody: `<html><body>
          <p>Parabéns, bro.</p>
        </body></html>`,
      });
    }
  }

  if (
    event.data.object.payment_status === "unpaid" &&
    event.data.object.payment_intent
  ) {
    // Pagamento por boleto
    const paymentIntent = await stripe.paymentIntents.retrieve(
      event.data.object.payment_intent.toString()
    );

    const hostedVoucherUrl =
      paymentIntent.next_action?.boleto_display_details?.hosted_voucher_url;

    if (hostedVoucherUrl) {
      // O cliente gerou um boleto, manda um email pra ele
      const userEmail = event.data.object.customer_details?.email;

      if (userEmail) {
        await sendEmailTo({
          userEmail,
          emailSubject: "Pague seu boleto!",
          emailBody: `<html><body>
            <p>Aqui está o link para pagar: ${hostedVoucherUrl}</p>
          </body></html>`,
        });
      }
    }
  }
}
