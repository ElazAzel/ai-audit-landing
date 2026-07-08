"use client";

import { audienceSegments } from "@/lib/data";
import {
  GraduationCap,
  Star,
  Building2,
  Megaphone,
  Check,
} from "lucide-react";
import TextReveal, { FadeUp } from "@/components/TextReveal";

const iconMap: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />,
  star: <Star className="h-4 w-4 md:h-5 md:w-5" />,
  building2: <Building2 className="h-4 w-4 md:h-5 md:w-5" />,
  megaphone: <Megaphone className="h-4 w-4 md:h-5 md:w-5" />,
};

export default function AudienceSection() {
  return (
    <section className="border-t border-border py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 md:mb-14 md:max-w-2xl">
          <FadeUp>
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
              Кому подходит
            </p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="text-3xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl"
            delay={0.1}
            stagger={0.04}
          >
            Я помогаю командам, которые работают с контентом
          </TextReveal>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4 md:gap-4">
          {audienceSegments.map((segment, i) => (
            <FadeUp key={segment.id} delay={i * 0.08}>
              <article className="rounded-[8px] border border-border bg-surface">
                <div className="flex items-center gap-3 border-b border-border px-4 py-3 md:px-4 md:py-3.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-accent-wash text-blue md:h-9 md:w-9">
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
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
