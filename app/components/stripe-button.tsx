"use client";

import useStripe from "../hooks/useStripe";

export default function StripeButton({
  isSubscription,
  testeId,
  children,
  ...props
}: {
  isSubscription: boolean;
  testeId: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { createPaymentStripeCheckout, createSubscriptionStripeCheckout } =
    useStripe();

  function handleClick() {
    if (isSubscription) {
      return createSubscriptionStripeCheckout({ testeId });
    }
    return createPaymentStripeCheckout({ testeId });
  }
  return (
    <button
      onClick={handleClick}
      className="bg-black hover:bg-slate-900 text-white font-bold border rounded-md py-2 w-96 disabled:opacity-50 disabled:border-red-400 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
}
