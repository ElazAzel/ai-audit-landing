"use client";

import { outcomes } from "@/lib/data";
import { Check } from "lucide-react";
import TextReveal, { FadeUp } from "@/components/TextReveal";

export default function OutcomesSection() {
  return (
    <section className="border-t border-border py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 md:mb-14 md:max-w-2xl">
          <FadeUp>
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
              Артефакты
            </p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="text-3xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl"
            delay={0.1}
            stagger={0.04}
            mode="words"
          >
            5 результатов, которые остаются команде
          </TextReveal>
        </div>

        <div className="grid gap-3 md:grid-cols-5 md:gap-4">
          {outcomes.map((outcome, index) => (
            <FadeUp key={outcome.id} delay={index * 0.08}>
              <div className="rounded-[8px] border border-border bg-surface p-4 md:p-5">
                <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-[4px] bg-accent text-[10px] font-bold text-[#080b0d] md:mb-4 md:h-8 md:w-8 md:text-xs">
                  {index + 1}
                </span>
                <h3 className="text-sm font-bold text-fg">{outcome.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-fg-2 md:mt-2 md:text-sm">
                  {outcome.short}
                </p>
                <p className="mt-3 flex items-center gap-1.5 rounded-[4px] bg-accent-light px-2.5 py-1.5 text-[10px] font-semibold text-accent md:mt-4 md:px-3 md:py-2 md:text-xs">
                  <Check className="h-2.5 w-2.5 md:h-3 md:w-3" />
                  {outcome.benefit}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
