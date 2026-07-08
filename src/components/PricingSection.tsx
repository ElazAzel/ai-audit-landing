"use client";

import { motion, useReducedMotion } from "motion/react";
import { packages, WHATSAPP_LINK } from "@/lib/data";
import { Check, MessageCircle } from "lucide-react";

export default function PricingSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="pricing" data-od-id="pricing-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Пакеты и стоимость
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-fg-2">
            Выберите формат: от экспресс-диагностики до полной AI-системы под
            ключ
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative flex flex-col rounded-xl border bg-surface p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                pkg.popular
                  ? "border-accent ring-2 ring-accent/20 lg:scale-105"
                  : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    <Check className="h-3 w-3" />
                    Рекомендуем
                  </span>
                </div>
              )}
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-fg">{pkg.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-fg-2">
                  {pkg.audience}
                </p>
              </div>
              <div className="mb-5">
                <span className="text-3xl font-bold tracking-tight text-fg">
                  {pkg.priceLabel || `${pkg.price.toLocaleString()} ₸`}
                </span>
              </div>
              <div className="mb-6 flex-1 space-y-2.5">
                {pkg.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-fg-2">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mb-4 text-xs text-muted">Срок: {pkg.timeframe}</div>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Здравствуйте, Ильяс! Хочу обсудить пакет "${pkg.name}".`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                  pkg.popular
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-accent/20 bg-accent-light/50 text-accent hover:bg-accent-light"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
