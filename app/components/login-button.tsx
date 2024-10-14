"use client";

import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import useStripe from "../hooks/useStripe";

export function LoginButton() {
  const { data: session } = useSession();

  if (session) return <LoggedIn session={session} />;

  return <LoggedOut />;
}

function LoggedIn({ session }: { session: Session }) {
  const { handleCreateStripePortal } = useStripe();

  return (
    <div className="flex items-center gap-2">
      <span>Bem-vindo, {session.user?.name || "Visitante"}</span>
      {session.user?.image && (
        <img
          src={session.user?.image}
          alt="Profile Picture"
          className="w-8 h-8 rounded-full"
        />
      )}
      <button onClick={handleCreateStripePortal}>Portal</button>
      <button onClick={() => signOut()}>Sair</button>
    </div>
  );
}

function LoggedOut() {
  return (
    <div className="flex items-center gap-2">
      <span>Teste o login 👉🏻</span>
      <button
        onClick={() => {
          signIn("google");
        }}
        className="px-4 py-2 rounded-md bg-slate-950 text-white font-bold"
      >
        Login
      </button>
    </div>
  );
}
