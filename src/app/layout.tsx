import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calculadora-imc-five-mu.vercel.app"),
  title: "Calculadora de IMC (Índice de Massa Corporal)",
  description:
    "Calcule seu IMC (Índice de Massa Corporal) e veja a classificação: abaixo do peso, peso normal, sobrepeso e obesidade. Ferramenta gratuita e rápida.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Calculadora de IMC",
    description:
      "Calcule seu IMC (Índice de Massa Corporal) e veja a classificação e faixas de referência.",
    type: "website",
    locale: "pt_BR",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Calculadora de IMC",
    description:
      "Calcule seu IMC (Índice de Massa Corporal) e veja a classificação e faixas de referência.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-adsense-account" content="ca-pub-7524008220498928" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7524008220498928"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <header className="border-b border-black/5 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto w-full max-w-6xl px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link 
                href="/" 
                className="text-xl font-bold text-zinc-900 hover:text-emerald-700 transition-colors"
              >
                Calculadora IMC
              </Link>
              <div className="flex items-center gap-6 text-sm">
                <Link 
                  href="/" 
                  className="text-zinc-700 hover:text-emerald-700 transition-colors"
                >
                  Calcular
                </Link>
                <Link 
                  href="/blog" 
                  className="text-zinc-700 hover:text-emerald-700 transition-colors"
                >
                  Blog
                </Link>
                <Link 
                  href="/sobre" 
                  className="text-zinc-700 hover:text-emerald-700 transition-colors"
                >
                  Sobre
                </Link>
                <Link 
                  href="/contato" 
                  className="text-zinc-700 hover:text-emerald-700 transition-colors"
                >
                  Contato
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="mt-auto border-t border-black/5 bg-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Calculadora de IMC</p>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link className="text-zinc-700 hover:underline" href="/privacidade">
                Privacidade
              </Link>
              <Link className="text-zinc-700 hover:underline" href="/termos">
                Termos
              </Link>
              <Link className="text-zinc-700 hover:underline" href="/contato">
                Contato
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
