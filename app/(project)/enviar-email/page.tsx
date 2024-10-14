"use client";

import { sendEmail } from "@/app/actions/send-email";
import { Header } from "@/app/components/header";
import { FormEvent, useState } from "react";

export default function EnviarEmail() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const result = await sendEmail(email);
    setSending(false);
    setSuccess(result !== false);
    setTimeout(() => {
      // Coloquei isso aqui pra evitar mandar muitos emails - É só pra teste!
      setSuccess(false);
    }, 5000);
  }

  return (
    <div className="max-w-7xl mx-auto h-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Envio de Emails</h1>
        <p className="text-gray-500 mb-4">
          Uma demonstração de envio de emails com AWS SES.
        </p>
        <form
          onSubmit={handleSendEmail}
          className="bg-white border rounded px-8 pt-6 pb-8 mb-4"
        >
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Email para teste"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            disabled={success || sending}
            className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 rounded mt-4 w-full disabled:opacity-50"
          >
            {success
              ? "Email enviado"
              : sending
              ? "Enviando..."
              : "Enviar Email"}
          </button>
        </form>
        <p className="text-gray-500">
          Importante: Não abuse dessa função com emails de marketing.
        </p>
      </div>
    </div>
  );
}
