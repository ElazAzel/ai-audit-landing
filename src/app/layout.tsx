import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ai-audit-landing-tau.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI-аудит и внедрение AI-сценариев для бизнеса | Ильяс Азелханов",
    template: "%s | Ильяс Азелханов",
  },
  description:
    "Практический AI-аудит: диагностика, 5-10 готовых сценариев, промпт-пак, демо-ассистент и план внедрения за 14 дней. Для EdTech, экспертов, малого бизнеса, HR и маркетинга. Алматы, онлайн.",
  keywords: [
    "AI-аудит",
    "внедрение AI",
    "ChatGPT для бизнеса",
    "AI-воркшоп",
    "AI для EdTech",
    "AI для малого бизнеса",
    "промпт-пак",
    "AI-ассистент",
    "автоматизация бизнеса AI",
    "AI-консультант Алматы",
    "Ильяс Азелханов",
    "LinkMAX",
  ],
  authors: [{ name: "Ильяс Азелханов", url: "https://lnkmx.my/elazart" }],
  creator: "Ильяс Азелханов",
  publisher: "LinkMAX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "AI-аудит | Ильяс Азелханов",
    title: "AI-аудит и внедрение AI-сценариев для бизнеса | Ильяс Азелханов",
    description:
      "Диагностика, сценарии, промпты и демо-ассистент за 14 дней. Чтобы команда использовала AI одинаково и измеримо.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-аудит и внедрение AI-сценариев для бизнеса | Ильяс Азелханов",
    description:
      "Диагностика, сценарии, промпты и демо-ассистент за 14 дней. Чтобы команда использовала AI одинаково и измеримо.",
  },
  verification: {
    google: "",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="canonical" href={SITE_URL} />
        <JsonLd />
      </head>
      <body className="min-h-dvh flex flex-col" suppressHydrationWarning>
        <BackgroundAnimation />
        <div className="relative z-10 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
