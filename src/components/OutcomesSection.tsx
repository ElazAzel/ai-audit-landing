"use client";

import { motion, useReducedMotion } from "motion/react";
import { outcomes } from "@/lib/data";

export default function OutcomesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Что вы получите
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            5 артефактов — от диагностики до работающего сценария
          </h2>
        </motion.div>

        <div className="grid gap-3 md:grid-cols-5">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-xl border border-border bg-white p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-xs font-bold text-white">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-fg">{outcome.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-fg-2">
                {outcome.short}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-2xl rounded-xl border border-accent/15 bg-accent-wash px-5 py-4 text-center text-sm font-medium text-fg-2"
        >
          Всё остаётся команде — готовые материалы, которые используют на
          следующий день после воркшопа
        </motion.div>
      </div>
    </section>
  );
}
