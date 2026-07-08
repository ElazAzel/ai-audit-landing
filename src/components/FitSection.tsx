"use client";

import { motion, useReducedMotion } from "motion/react";
import { fits } from "@/lib/data";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function FitSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      data-od-id="fit-section"
      className="bg-bg py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Кому подходит и не подходит
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-fg-2">
            Честно расскажу, когда моя помощь принесёт результат, а когда -
            нет
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-success/20 bg-surface p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10">
                <ThumbsUp className="h-4 w-4 text-success" />
              </div>
              <h3 className="text-base font-semibold text-success">
                Подойдёт, если
              </h3>
            </div>
            <ul className="space-y-2.5">
              {fits.yes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-2">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success/10 text-[10px] font-bold text-success">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-warn/20 bg-surface p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warn/10">
                <ThumbsDown className="h-4 w-4 text-warn" />
              </div>
              <h3 className="text-base font-semibold text-warn">
                Не подойдёт, если
              </h3>
            </div>
            <ul className="space-y-2.5">
              {fits.no.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-2">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-warn/10 text-[10px] font-bold text-warn">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
