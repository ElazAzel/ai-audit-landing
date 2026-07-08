"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { packages, calculatorOptions, WHATSAPP_LINK } from "@/lib/data";
import { Check, MessageCircle, Calculator } from "lucide-react";

interface CalcForm {
  need: string;
  teamSize: string;
}

export default function PricingSection() {
  const prefersReducedMotion = useReducedMotion();
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
    ? `Здравствуйте, Ильяс! Хочу обсудить AI-аудит.
Запрос: ${calculatorOptions.need.find((n) => n.value === form.need)?.label}
Команда: ${calculatorOptions.teamSize.find((t) => t.value === form.teamSize)?.label}
Предварительный расчёт: ${result.price.toLocaleString()} ₸`
    : "";

  return (
    <section id="pricing" data-od-id="pricing-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Пакеты и стоимость
          </h2>
          <p className="mt-3 text-base leading-relaxed text-fg-2">
            От диагностики за 90 000 ₸ до полной AI-системы. Выберите нужный
            уровень — ниже можно сразу рассчитать стоимость под вашу команду.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col rounded-xl border bg-surface p-5 shadow-sm ${
                pkg.popular ? "border-accent ring-2 ring-accent/20" : "border-border"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-[10px] font-semibold text-white">
                  Рекомендуем
                </span>
              )}
              <h3 className="text-base font-semibold text-fg">{pkg.name}</h3>
              <p className="mt-1 text-xs text-fg-2">{pkg.audience}</p>
              <p className="mt-3 text-2xl font-bold text-fg">
                {pkg.priceLabel || `${pkg.price.toLocaleString()} ₸`}
              </p>
              <ul className="mt-4 flex-1 space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 text-xs text-fg-2">
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[10px] text-muted">{pkg.timeframe}</p>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Здравствуйте, Ильяс! Хочу обсудить пакет "${pkg.name}".`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  pkg.popular
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-accent/20 text-accent hover:bg-accent-light"
                }`}
              >
                <MessageCircle className="h-3 w-3" />
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 max-w-2xl rounded-xl border border-accent/20 bg-accent-light/30 p-6"
        >
          <h3 className="flex items-center gap-2 text-sm font-semibold text-fg">
            <Calculator className="h-4 w-4 text-accent" />
            Быстрый расчёт стоимости
          </h3>
          <p className="mt-1 text-xs text-fg-2">
            Выберите нужный уровень и размер команды
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <select
              value={form.need}
              onChange={(e) => setForm((f) => ({ ...f, need: e.target.value }))}
              className="flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-xs text-fg"
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
              className="flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-xs text-fg"
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
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg bg-white px-4 py-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-muted">
                  Примерно
                </p>
                <p className="text-xl font-bold text-fg">
                  {result.price.toLocaleString()} ₸
                </p>
                <p className="text-xs text-accent">{recommended.name}</p>
              </div>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-medium text-white hover:bg-accent-hover"
              >
                <MessageCircle className="h-3 w-3" />
                Отправить в WhatsApp
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
