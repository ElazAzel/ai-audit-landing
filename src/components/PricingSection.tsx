"use client";

import { useMemo, useState } from "react";
import { packages, calculatorOptions, WHATSAPP_LINK } from "@/lib/data";
import { Check, X, MessageCircle, Calculator } from "lucide-react";

interface CalcForm {
  need: string;
  teamSize: string;
}

export default function PricingSection() {
  const [form, setForm] = useState<CalcForm>({ need: "", teamSize: "" });

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
    <section id="pricing" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
            Стоимость
          </p>
          <h2 className="text-4xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl">
            Пакеты под любую задачу
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-[8px] border bg-surface p-5 ${
                pkg.popular ? "border-[rgba(184,255,44,0.3)]" : "border-border"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-[4px] bg-accent px-3 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-[#080b0d]">
                  Рекомендуем
                </span>
              )}
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-blue">
                {pkg.name}
              </p>
              <p className="mt-1 text-xs text-fg-2">{pkg.audience}</p>
              <p className="mt-4 text-3xl font-bold text-fg">
                {pkg.priceLabel || `${pkg.price.toLocaleString()} ₸`}
              </p>
              <p className="mt-0.5 text-xs text-muted">{pkg.timeframe}</p>

              <div className="mt-5 flex-1">
                <p className="mb-2 font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-accent">
                  Входит
                </p>
                <ul className="space-y-1.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs text-fg-2">
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                {pkg.missing.length > 0 && (
                  <>
                    <p className="mb-2 mt-4 font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-danger/60">
                      Не входит
                    </p>
                    <ul className="space-y-1.5">
                      {pkg.missing.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-xs text-fg-2">
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
                className={`mt-5 inline-flex items-center justify-center gap-1.5 rounded-[8px] px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.06em] transition-all ${
                  pkg.popular
                    ? "bg-accent text-[#080b0d] hover:bg-accent-hover"
                    : "border border-border text-fg hover:border-border-strong"
                }`}
              >
                <MessageCircle className="h-3 w-3" />
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-[8px] border border-border bg-surface p-5">
          <p className="flex items-center gap-2 text-sm font-bold text-fg">
            <Calculator className="h-4 w-4 text-accent" />
            Быстрый расчёт
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <select
              value={form.need}
              onChange={(e) => setForm((f) => ({ ...f, need: e.target.value }))}
              className="flex-1 rounded-[4px] border border-border bg-bg px-3 py-2.5 text-xs text-fg"
              aria-label="Что нужно"
            >
              <option value="">Что нужно?</option>
              {calculatorOptions.need.map((n) => (
                <option key={n.value} value={n.value}>
                  {n.label}
                </option>
              ))}
            </select>
            <select
              value={form.teamSize}
              onChange={(e) => setForm((f) => ({ ...f, teamSize: e.target.value }))}
              className="flex-1 rounded-[4px] border border-border bg-bg px-3 py-2.5 text-xs text-fg"
              aria-label="Размер команды"
            >
              <option value="">Размер команды</option>
              {calculatorOptions.teamSize.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          {result && recommended && (
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[4px] border border-border bg-bg px-4 py-3">
              <div>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-muted">
                  Примерно
                </p>
                <p className="text-xl font-bold text-fg">
                  {result.price.toLocaleString()} ₸
                </p>
                <p className="text-xs font-semibold text-blue">{recommended.name}</p>
              </div>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-[8px] bg-blue px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-white hover:bg-blue-hover"
              >
                <MessageCircle className="h-3 w-3" />
                Отправить
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
