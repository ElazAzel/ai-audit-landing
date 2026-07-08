"use client";

import HeroSection from "@/components/HeroSection";
import OutcomesSection from "@/components/OutcomesSection";
import AudienceSection from "@/components/AudienceSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import StickyCTA from "@/components/StickyCTA";
import { testimonials, WHATSAPP_LINK, INSTAGRAM_URL, SITE_URL } from "@/lib/data";
import { MessageCircle, Camera, Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      <nav aria-label="Основная навигация" className="fixed top-0 z-40 w-full border-b border-border bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
          <span className="text-sm font-bold tracking-tight text-fg">
            Ильяс Азелханов
          </span>
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#pricing"
              className="text-xs font-semibold uppercase tracking-[0.05em] text-fg-2 transition-colors hover:text-accent"
            >
              Стоимость
            </a>
            <a
              href="#audience"
              className="text-xs font-semibold uppercase tracking-[0.05em] text-fg-2 transition-colors hover:text-accent"
            >
              Кому подходит
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-accent-hover"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      <main>
        <div className="block h-14 md:hidden" />
        <HeroSection />
        <OutcomesSection />
        <AudienceSection />

        <section aria-labelledby="testimonials-heading" className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Отзывы
              </p>
              <h2 id="testimonials-heading" className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-5xl">
                Что говорят те, кто уже работает с AI
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <article key={i} className="rounded-xl border border-border bg-white p-6">
                  <p className="text-sm leading-relaxed text-fg-2">&ldquo;{t.text}&rdquo;</p>
                  <footer className="mt-5 border-t border-border pt-4">
                    <p className="text-sm font-bold text-fg">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PricingSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <footer className="border-t border-border bg-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center text-xs text-muted md:flex-row md:text-left">
          <p className="font-semibold text-fg">Ильяс Азелханов — CEO LinkMAX</p>
          <div className="flex items-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-semibold text-fg-2 transition-colors hover:text-accent">
              <Camera className="h-3.5 w-3.5" /> Instagram
            </a>
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-semibold text-fg-2 transition-colors hover:text-accent">
              <Globe className="h-3.5 w-3.5" /> lnkmx.my
            </a>
          </div>
        </div>
      </footer>

      <StickyCTA />

      <nav aria-label="Мобильные действия" className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white md:hidden">
        <div className="flex items-center justify-center p-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-all active:scale-[0.97]"
          >
            <MessageCircle className="h-4 w-4" />
            Написать в WhatsApp
          </a>
        </div>
      </nav>
    </>
  );
}
