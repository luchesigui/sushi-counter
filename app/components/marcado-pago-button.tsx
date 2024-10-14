"use client";

import useMercadoPago from "../hooks/useMercadoPago";

export default function MercadoPagoButton({
  testeId,
  children,
  ...props
}: {
  testeId: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { createMercadoPagoCheckout } = useMercadoPago();
  return (
    <button
      onClick={() => createMercadoPagoCheckout({ testeId })}
      className="bg-black hover:bg-slate-900 text-white font-bold border rounded-md py-2 w-96 disabled:opacity-50 disabled:border-red-400 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
}
