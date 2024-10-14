import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "../components/auth-provider";
import { Toaster } from "react-hot-toast";
import { getSEOTags } from "../lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000", // Cor de fundo do seu app (No celular é a cor que fica no topo)
  width: "device-width",
  initialScale: 1,
};

// Isso adiciona tags SEO padrão a todas as páginas do nosso app.
// Você pode substituí-las em cada página passando parâmetros para a função getSEOTags().
export const metadata = getSEOTags({
  appName: "Template SaaS",
  appDescription: "Template SaaS by André Dev",
  keywords: ["Template SaaS", "André Dev"],
  appDomain: "https://template.andreelias.dev",
  locale: "pt_BR",
  canonicalUrlRelative: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
