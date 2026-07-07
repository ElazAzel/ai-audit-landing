"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqItems } from "@/lib/data";
import { ChevronDown } from "lucide-react";

function FAQItem({
  item,
  index,
}: {
  item: (typeof faqItems)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-xl border bg-surface transition-all duration-300 ${
        open ? "border-accent/30 shadow-sm" : "border-border"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="pr-4 text-sm font-medium leading-relaxed text-fg">
          {item.q}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            ref={contentRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-5 pb-4 pt-3">
              <p className="text-sm leading-relaxed text-fg-2">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
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
