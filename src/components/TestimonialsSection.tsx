"use client";

import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="border-t border-border py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-14 md:max-w-2xl"
        >
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
            Отзывы
          </p>
          <h2 className="text-3xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl">
            Кейсы и результаты
          </h2>
        </motion.div>

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : i * 0.08 }}
              className="rounded-[8px] border border-border bg-surface p-4 md:p-5"
            >
              <Quote className="mb-3 h-5 w-5 text-accent/30 md:mb-4" />
              <p className="text-sm leading-relaxed text-fg-2">&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-3 border-t border-border pt-3 md:mt-4">
                <p className="text-sm font-bold text-fg">{t.name}</p>
                <p className="text-xs text-fg-2">{t.role}</p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
