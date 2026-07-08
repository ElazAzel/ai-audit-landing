"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

export default function HeroSection() {
  return (
    <section
      data-od-id="hero-section"
      className="flex min-h-[96svh] items-center bg-fg pb-20 pt-28 text-bg md:pt-36"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-bg/60">
            Ильяс Азелханов · AI-практик, CEO LinkMAX
          </p>
          <h1 className="text-[clamp(4rem,11vw,9.5rem)] font-bold leading-[0.82] tracking-[-0.05em]">
            Встраиваю AI
            <br />
            <span className="text-cream">в рабочие процессы</span>
            <br />
            вашей команды
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bg/75 md:text-2xl">
            Диагностика, готовые сценарии, промпт-пак, демо-ассистент и план
            внедрения за 14 дней. Не лекция - инструменты, которые команда
            использует завтра.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-cream px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream hover:text-fg active:scale-[0.97]"
            >
              <MessageCircle className="h-4 w-4" />
              Обсудить внедрение
            </a>
            <button
              onClick={() => scrollToId("pricing")}
              className="inline-flex items-center gap-2.5 rounded-full border border-bg/25 px-7 py-3.5 text-sm font-semibold text-bg/85 transition-colors hover:border-bg/50 active:scale-[0.97]"
            >
              <ArrowRight className="h-4 w-4" />
              Стоимость и пакеты
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-px border-y border-bg/15 bg-bg/15 md:grid-cols-3">
          {[
            { label: "Диагностика", value: "30-60 мин", desc: "Разбираем процессы и текущие задачи команды" },
            { label: "Результат", value: "5-10 сценариев", desc: "С промптами и инструкциями под ваши задачи" },
            { label: "Срок", value: "от 2 до 14 дней", desc: "От диагностики до работающего сценария" },
          ].map((item) => (
            <div key={item.label} className="bg-fg py-6 md:px-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-bg/55">
                {item.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-cream">{item.value}</p>
              <p className="mt-1 text-sm leading-relaxed text-bg/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
