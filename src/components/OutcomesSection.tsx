"use client";

import { outcomes } from "@/lib/data";
import { Check } from "lucide-react";

export default function OutcomesSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
            Артефакты
          </p>
          <h2 className="text-4xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl">
            5 результатов, которые остаются команде
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.id}
              className="rounded-[8px] border border-border bg-surface p-5"
            >
              <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-[4px] bg-accent text-xs font-bold text-[#080b0d]">
                {index + 1}
              </span>
              <h3 className="text-sm font-bold text-fg">{outcome.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-2">
                {outcome.short}
              </p>
              <p className="mt-4 flex items-center gap-1.5 rounded-[4px] bg-accent-light px-3 py-2 text-xs font-semibold text-accent">
                <Check className="h-3 w-3" />
                {outcome.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
