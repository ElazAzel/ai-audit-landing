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

export default function AudienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="audience"
      data-od-id="audience-section"
      className="bg-surface py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Для кого это подходит
          </h2>
          <p className="mt-3 text-base leading-relaxed text-fg-2">
            Если в команде есть повторяющиеся материалы, продажи, обучение или
            клиентские сообщения, AI можно быстро превратить в рабочий процесс.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {audienceSegments.map((segment, index) => (
            <motion.article
              data-od-id={`audience-card-${segment.id}`}
              key={segment.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-[1.25rem] border border-border bg-bg p-5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-accent">
                {iconMap[segment.icon]}
              </div>
              <h3 className="text-base font-semibold text-fg">
                {segment.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-2">
                {segment.description}
              </p>
              <div className="mt-4 space-y-2">
                {segment.scenarios.slice(0, 3).map((scenario) => (
                  <div key={scenario} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-fg">
                      {scenario}
                    </span>
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
