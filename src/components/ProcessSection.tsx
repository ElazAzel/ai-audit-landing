"use client";

import { processSteps } from "@/lib/data";
import { Clock, FileText } from "lucide-react";

export default function ProcessSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Процесс
          </p>
          <h2 className="text-4xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl">
            Как проходит работа
          </h2>
          <p className="mt-3 text-base leading-relaxed text-fg-2">
            Пять этапов — от диагностики до готового сценария
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative flex gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="mt-1 h-full w-px bg-border" />
                )}
              </div>
              <div className="mb-10 flex-1 md:mb-14">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-fg">{step.title}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-fg/10 bg-accent-wash px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.05em] text-accent">
                    <Clock className="h-3 w-3" />
                    {step.duration}
                  </span>
                </div>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-2">
                  {step.description}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                  <FileText className="h-3 w-3" />
                  <span className="font-semibold text-fg-2">{step.deliverables}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
