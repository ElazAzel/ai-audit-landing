"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

export default function HeroSection() {
  return (
    <section id="hero" className="flex min-h-[85dvh] items-center pb-24 pt-24 md:min-h-[90vh] md:pb-32 md:pt-36">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="md:max-w-3xl">
          <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue md:mb-6">
            Ильяс Азелханов · AI-практик, CEO LinkMAX
          </p>
          <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.03em] md:text-7xl lg:text-8xl">
            Встраиваю AI
            <br />
            <span className="text-accent">в рабочие процессы</span>
            <br />
            вашей команды
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-2 md:mt-6 md:text-lg lg:text-xl">
            Диагностика, готовые сценарии, промпт-пак, демо-ассистент и план
            внедрения за 14 дней. Не лекция — инструменты, которые команда
            использует завтра.
          </p>

          <div className="mt-6 flex flex-col gap-3 md:mt-8 md:flex-row md:flex-wrap md:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-accent px-6 py-3.5 text-sm font-bold text-[#080b0d] transition-all hover:bg-accent-hover active:scale-[0.97] md:px-7"
            >
              <MessageCircle className="h-4 w-4" />
              Обсудить внедрение
            </a>
            <button
              onClick={() => scrollToId("pricing")}
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-border px-6 py-3.5 text-sm font-bold text-fg transition-all hover:border-border-strong active:scale-[0.97] md:px-7"
            >
              <ArrowRight className="h-4 w-4" />
              Стоимость и пакеты
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-border pt-8 md:mt-16 md:grid-cols-3 md:gap-6 md:pt-10">
          {[
            { label: "Диагностика", value: "30–60 мин", desc: "Разбираем процессы и текущие задачи команды" },
            { label: "Результат", value: "5–10 сценариев", desc: "С промптами и инструкциями под ваши задачи" },
            { label: "Срок", value: "от 2 до 14 дней", desc: "От диагностики до работающего сценария" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-blue">
                {item.label}
              </p>
              <p className="mt-1 text-lg font-bold text-fg md:text-xl">{item.value}</p>
              <p className="mt-0.5 text-sm text-fg-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
