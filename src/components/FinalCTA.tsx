"use client";

import { motion, useReducedMotion } from "motion/react";
import { WHATSAPP_LINK } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";
import { MessageCircle, Calculator } from "lucide-react";

export default function FinalCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      data-od-id="final-cta-section"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-accent-glow-light/20 to-accent/5" />
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent-glow/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Начните с короткой диагностики на 30 минут
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-fg-2">
            Разберём текущие процессы, найдём 2-3 зоны быстрого эффекта и
            определим, какой AI-сценарий стоит запускать первым.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-hover active:scale-[0.97]"
            >
              <MessageCircle className="h-4 w-4" />
              Написать в WhatsApp
            </a>
            <button
              onClick={() => scrollToId("calculator")}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-7 py-3.5 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent-light active:scale-[0.97]"
            >
              <Calculator className="h-4 w-4" />
              Рассчитать стоимость
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
