"use client";

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
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
            Кому подходит
          </p>
          <h2 className="text-4xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl">
            Я помогаю командам, которые работают с контентом
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {audienceSegments.map((segment) => (
            <article
              key={segment.id}
              className="rounded-[8px] border border-border bg-surface"
            >
              <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-accent-wash text-blue">
                  {iconMap[segment.icon]}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-fg">{segment.label}</h3>
                  <p className="text-xs text-fg-2">{segment.description}</p>
                </div>
              </div>
              <div className="space-y-1.5 px-4 pb-4 pt-3">
                {segment.scenarios.slice(0, 4).map((scenario) => (
                  <div key={scenario} className="flex gap-2 text-xs">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    <span className="text-fg-2">{scenario}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
