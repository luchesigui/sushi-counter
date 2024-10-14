"use server";

import { sendEmailTo } from "@/app/lib/ses";

export async function sendEmail(email: string) {
  return await sendEmailTo({
    userEmail: email,
    emailSubject: "Teste em Português",
    emailBody: `<html><body><p>Esta é uma mensagem de saudação aos meus amigos do template.</p></body></html>`,
  });
}
