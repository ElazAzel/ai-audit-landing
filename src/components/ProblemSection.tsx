"use client";

import { motion, useReducedMotion } from "motion/react";

const problems = [
  {
    title: "Запросы не повторяются",
    desc: "У каждого в команде свой способ работать с ChatGPT. Качество результата зависит от человека, а не от системы.",
  },
  {
    title: "Инструменты живут отдельно",
    desc: "Gemini, Claude, Midjourney и другие сервисы используются фрагментарно. Нет общей логики выбора и проверки.",
  },
  {
    title: "Качество не закреплено",
    desc: "Результаты AI никто не оценивает по единым критериям. Каждый новый запрос снова становится экспериментом.",
  },
  {
    title: "AI не встроен в процесс",
    desc: "Сервисы пробуют ради скорости, но не связывают с продажами, обучением, контентом или поддержкой.",
  },
  {
    title: "Выгода не видна руководителю",
    desc: "Невозможно объяснить, что именно стало быстрее, точнее или дешевле после появления AI в команде.",
  },
];

export default function ProblemSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      data-od-id="problem-section"
      className="relative overflow-hidden bg-surface py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="lg:sticky lg:top-28"
        >
          <p className="mb-3 text-sm font-medium text-accent">
            Знакомая ситуация?
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-fg md:text-4xl">
            AI уже есть. Управляемой системы пока нет.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-fg-2">
            Большинство команд уже пробуют AI, но польза теряется между
            разрозненными запросами, случайными инструментами и отсутствием
            стандартов качества.
          </p>

          <div className="mt-8 rounded-[1.25rem] border border-border bg-bg p-5">
            <p className="text-sm font-semibold text-fg">
              Следующий шаг не в том, чтобы купить еще один сервис.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fg-2">
              Сначала нужно понять, где AI действительно меняет рабочий процесс,
              а где только добавляет шум.
            </p>
          </div>
        </motion.div>

        <div className="border-y border-border">
          {problems.map((p, index) => (
            <motion.article
              data-od-id={`problem-signal-${index + 1}`}
              key={p.title}
              initial={prefersReducedMotion ? false : { opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid gap-3 border-b border-border py-5 last:border-b-0 md:grid-cols-[0.9fr_1.25fr]"
            >
              <h3 className="text-base font-semibold text-fg">{p.title}</h3>
              <p className="text-sm leading-relaxed text-fg-2">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
