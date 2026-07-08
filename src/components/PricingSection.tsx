"use client";

import { useMemo, useState } from "react";
import { packages, calculatorOptions, WHATSAPP_LINK } from "@/lib/data";
import { Check, X, MessageCircle, Calculator } from "lucide-react";
import TextReveal, { FadeUp } from "@/components/TextReveal";

export default function PricingSection() {
  const [form, setForm] = useState<{ need: string; teamSize: string }>({ need: "", teamSize: "" });

  const result = useMemo(() => {
    if (!form.need || !form.teamSize) return null;
    const need = calculatorOptions.need.find((n) => n.value === form.need);
    const team = calculatorOptions.teamSize.find((t) => t.value === form.teamSize);
    if (!need || !team) return null;
    return { price: need.basePrice * team.multiplier, packageId: need.packageId };
  }, [form]);

  const recommended = packages.find((p) => p.id === result?.packageId);
  const message = result
    ? `Здравствуйте, Ильяс! Хочу обсудить AI-аудит.\nЗапрос: ${calculatorOptions.need.find((n) => n.value === form.need)?.label}\nКоманда: ${calculatorOptions.teamSize.find((t) => t.value === form.teamSize)?.label}\nПредварительный расчёт: ${result.price.toLocaleString()} ₸`
    : "";

  return (
    <section id="pricing" className="border-t border-border py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 md:mb-14 md:max-w-2xl">
          <FadeUp>
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
              Стоимость
            </p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="text-3xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl"
            delay={0.1}
            stagger={0.04}
          >
            Пакеты под любую задачу
          </TextReveal>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {packages.map((pkg, i) => (
            <FadeUp key={pkg.id} delay={i * 0.08}>
              <div
                className={`relative flex flex-col rounded-[8px] border bg-surface p-4 md:p-5 ${
                  pkg.popular ? "border-[rgba(184,255,44,0.3)]" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-[4px] bg-accent px-2.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.08em] text-[#080b0d] md:px-3 md:text-[9px]">
                    Рекомендуем
                  </span>
                )}
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-blue md:text-[10px]">
                  {pkg.name}
                </p>
                <p className="mt-1 text-[11px] text-fg-2 md:text-xs">{pkg.audience}</p>
                <p className="mt-3 text-2xl font-bold text-fg md:mt-4 md:text-3xl">
                  {pkg.priceLabel || `${pkg.price.toLocaleString()} ₸`}
                </p>
                <p className="mt-0.5 text-[11px] text-muted md:text-xs">{pkg.timeframe}</p>

                <div className="mt-4 flex-1 md:mt-5">
                  <p className="mb-2 font-mono text-[8px] font-semibold uppercase tracking-[0.08em] text-accent md:text-[9px]">
                    Входит
                  </p>
                  <ul className="space-y-1.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-[11px] text-fg-2 md:text-xs">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {pkg.missing.length > 0 && (
                    <>
                      <p className="mb-2 mt-3 font-mono text-[8px] font-semibold uppercase tracking-[0.08em] text-danger/60 md:mb-2 md:mt-4 md:text-[9px]">
                        Не входит
                      </p>
                      <ul className="space-y-1.5">
                        {pkg.missing.map((item) => (
                          <li key={item} className="flex items-start gap-1.5 text-[11px] text-fg-2 md:text-xs">
                            <X className="mt-0.5 h-3 w-3 shrink-0 text-danger/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Здравствуйте, Ильяс! Хочу обсудить пакет "${pkg.name}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex items-center justify-center gap-1.5 rounded-[8px] px-4 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.06em] transition-all md:mt-5 md:text-[10px] ${
                    pkg.popular
                      ? "bg-accent text-[#080b0d] hover:bg-accent-hover"
                      : "border border-border text-fg hover:border-border-strong"
                  }`}
                >
                  <MessageCircle className="h-3 w-3" />
                  {pkg.cta}
                </a>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="mx-auto mt-10 max-w-2xl rounded-[8px] border border-border bg-surface p-4 md:mt-14 md:p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-fg">
              <Calculator className="h-4 w-4 text-accent" />
              Быстрый расчёт
            </p>
            <div className="mt-4 flex flex-col gap-3 md:flex-row">
              <select
                value={form.need}
                onChange={(e) => setForm((f) => ({ ...f, need: e.target.value }))}
                className="w-full rounded-[4px] border border-border bg-bg px-3 py-2.5 text-xs text-fg"
                aria-label="Что нужно"
              >
                <option value="">Что нужно?</option>
                {calculatorOptions.need.map((n) => (
                  <option key={n.value} value={n.value}>{n.label}</option>
                ))}
              </select>
              <select
                value={form.teamSize}
                onChange={(e) => setForm((f) => ({ ...f, teamSize: e.target.value }))}
                className="w-full rounded-[4px] border border-border bg-bg px-3 py-2.5 text-xs text-fg"
                aria-label="Размер команды"
              >
                <option value="">Размер команды</option>
                {calculatorOptions.teamSize.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            {result && recommended && (
              <div className="mt-4 flex flex-col gap-3 rounded-[4px] border border-border bg-bg px-4 py-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-muted">Примерно</p>
                  <p className="text-xl font-bold text-fg">{result.price.toLocaleString()} ₸</p>
                  <p className="text-xs font-semibold text-blue">{recommended.name}</p>
                </div>
                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-[8px] bg-blue px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-white hover:bg-blue-hover"
                >
                  <MessageCircle className="h-3 w-3" />
                  Отправить
                </a>
              </div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
