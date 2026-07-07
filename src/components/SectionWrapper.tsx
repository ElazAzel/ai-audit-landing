"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  dark,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id={id}
      data-od-id={id ? `${id}-section` : undefined}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
      animate={
        isInView || prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 32 }
      }
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`py-16 md:py-24 ${dark ? "bg-fg text-bg" : "bg-bg text-fg"} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">{children}</div>
    </motion.section>
  );
}
