"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Home, CreditCard, Route, HelpCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

const NAV_ITEMS = [
  { id: "pricing", label: "Стоимость" },
  { id: "process", label: "Процесс" },
  { id: "faq", label: "FAQ" },
];

const MOBILE_TABS = [
  { id: "hero", label: "Главная", icon: Home },
  { id: "pricing", label: "Цены", icon: CreditCard },
  { id: "process", label: "Процесс", icon: Route },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle, highlight: true },
];

export default function StickyCTA() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border bg-bg/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <span className="font-mono text-[10px] font-semibold tracking-wider text-fg">
            ELAZART FIELD OS
          </span>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Основная навигация">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-fg-2 transition-colors hover:text-fg"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[8px] bg-accent px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-[#080b0d] transition-all hover:bg-accent-hover"
            >
              <MessageCircle className="h-3 w-3" />
              Связаться
            </a>
          </nav>
        </div>
      </header>

      <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-bg md:hidden"
        aria-label="Мобильная навигация"
      >
        <ul className="flex items-center justify-around pb-2">
          {MOBILE_TABS.map((tab) => {
            const Icon = tab.icon;
            if (tab.highlight) {
              return (
                <li key={tab.id}>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-0.5 px-3 py-2"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-accent text-[#080b0d]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.06em] text-accent">
                      {tab.label}
                    </span>
                  </a>
                </li>
              );
            }
            return (
              <li key={tab.id}>
                <button
                  onClick={() => scrollToId(tab.id === "hero" ? "hero" : tab.id)}
                  className="flex flex-col items-center gap-0.5 px-3 py-2"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-[8px] text-fg-2">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.06em] text-fg-2">
                    {tab.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="pb-16 md:pb-0" />
    </>
  );
}
