"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { processSteps } from "@/lib/data";
import { Clock, FileText } from "lucide-react";

function ProcessStep({
  step,
  index,
}: {
  step: (typeof processSteps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
      }
      animate={
        isInView || prefersReducedMotion
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-5 md:gap-8"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
          {step.step}
        </div>
        {index < processSteps.length - 1 && (
          <div className="mt-1 h-full w-px bg-accent/20" />
        )}
      </div>
      <div className="pb-10 md:pb-12">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold text-fg">{step.title}</h3>
          <span className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent-light/50 px-3 py-0.5 text-xs font-medium text-accent">
            <Clock className="h-3 w-3" />
            {step.duration}
          </span>
        </div>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-fg-2">
          {step.description}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
          <FileText className="h-3 w-3" />
          <span className="font-medium text-fg-2">{step.deliverables}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Как проходит работа
          </h2>
          <p className="mt-3 text-base leading-relaxed text-fg-2">
            Пять этапов — от первой диагностики до работающего AI-сценария в
            команде
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          {processSteps.map((step, i) => (
            <ProcessStep key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
