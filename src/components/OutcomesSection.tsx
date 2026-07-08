"use client";

import { outcomes } from "@/lib/data";

export default function OutcomesSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Артефакты
          </p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-5xl">
            5 результатов, которые остаются команде
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-5">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.id}
              className="rounded-xl border border-border bg-white p-6"
            >
              <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-sm font-bold text-fg">{outcome.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-2">
                {outcome.short}
              </p>
              <p className="mt-4 rounded-[8px] bg-accent-wash px-3 py-2 text-xs font-semibold text-accent">
                {outcome.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
