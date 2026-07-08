"use client";

import { MessageCircle, Calculator, Check } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

const tools = [
  "ChatGPT", "Gemini", "Claude", "Notion AI",
  "Midjourney", "Perplexity", "Gamma", "Canva AI",
];

const results = [
  "Карта AI-возможностей",
  "5-10 готовых сценариев",
  "Корпоративный промпт-пак",
  "Демо-ассистент",
  "План внедрения на 14 дней",
];

export default function HeroSection() {
  return (
    <section className="pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Ильяс Азелханов · AI-практик, CEO LinkMAX
            </p>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl lg:text-6xl">
              Встраиваю AI в рабочие процессы вашей команды
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-2 md:text-lg">
              Разбираюсь, где AI реально сэкономит время, собираю сценарии,
              промпты и демо-ассистента. Не лекция — готовые инструменты, которые
              команда использует на следующей неделе.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[8px] bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-hover active:scale-[0.97]"
              >
                <MessageCircle className="h-4 w-4" />
                Обсудить внедрение
              </a>
              <button
                onClick={() => scrollToId("pricing")}
                className="inline-flex items-center gap-2 rounded-[8px] border border-accent/20 bg-accent-light/50 px-6 py-3 text-sm font-medium text-accent transition-all hover:bg-accent-light active:scale-[0.97]"
              >
                <Calculator className="h-4 w-4" />
                Стоимость и пакеты
              </button>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-accent-wash px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-fg">
                Что вы получите
              </p>
              <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-fg-2">
                {results.map((r) => (
                  <div key={r} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                    {r}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
              <span>Работаю с:</span>
              {tools.map((t) => (
                <span key={t} className="font-medium text-fg">{t}</span>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-xl border border-border bg-white p-1">
              <div className="rounded-[10px] border border-border bg-white p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    AI-аудит
                  </p>
                  <span className="rounded-full bg-accent-light/70 px-2.5 py-0.5 text-[10px] font-semibold text-accent">
                    14 дней
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Диагностика", time: "30-60 мин", desc: "Разбираем процессы, задачи и текущее использование AI" },
                    { label: "Сценарии", time: "1-2 дня", desc: "5-10 готовых сценариев для ваших задач" },
                    { label: "Промпт-пак", time: "2-3 дня", desc: "Библиотека промптов с инструкциями" },
                    { label: "Внедрение", time: "до 14 дней", desc: "Запуск сценариев в работу команды" },
                  ].map((step) => (
                    <div key={step.label} className="rounded-xl border border-border bg-bg p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-fg">{step.label}</p>
                        <span className="text-[10px] text-muted">{step.time}</span>
                      </div>
                      <p className="mt-0.5 text-xs text-fg-2">{step.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-xl bg-accent-wash p-3 text-center">
                  <p className="text-xs font-medium text-accent">
                    Руководитель видит: какие AI-сценарии запускать, кто отвечает, что проверять
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
