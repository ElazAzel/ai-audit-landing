"use client";

import { motion, useReducedMotion } from "motion/react";
import { credibilityCards } from "@/lib/data";
import { CheckCircle } from "lucide-react";

const approachSteps = [
  "Найти процесс",
  "Разобрать задачу",
  "Собрать AI-сценарий",
  "Дать команде понятный шаблон",
  "Протестировать на реальной задаче",
  "Закрепить в рабочем процессе",
];

export default function WhyMeSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section data-od-id="why-me-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Почему со мной
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
                <span className="text-2xl font-bold text-white">ИА</span>
              </div>
              <p className="text-sm leading-relaxed text-fg-2">
                Ильяс работает на стыке AI, образования, предпринимательства,
                проектного управления и продуктового мышления. Фокус - не в
                модных инструментах, а в том, чтобы встроить AI в реальные
                задачи команды.
              </p>
            </motion.div>

            <div className="space-y-2">
              {approachSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-surface px-4 py-2.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-light text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-fg">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {credibilityCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-xl border border-border bg-surface p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h4 className="text-sm font-semibold text-fg">
                      {card.title}
                    </h4>
                    <p className="mt-0.5 text-sm leading-relaxed text-fg-2">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
