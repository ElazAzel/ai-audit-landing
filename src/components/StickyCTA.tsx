"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

const NAV_ITEMS = [
  { id: "pricing", label: "Стоимость" },
  { id: "process", label: "Процесс" },
  { id: "faq", label: "FAQ" },
];

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border backdrop-blur-xl bg-bg/80">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6"
          aria-label="Основная навигация"
        >
          <span className="font-mono text-[10px] font-semibold tracking-wider text-fg">
            Ильяс Азелханов
          </span>
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToId(item.id)}
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-fg-2 transition-colors hover:text-fg"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-[8px] border border-border px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-fg transition-all hover:border-border-strong"
              >
                <MessageCircle className="h-3 w-3" />
                Связаться
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-bg/90 backdrop-blur-md transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-fg-2">
            AI-аудит для команды
          </span>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[8px] bg-accent px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-[#080b0d] hover:bg-accent-hover"
          >
            <MessageCircle className="h-3 w-3" />
            Обсудить
          </a>
        </div>
      </div>

      <nav
        className="fixed bottom-20 right-4 z-40 md:hidden"
        aria-label="Быстрая навигация"
      >
        <ul className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToId(item.id)}
                className="rounded-[4px] border border-border bg-bg/85 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-fg-2 backdrop-blur-md"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
