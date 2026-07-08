"use client";

import { motion, useReducedMotion } from "motion/react";
import { faqItems } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import TextReveal, { FadeUp } from "@/components/TextReveal";

function FAQItem({ item, index }: { item: (typeof faqItems)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (contentRef.current) setHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <FadeUp delay={index * 0.05}>
      <div
        className={`rounded-[8px] border bg-surface ${
          open ? "border-[rgba(184,255,44,0.25)]" : "border-border"
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between px-4 py-3.5 text-left md:px-5 md:py-4"
          aria-expanded={open}
          aria-controls={`faq-answer-${index}`}
        >
          <span className="pr-4 text-sm font-bold leading-relaxed text-fg">{item.q}</span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          id={`faq-answer-${index}`}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: height ? `${height}px` : "0px" }}
        >
          <div ref={contentRef} className="border-t border-border px-4 pb-4 pt-3 md:px-5">
            <p className="text-sm leading-relaxed text-fg-2">{item.a}</p>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export default function FAQSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="border-t border-border py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-14 md:max-w-2xl"
        >
          <FadeUp>
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
              FAQ
            </p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="text-3xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl"
            delay={0.1}
            stagger={0.04}
          >
            Часто задаваемые вопросы
          </TextReveal>
        </motion.div>

        <div className="mx-auto md:max-w-2xl">
          <div className="space-y-2 md:space-y-2.5">
            {faqItems.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
