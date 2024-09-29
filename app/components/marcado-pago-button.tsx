"use client";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";

export default function MercadoPagoButton() {
  const [preferenceId, setPreferenceId] = useState("");

  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY as string); // Public key

    const fetchPreferenceId = async () => {
      try {
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
      } catch (error) {
        console.error("Error fetching preferenceId:", error);
      }
    };

    fetchPreferenceId();
  }, []);

  return (
    <div>{preferenceId && <Wallet initialization={{ preferenceId }} />}</div>
  );
}
