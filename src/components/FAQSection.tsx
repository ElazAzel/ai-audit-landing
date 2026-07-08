"use client";

import { motion, useReducedMotion } from "motion/react";
import { faqItems } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function FAQItem({ item, index }: { item: (typeof faqItems)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (contentRef.current) setHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-xl border bg-surface ${open ? "border-accent/40" : "border-border"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="pr-4 text-sm font-semibold leading-relaxed text-fg">
          {item.q}
        </span>
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
        <div ref={contentRef} className="border-t border-border px-5 pb-4 pt-3">
          <p className="text-sm leading-relaxed text-fg-2">{item.a}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FAQSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            FAQ
          </p>
          <h2 className="text-4xl font-bold leading-[1.0] tracking-[-0.02em] md:text-5xl">
            Часто задаваемые вопросы
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2.5">
          {faqItems.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
