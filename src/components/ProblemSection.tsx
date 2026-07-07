"use client";

import { motion } from "motion/react";

const problems = [
  {
    title: "Хаотичные промпты",
    desc: "У каждого в команде свои запросы к ChatGPT — нет единого стандарта и качества.",
  },
  {
    title: "Случайные инструменты",
    desc: "Кто-то использует Gemini, кто-то Claude, кто-то Midjourney — всё разрозненно.",
  },
  {
    title: "Нет стандартов качества",
    desc: "Результаты AI никто не проверяет и не улучшает — каждый раз эксперимент с нуля.",
  },
  {
    title: "Нет внедрения",
    desc: "AI используется «для галочки», а не встроен в реальные рабочие процессы.",
  },
  {
    title: "Нет понятной выгоды",
    desc: "Руководитель не видит измеримого результата от использования AI в команде.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bg to-accent-light/20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Знакомая ситуация?
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            AI в команде есть, а системы — нет
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-fg-2">
            Большинство команд уже пробуют AI, но делают это хаотично — без
            системы, стандартов и понятного результата.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-xl border border-border bg-surface p-6 shadow-sm ${
                  i === problems.length - 1
                    ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                    : ""
                }`}
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent-light text-sm font-bold text-accent">
                  {i + 1}
                </div>
                <h3 className="mb-1.5 text-base font-medium text-fg">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-fg-2">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 text-center"
          >
            <p className="text-sm text-muted">
              От хаоса к системе — за 3 дня диагностики или 14 дней внедрения
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
