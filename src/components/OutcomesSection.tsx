"use client";

import { motion, useReducedMotion } from "motion/react";
import { outcomes } from "@/lib/data";
import { Map, Lightbulb, FileText, Bot, Route } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  map: <Map className="h-5 w-5" />,
  scenarios: <Lightbulb className="h-5 w-5" />,
  prompts: <FileText className="h-5 w-5" />,
  demo: <Bot className="h-5 w-5" />,
  plan: <Route className="h-5 w-5" />,
};

export default function OutcomesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section data-od-id="outcomes-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Что клиент получает на руки
          </h2>
          <p className="mt-3 text-base leading-relaxed text-fg-2">
            Не абстрактный тренинг, а готовый набор материалов, который команда
            может использовать сразу после работы.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-6">
          {outcomes.map((outcome, index) => (
            <motion.article
              data-od-id={`outcome-card-${outcome.id}`}
              key={outcome.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`rounded-[1.25rem] border border-border bg-surface p-5 shadow-sm ${
                index < 2 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-accent">
                {iconMap[outcome.id]}
              </div>
              <h3 className="text-base font-semibold text-fg">
                {outcome.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-2">
                {outcome.short}
              </p>
              <p className="mt-4 rounded-xl bg-bg px-4 py-3 text-sm font-medium leading-relaxed text-accent">
                {outcome.benefit}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
