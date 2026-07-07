"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { WHATSAPP_LINK } from "@/lib/data";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible((current) => {
      const next = latest > 600;
      return current === next ? current : next;
    });
  });

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-od-id="sticky-cta"
          initial={
            prefersReducedMotion ? false : { opacity: 0, y: 20, scale: 0.9 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 20, scale: 0.9 }
          }
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 md:bottom-6 md:right-6"
        >
          <button
            onClick={scrollTop}
            className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted shadow-sm transition-all duration-200 hover:border-accent/30 hover:text-accent"
            aria-label="Наверх"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:bg-accent-hover active:scale-[0.97]"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Написать в WhatsApp</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
