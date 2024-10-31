import Link from "next/link";
import { AlertIcon, CheckIcon } from "../components/icons";
import { Header } from "../components/header";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto h-screen flex flex-col">
      <Header />
      <main className="h-full">
        <div className="h-full flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-bold text-3xl">
              Sua próxima jornada começa aqui!
            </h1>
            <h2>Explore as funcionalidades do template:</h2>
          </div>
          <div className="flex gap-10">
            <Card href="/landing-page" target="_blank">
              Landing Page
            </Card>
            <Card href="/pagamentos">Pagamentos</Card>
          </div>
          <div className="flex gap-10">
            <Card href="/upload-arquivos">BD + Imagens</Card>
            <Card href="enviar-email" loginRequired>
              Envio de emails
            </Card>
          </div>
          <Configs />
        </div>
      </main>
      <footer className="h-20 flex items-center justify-center">
        Na dúvida? Confira os{" "}
        <Link
          className="font-bold mx-1"
          href="https://www.youtube.com/watch?v=aRcszCr3kgA&list=PLeH52X2kI_ygF_fHBO3Ii6yWL9BlXLSpq"
          target="_blank"
        >
          vídeos explicativos
        </Link>
      </footer>
    </div>
  );
}

function Card({
  href,
  loginRequired = false,
  children,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  loginRequired?: boolean;
} & React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className="group relative border border-black bg-white p-4 rounded-md shadow-md w-48 h-36 flex items-center justify-center font-semibold"
      {...props}
    >
      <div className="hidden group-hover:block absolute -inset-0 bg-gradient-to-r from-purple-400 to-blue-300 via-blue-700 rounded-md blur-md size-[100%] -z-10" />
      {children}
      {loginRequired && (
        <div className="absolute bottom-1 left-0 right-0 mx-auto text-center text-xs text-slate-600 font-light">
          Rota protegida por login
        </div>
      )}
    </Link>
  );
}

function Configs() {
  const firebaseConfigured =
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY_BASE64 &&
    process.env.FIREBASE_STORAGE_BUCKET;

  const sesConfigured =
    process.env.SES_SOURCE_ADDRESS &&
    process.env.SES_REPLY_TO_ADDRESS &&
    process.env.SES_SECRET_KEY &&
    process.env.SES_ACCESS_KEY;

  const nextAuthConfigured =
    process.env.AUTH_SECRET &&
    process.env.AUTH_GOOGLE_ID &&
    process.env.AUTH_GOOGLE_SECRET;

  const stripeConfigured =
    process.env.NEXT_PUBLIC_STRIPE_PUB_KEY &&
    process.env.STRIPE_SECRET_KEY &&
    process.env.STRIPE_WEBHOOK_SECRET;

  const mercadoPagoConfigured =
    process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY &&
    process.env.MERCADO_PAGO_ACCESS_TOKEN &&
    process.env.MERCADO_PAGO_WEBHOOK_SECRET;

  return (
    <div className="text-xs text-slate-600 flex flex-col items-center gap-1">
      <h3>Configurações necessárias</h3>
      <div className="flex gap-4">
        <div className="flex gap-1 items-center">
          {sesConfigured ? <CheckIcon /> : <AlertIcon />}
          <span>AWS SES</span>
        </div>
        <div className="flex gap-1 items-center">
          {firebaseConfigured ? <CheckIcon /> : <AlertIcon />}
          <span>Firebase</span>
        </div>
        <div className="flex gap-1 items-center">
          {nextAuthConfigured ? <CheckIcon /> : <AlertIcon />}
          <span>NextAuth</span>
        </div>
        <div className="flex gap-1 items-center">
          {stripeConfigured ? <CheckIcon /> : <AlertIcon />}
          <span>Stripe</span>
        </div>
        <div className="flex gap-1 items-center">
          {mercadoPagoConfigured ? <CheckIcon /> : <AlertIcon />}
          <span>Mercado Pago</span>
        </div>
      </div>
    </div>
  );
}
