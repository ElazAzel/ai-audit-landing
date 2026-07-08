"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Ильяс Азелханов · AI-практик, CEO LinkMAX
          </p>
          <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-8xl">
            Встраиваю&nbsp;AI
            <br />
            <span className="text-accent">в рабочие процессы</span>
            <br />
            вашей команды
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-2 md:text-xl">
            Диагностика, готовые сценарии, промпт-пак, демо-ассистент и план
            внедрения за 14 дней. Не лекция — инструменты, которые команда
            использует завтра.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-accent bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.97]"
            >
              <MessageCircle className="h-4 w-4" />
              Обсудить внедрение
            </a>
            <button
              onClick={() => scrollToId("pricing")}
              className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-white px-7 py-3.5 text-sm font-semibold text-accent transition-all hover:bg-accent-light active:scale-[0.97]"
            >
              <ArrowRight className="h-4 w-4" />
              Стоимость и пакеты
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-border pt-10 md:grid-cols-3">
          {[
            { label: "Диагностика", value: "30–60 мин", desc: "Разбираем процессы и текущие задачи" },
            { label: "Результат", value: "5–10 сценариев", desc: "С промптами и инструкциями под ваши задачи" },
            { label: "Срок", value: "от 2 до 14 дней", desc: "От диагностики до работающего сценария" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                {item.label}
              </p>
              <p className="mt-1 text-lg font-bold text-fg">{item.value}</p>
              <p className="mt-0.5 text-sm text-fg-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
