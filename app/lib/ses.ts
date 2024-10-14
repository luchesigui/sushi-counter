import { SendEmailCommandInput, SES } from "@aws-sdk/client-ses";

export const ses = new SES({
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY!,
    secretAccessKey: process.env.SES_SECRET_KEY!,
  },
  region: "us-east-2",
});

export async function sendEmailTo({
  userEmail,
  emailSubject,
  emailBody,
}: {
  userEmail: string;
  emailSubject: string;
  emailBody: string;
}) {
  if (!userEmail || !emailSubject || !emailBody) return false;

  const params: SendEmailCommandInput = {
    Destination: {
      ToAddresses: [userEmail], // É uma lista, então você pode adicionar mais emails se quiser
    },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: emailSubject,
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailBody, // Formate em HTML (Mandando sem formatação tem mais chances de cair no spam)
        },
      },
    },
    Source: process.env.SES_SOURCE_ADDRESS, // Email em que você vai enviar o email (Siga esse padrão: "André Dev" <me@andreelias.dev>)
    ReplyToAddresses: [process.env.SES_REPLY_TO_ADDRESS!], // Email em que você vai receber quando alguém responder seu email
  };

  try {
    const emailSent = await ses.sendEmail(params);
    return emailSent.MessageId;
  } catch (error) {
    console.error(error);
    return false;
  }
}
