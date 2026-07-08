"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMemo, Fragment } from "react";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function TextReveal({
  children,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.04,
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const words = useMemo(() => children.split(/(\s+)/).filter(Boolean), [children]);

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={className} aria-label={children}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {words.map((word, i) => {
          const isSpace = word.trim() === "";
          if (isSpace) {
            return <Fragment key={`s-${i}`}> </Fragment>;
          }
          return (
            <motion.span
              key={`w-${i}`}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 16, rotateX: -8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.5,
                    delay: delay + i * stagger,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.span>
    </Tag>
  );
}

export function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
