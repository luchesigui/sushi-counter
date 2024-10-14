import { Header } from "@/app/components/header";
import MercadoPagoButton from "@/app/components/marcado-pago-button";
import StripeButton from "@/app/components/stripe-button";

export default function Pagamentos() {
  return (
    <div className="max-w-7xl mx-auto h-screen flex flex-col">
      <Header />
      <div className="h-full flex flex-col gap-4 items-center justify-center text-sm">
        <h1 className="text-2xl font-bold">Pagamentos</h1>
        <MercadoPagoButton
          testeId="123"
          disabled={!process.env.MERCADO_PAGO_ACCESS_TOKEN}
        >
          Mercado Pago - Pagamento único
        </MercadoPagoButton>
        <StripeButton
          isSubscription={false}
          testeId="123"
          disabled={!process.env.STRIPE_PRODUCT_PRICE_ID}
        >
          Stripe - Pagamento único
        </StripeButton>
        <StripeButton
          isSubscription={true}
          testeId="123"
          disabled={!process.env.STRIPE_SUBSCRIPTION_PRICE_ID}
        >
          Stripe - Assinatura
        </StripeButton>
      </div>
    </div>
  );
}
