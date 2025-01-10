import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contador de Sushi",
  description:
    "Conte quantas peças você comeu em um rodízio e até tenha uma ideia de quantas calorias você pode ter consumido.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-NAFJIDXXKfUXDmZWDC3hhw5GWKqjMT.png",
        sizes: "32x32",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-krf3cjZHZp938xyeIzTdKs7FlKP7ez.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-icon-Up9uOJfqi9lc9FGCvPfSkbMXkIHMPc.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Contador de Sushi",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="mask-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-krf3cjZHZp938xyeIzTdKs7FlKP7ez.svg"
          color="#000000"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
