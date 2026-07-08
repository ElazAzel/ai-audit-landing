"use client";

import { motion, useReducedMotion } from "motion/react";
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

const surfaceMap: Record<string, string> = {
  accent: "bg-surface-sky",
  warn: "bg-surface-amber",
  success: "bg-surface-warm",
  "accent-glow": "bg-surface-coral",
};

const iconBgMap: Record<string, string> = {
  accent: "bg-white/70 text-accent",
  warn: "bg-white/70 text-warn",
  success: "bg-white/70 text-success",
  "accent-glow": "bg-white/70 text-accent-glow",
};

export default function AudienceSection() {
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
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Кому я помогаю
          </h2>
          <p className="mt-3 text-base leading-relaxed text-fg-2">
            Если в команде есть повторяющиеся материалы, продажи, обучение или
            клиентские сообщения — AI можно быстро превратить в рабочий процесс.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {audienceSegments.map((segment, index) => (
            <motion.article
              key={segment.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-xl border border-border bg-white"
            >
              <div className={`rounded-t-xl border-b border-border px-5 py-4 ${surfaceMap[segment.color] || "bg-accent-wash"}`}>
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBgMap[segment.color] || "bg-white/70 text-accent"}`}>
                    {iconMap[segment.icon]}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-fg">{segment.label}</h3>
                    <p className="text-xs text-fg-2">{segment.description}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-1.5 px-5 pb-4 pt-3">
                {segment.scenarios.map((scenario) => (
                  <div key={scenario} className="flex gap-2 text-xs">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                    <span className="text-fg">{scenario}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
