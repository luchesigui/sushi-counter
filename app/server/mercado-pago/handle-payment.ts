import "server-only";

import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";
import { sendEmailTo } from "@/app/lib/ses";

export async function handleMercadoPagoPayment(paymentData: PaymentResponse) {
  const metadata = paymentData.metadata;
  const userEmail = metadata.user_email; // Os metadados do Mercado Pago são convertidos para snake_case
  const testeId = metadata.teste_id; // Os metadados do Mercado Pago são convertidos para snake_case

  await sendEmailTo({
    userEmail,
    emailSubject: "Compra com sucesso!",
    emailBody: `<html><body>
      <p>Parabéns, bro.</p>
    </body></html>`,
  });

  return;
}
