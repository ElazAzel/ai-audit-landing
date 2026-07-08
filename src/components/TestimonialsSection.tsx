"use client";

import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Отзывы
          </p>
          <h2 className="text-4xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl">
            Кейсы и результаты
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : i * 0.08 }}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <Quote className="mb-4 h-6 w-6 text-accent/30" />
              <p className="text-sm leading-relaxed text-fg-2">&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-4 border-t border-border pt-3">
                <p className="text-sm font-semibold text-fg">{t.name}</p>
                <p className="text-xs text-fg-2">{t.role}</p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
