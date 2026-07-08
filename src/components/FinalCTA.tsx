"use client";

import { motion, useReducedMotion } from "motion/react";
import { WHATSAPP_LINK } from "@/lib/data";
import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="border-t border-border bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Ильяс Азелханов
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Начните с 30-минутной диагностики
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-fg-2">
            Разберём текущие процессы, найдём 2-3 зоны быстрого эффекта и
            определим, какой AI-сценарий стоит запускать первым.
          </p>
          <p className="mx-auto mt-3 max-w-sm text-sm text-muted">
            После диагностики вы получите карту возможностей — что можно
            автоматизировать и сколько это сэкономит времени.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[8px] bg-accent px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-accent-hover active:scale-[0.97]"
            >
              <MessageCircle className="h-4 w-4" />
              Написать в WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
