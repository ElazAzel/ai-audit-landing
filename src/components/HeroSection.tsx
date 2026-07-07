"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Calculator } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

const workflowSteps = [
  "Диагностика",
  "Сценарии",
  "Промпт-пак",
  "Демо-ассистент",
  "Внедрение",
];

const floatingPrompts = [
  { label: "ChatGPT", x: -40, y: -60, delay: 0.2 },
  { label: "Gemini", x: 60, y: -30, delay: 0.5 },
  { label: "Claude", x: -50, y: 40, delay: 0.8 },
  { label: "Midjourney", x: 50, y: 50, delay: 1.1 },
  { label: "Perplexity", x: -20, y: -80, delay: 0.35 },
  { label: "Notion AI", x: 70, y: -70, delay: 0.65 },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mounted]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-b from-accent-light/40 via-bg to-bg pb-16 pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-light/50 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
                Алматы / Онлайн
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                AI-аудит и внедрение{" "}
                <span className="text-accent">рабочих AI-сценариев</span> для
                бизнеса, экспертов и образовательных проектов
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-fg-2 md:text-lg">
                От экспресс-диагностики за 2-3 дня до полного внедрения за 14
                дней. Превращаю хаотичное использование ChatGPT, Gemini и Claude
                в понятную систему: промпты, сценарии, демо-ассистента и план
                внедрения.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("calculator")}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-hover active:scale-[0.97]"
              >
                <Calculator className="h-4 w-4" />
                Рассчитать стоимость
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-6 py-3 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent-light active:scale-[0.97]"
              >
                <MessageCircle className="h-4 w-4" />
                Написать в WhatsApp
              </a>
              <button
                onClick={() => scrollTo("pricing")}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-fg-2 transition-all duration-200 hover:border-fg/20 hover:bg-surface active:scale-[0.97]"
              >
                Посмотреть пакеты
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          <div className="relative hidden md:block">
            <div
              className="relative flex h-[500px] w-full items-center justify-center"
              style={{
                transform: mounted
                  ? `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`
                  : "none",
                transition: "transform 0.15s ease-out",
              }}
            >
              {mounted &&
                floatingPrompts.map((p, i) => (
                  <motion.div
                    key={p.label}
                    className="absolute rounded-xl border border-border bg-white/80 px-3 py-2 text-xs font-medium text-fg-2 shadow-sm backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.6, x: 0, y: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: p.x,
                      y: p.y,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: p.delay,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      transform: mounted
                        ? `translate(${p.x + mousePos.x * (2 + i * 0.5)}px, ${p.y + mousePos.y * (2 + i * 0.5)}px)`
                        : "none",
                      transition: "transform 0.3s ease-out",
                    }}
                  >
                    {p.label}
                  </motion.div>
                ))}

              <div className="relative z-10 flex flex-col items-center gap-1.5">
                {workflowSteps.map((step, i) => (
                  <motion.div
                    key={step}
                    className="flex w-44 items-center justify-center rounded-xl border border-accent/20 bg-white px-4 py-2.5 text-sm font-medium text-fg shadow-sm"
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    animate={mounted ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                    {i < workflowSteps.length - 1 && (
                      <motion.svg
                        className="ml-2 h-3 w-3 text-accent/40"
                        viewBox="0 0 12 12"
                        fill="none"
                        initial={{ opacity: 0 }}
                        animate={mounted ? { opacity: 1 } : {}}
                        transition={{ delay: 1 + i * 0.12 }}
                      >
                        <path
                          d="M2 6h8M6 2l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="absolute -inset-10 rounded-full bg-gradient-radial from-accent/5 via-accent-glow-light/20 to-transparent blur-3xl"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
