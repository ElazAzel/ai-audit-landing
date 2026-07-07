"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { outcomes } from "@/lib/data";
import {
  Map,
  Lightbulb,
  FileText,
  Bot,
  Route,
  ChevronDown,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  map: <Map className="h-5 w-5" />,
  scenarios: <Lightbulb className="h-5 w-5" />,
  prompts: <FileText className="h-5 w-5" />,
  demo: <Bot className="h-5 w-5" />,
  plan: <Route className="h-5 w-5" />,
};

export default function OutcomesSection() {
  const [active, setActive] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section data-od-id="outcomes-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Что получает клиент
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-fg-2">
            Пять конкретных результатов, которые остаются команде после работы.
            Не обещания - готовые материалы.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`rounded-xl border bg-surface p-6 shadow-sm transition-all duration-300 ${
                active === o.id
                  ? "border-accent/40 ring-1 ring-accent/20"
                  : "border-border hover:border-accent/20"
              } ${i === 2 ? "lg:col-start-2" : ""}`}
            >
              <button
                onClick={() => setActive(active === o.id ? null : o.id)}
                className="flex w-full items-start justify-between text-left"
                aria-expanded={active === o.id}
                aria-controls={`outcome-${o.id}`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-light text-accent">
                    {iconMap[o.id]}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-fg">{o.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-fg-2">
                      {o.short}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`mt-1 h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
                    active === o.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {active === o.id && (
                  <motion.div
                    id={`outcome-${o.id}`}
                    initial={
                      prefersReducedMotion ? false : { height: 0, opacity: 0 }
                    }
                    animate={{ height: "auto", opacity: 1 }}
                    exit={
                      prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 border-t border-border pt-4">
                      <p className="text-sm leading-relaxed text-fg-2">
                        {o.description}
                      </p>
                      <div className="mt-3 rounded-lg bg-accent-light/50 px-4 py-2.5 text-sm font-medium text-accent">
                        {o.benefit}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
