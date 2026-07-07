import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "AI-аудит и внедрение AI-сценариев для бизнеса | Ильяс Азелханов",
  description:
    "Практический AI-аудит, воркшопы и внедрение рабочих AI-сценариев для бизнеса, экспертов, EdTech и команд. Промпт-паки, демо-ассистенты и план внедрения за 14 дней.",
  keywords:
    "AI-аудит, внедрение AI, ChatGPT для бизнеса, AI-воркшоп, AI для EdTech, AI для малого бизнеса, промпт-пак, AI-ассистент, Алматы, Ильяс Азелханов",
  openGraph: {
    title: "AI-аудит и внедрение AI-сценариев для бизнеса | Ильяс Азелханов",
    description:
      "Практический AI-аудит, воркшопы и внедрение рабочих AI-сценариев для бизнеса, экспертов, EdTech и команд.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
