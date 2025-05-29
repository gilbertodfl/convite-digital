import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ProvedorMensagens } from "@/data/contexts/ContextoMensagens";

const fonte = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seu Evento começa aqui",
  description: "Aplicação Fullstack de eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={fonte.className}>
        <ProvedorMensagens>
          {children}
        </ProvedorMensagens>
      </body>
    </html>
  );
}
