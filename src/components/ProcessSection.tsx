"use client";

import { processSteps } from "@/lib/data";
import { Clock, FileText } from "lucide-react";
import TextReveal, { FadeUp } from "@/components/TextReveal";

export default function ProcessSection() {
  return (
    <section className="border-t border-border py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 md:mb-14 md:max-w-2xl">
          <FadeUp>
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
              Процесс
            </p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="text-3xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl"
            delay={0.1}
            stagger={0.04}
          >
            Как проходит работа
          </TextReveal>
          <FadeUp delay={0.3}>
            <p className="mt-2 text-sm leading-relaxed text-fg-2 md:mt-3 md:text-base">
              Пять этапов — от диагностики до готового сценария
            </p>
          </FadeUp>
        </div>

        <div className="mx-auto md:max-w-3xl">
          {processSteps.map((step, index) => (
            <FadeUp key={step.step} delay={index * 0.1}>
              <div className="relative flex gap-4 md:gap-10">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-accent text-xs font-bold text-[#080b0d] md:h-10 md:w-10 md:text-sm">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && <div className="mt-1 h-full w-px bg-border" />}
                </div>
                <div className="mb-8 flex-1 md:mb-14">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <h3 className="text-base font-bold text-fg md:text-lg">{step.title}</h3>
                    <span className="inline-flex items-center gap-1 rounded-[4px] border border-border bg-bg px-2 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.06em] text-blue md:px-2.5 md:text-[9px]">
                      <Clock className="h-2.5 w-2.5" />
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-fg-2 md:mt-2 md:text-sm">
                    {step.description}
                  </p>
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted md:mt-2">
                    <FileText className="h-3 w-3" />
                    <span className="font-semibold text-fg-2">{step.deliverables}</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
