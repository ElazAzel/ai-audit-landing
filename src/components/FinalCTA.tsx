"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

export default function FinalCTA() {
  return (
    <section className="border-t border-border bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Ильяс Азелханов
          </p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-5xl">
            Начните с 30-минутной диагностики
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-fg-2">
            Разберём процессы, найдём 2-3 зоны быстрого эффекта и определим,
            какой AI-сценарий запускать первым.
          </p>
          <p className="mx-auto mt-3 max-w-sm text-sm text-muted">
            После диагностики — карта возможностей: что автоматизировать и
            сколько это сэкономит времени.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.97]"
            >
              <MessageCircle className="h-4 w-4" />
              Написать в WhatsApp
            </a>
            <button
              onClick={() => scrollToId("pricing")}
              className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-white px-8 py-3.5 text-sm font-semibold text-accent transition-all hover:bg-accent-light active:scale-[0.97]"
            >
              Смотреть пакеты
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
