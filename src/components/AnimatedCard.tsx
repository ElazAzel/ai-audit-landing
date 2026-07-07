"use client";

import { motion, useReducedMotion } from "motion/react";

interface Props {
  children: React.ReactNode;
  className?: string;
  index?: number;
  highlight?: boolean;
  onClick?: () => void;
}

export default function AnimatedCard({
  children,
  className = "",
  index = 0,
  highlight,
  onClick,
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.2 } }
      }
      onClick={onClick}
      className={`rounded-xl border border-border bg-surface p-6 shadow-sm transition-shadow duration-200 ${highlight ? "ring-2 ring-accent ring-offset-2" : "hover:shadow-md"} ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
