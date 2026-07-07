"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { audienceSegments } from "@/lib/data";
import {
  GraduationCap,
  Star,
  Building2,
  Megaphone,
  Check,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="h-5 w-5" />,
  star: <Star className="h-5 w-5" />,
  building2: <Building2 className="h-5 w-5" />,
  megaphone: <Megaphone className="h-5 w-5" />,
};

export default function AudienceSection() {
  const [active, setActive] = useState(audienceSegments[0].id);
  const prefersReducedMotion = useReducedMotion();

  const current = audienceSegments.find((s) => s.id === active)!;

  return (
    <section data-od-id="audience-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Для кого это
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-fg-2">
            Выберите свой тип бизнеса - покажу подходящие сценарии внедрения
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {audienceSegments.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-200 ${
                  active === s.id
                    ? "border-accent bg-accent-light/50 text-accent shadow-sm"
                    : "border-border bg-surface text-fg-2 hover:border-accent/30 hover:text-fg"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    active === s.id
                      ? "bg-accent text-white"
                      : "bg-accent-light/50 text-accent"
                  }`}
                >
                  {iconMap[s.icon]}
                </div>
                <span className="text-xs font-medium">{s.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8"
            >
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-fg">
                {current.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-fg-2">
                {current.description}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {current.scenarios.map((sc) => (
                  <div
                    key={sc}
                    className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-bg px-4 py-3"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-fg">
                      {sc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
