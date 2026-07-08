"use client";

import { outcomes } from "@/lib/data";

export default function OutcomesSection() {
  return (
    <section data-od-id="outcomes-section" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Артефакты
          </p>
          <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.035em] md:text-6xl">
            Клиент сразу видит, что останется после работы
          </h2>
        </div>

        <div className="border-y border-border">
          {outcomes.map((outcome, index) => (
            <article
              data-od-id={`outcome-row-${outcome.id}`}
              key={outcome.id}
              className="grid gap-5 border-b border-border py-6 last:border-b-0 md:grid-cols-[5rem_1fr_1.25fr]"
            >
              <span className="font-mono text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold leading-tight text-fg">
                  {outcome.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-2">
                  {outcome.short}
                </p>
              </div>
              <p className="text-sm font-semibold leading-relaxed text-accent">
                {outcome.benefit}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
