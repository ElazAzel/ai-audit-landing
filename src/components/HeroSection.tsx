"use client";

import type { PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { ArrowRight, MessageCircle, Calculator } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

const auditArtifacts = [
  {
    label: "Процесс",
    title: "3 рабочих сценария",
    desc: "Где AI экономит время без потери качества.",
  },
  {
    label: "Команда",
    title: "Единый промпт-пак",
    desc: "Общие запросы, роли и критерии результата.",
  },
  {
    label: "Внедрение",
    title: "Демо-ассистент",
    desc: "Прототип, который можно показать и доработать.",
  },
];

const auditInputs = [
  "Продажи и КП",
  "Обучение команды",
  "Контент и исследования",
  "FAQ и поддержка",
];

const quickFacts = [
  { label: "Что делаем", value: "AI-сценарии для вашей команды" },
  { label: "Срок", value: "от 2 дней до 14 дней" },
  { label: "Бюджет", value: "от 90 000 ₸" },
];

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 24, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 24, mass: 0.4 });

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 14);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 14);
  };

  return (
    <section
      data-od-id="hero-section"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-b from-accent-light/30 via-bg to-bg pb-14 pt-20 md:pt-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-[0.92fr_1.08fr] md:gap-16">
          <div className="relative z-10">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-3 inline-flex items-center rounded-full border border-accent/20 bg-white/70 px-4 py-1.5 text-xs font-medium text-accent shadow-sm">
                AI-аудит для команд
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl lg:text-6xl">
                Собираю AI в{" "}
                <span className="text-accent">рабочую систему</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-2 md:text-lg">
                Диагностика, сценарии, промпты и демо-ассистент за 14 дней,
                чтобы команда использовала AI одинаково и измеримо.
              </p>
            </motion.div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollToId("calculator")}
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
                onClick={() => scrollToId("pricing")}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-fg-2 transition-all duration-200 hover:border-fg/20 hover:bg-surface active:scale-[0.97]"
              >
                Посмотреть пакеты
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
            <motion.dl
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 grid max-w-2xl gap-3 border-y border-border py-4 sm:grid-cols-3"
            >
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-medium text-muted">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug text-fg">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <div className="relative hidden md:block">
            <motion.div
              aria-label="Рабочая карта AI-аудита"
              className="relative flex min-h-[500px] w-full items-center justify-center"
              style={
                prefersReducedMotion
                  ? undefined
                  : { x: springX, y: springY, willChange: "transform" }
              }
            >
              <div className="absolute left-8 top-10 h-36 w-36 rounded-[2rem] border border-accent/15 bg-accent-light/35" />
              <div className="absolute bottom-12 right-6 h-44 w-44 rounded-[2rem] border border-border bg-white/70" />

              <motion.div
                className="relative z-10 w-full max-w-[460px] rounded-[1.75rem] border border-border bg-white/90 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur"
                initial={
                  prefersReducedMotion ? false : { opacity: 0, y: 28, scale: 0.98 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-medium text-muted">
                      Рабочая карта аудита
                    </p>
                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-fg">
                      От хаоса запросов к процессу
                    </h2>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-white">
                    14 дней
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {auditInputs.map((item, index) => (
                    <motion.div
                      key={item}
                      className="rounded-2xl border border-border bg-bg px-3 py-2 text-xs font-medium text-fg-2"
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 10 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.35 + index * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 divide-y divide-border border-y border-border">
                  {auditArtifacts.map((artifact, index) => (
                    <motion.div
                      key={artifact.title}
                      className="grid gap-3 py-4 sm:grid-cols-[5.5rem_1fr]"
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, x: 18 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <span className="text-xs font-medium text-muted">
                        {artifact.label}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-fg">
                          {artifact.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-fg-2">
                          {artifact.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-accent-light/45 p-4">
                  <p className="text-xs font-medium text-accent">
                    Итоговая точка
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-fg-2">
                    Руководитель видит, какие AI-сценарии запускать первыми,
                    кто отвечает за качество и что проверять каждую неделю.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
