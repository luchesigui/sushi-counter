"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export default function MercadoPagoButton() {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);
  const router = useRouter();
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  useEffect(() => {
    handleButtonClick();
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY!);
  }, []);

  async function handleButtonClick() {
    try {
      setIsCreatingCheckout(true);
      const response = await fetch("/api/create-checkout-mp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // coupleId
        }),
      });
      const data = await response.json();
      setPreferenceId(data.preferenceId);
      // router.push(data.initPoint);
    } catch (error) {
      console.error("Error fetching preferenceId:", error);
    } finally {
      setIsCreatingCheckout(false);
    }
  }

  return (
    // <button
    //   disabled={isCreatingCheckout}
    //   onClick={handleButtonClick}
    //   className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
    // >
    //   {isCreatingCheckout ? "Criando checkout..." : "Comprar com Mercado Pago"}
    // </button>
    <>
      {preferenceId && (
        <Wallet
          initialization={{
            preferenceId,
            redirectMode: "modal",
          }}
        />
      )}
    </>
  );
}
