"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

export default function FinalCTA() {
  return (
    <section className="border-t border-border bg-surface py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
            Ильяс Азелханов
          </p>
          <h2 className="text-3xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl">
            Начните с 30-минутной диагностики
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-fg-2 md:mt-4 md:text-base">
            Разберём процессы, найдём 2-3 зоны быстрого эффекта и определим,
            какой AI-сценарий запускать первым.
          </p>
          <p className="mx-auto mt-2 max-w-sm text-xs text-muted md:mt-3 md:text-sm">
            После диагностики — карта возможностей: что автоматизировать и
            сколько это сэкономит времени.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 md:mt-10 md:flex-row md:justify-center md:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-accent px-8 py-3.5 text-sm font-bold text-[#080b0d] transition-all hover:bg-accent-hover active:scale-[0.97] md:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Написать в WhatsApp
            </a>
            <button
              onClick={() => scrollToId("pricing")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] border border-border px-8 py-3.5 text-sm font-bold text-fg transition-all hover:border-border-strong active:scale-[0.97] md:w-auto"
            >
              <ArrowRight className="h-4 w-4" />
              Смотреть пакеты
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
