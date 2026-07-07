"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { calculatorOptions, WHATSAPP_LINK } from "@/lib/data";
import { Calculator, MessageCircle } from "lucide-react";

interface FormState {
  clientType: string;
  teamSize: string;
  need: string;
  demoNeeded: string;
  format: string;
}

const initialState: FormState = {
  clientType: "",
  teamSize: "",
  need: "",
  demoNeeded: "no",
  format: "online",
};

function getPackageForNeed(need: string): string {
  const map: Record<string, string> = {
    diagnostics: "AI-Диагностика",
    workshop: "AI-Воркшоп CORE",
    implementation: "AI-Внедрение PRO",
    "full-system": "AI-Система CUSTOM",
  };
  return map[need] || "";
}

export default function CalculatorSection() {
  const [form, setForm] = useState<FormState>(initialState);

  const result = useMemo(() => {
    if (!form.clientType || !form.teamSize || !form.need) return null;

    const needOption = calculatorOptions.need.find(
      (n) => n.value === form.need,
    );
    const teamOption = calculatorOptions.teamSize.find(
      (t) => t.value === form.teamSize,
    );

    if (!needOption || !teamOption) return null;

    let price = needOption.basePrice * teamOption.multiplier;
    let recommended = getPackageForNeed(form.need);

    if (form.demoNeeded === "yes" && form.need !== "implementation" && form.need !== "full-system") {
      price += 150000;
      if (form.need === "diagnostics" || form.need === "workshop") {
        recommended = "AI-Внедрение PRO";
      }
    }

    const formatNote =
      form.format === "offline"
        ? "возможны организационные расходы при необходимости"
        : undefined;

    return {
      price,
      recommended,
      formatNote,
    };
  }, [form]);

  const set = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const message = useMemo(() => {
    if (!result) return "";
    return `Здравствуйте, Ильяс! Хочу обсудить AI-аудит / внедрение.
Тип клиента: ${calculatorOptions.clientType.find((c) => c.value === form.clientType)?.label}
Размер команды: ${calculatorOptions.teamSize.find((t) => t.value === form.teamSize)?.label}
Формат: ${calculatorOptions.format.find((f) => f.value === form.format)?.label}
Запрос: ${calculatorOptions.need.find((n) => n.value === form.need)?.label}
Демо-ассистент: ${form.demoNeeded === "yes" ? "Да" : "Нет"}
Предварительный расчёт: ${result.price.toLocaleString()} ₸`;
  }, [result, form]);

  return (
    <section
      id="calculator"
      className="bg-gradient-to-b from-bg to-accent-light/20 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Рассчитайте примерную стоимость
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-fg-2">
            Заполните параметры — получите предварительный расчёт и
            рекомендуемый пакет
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-fg">
                Тип клиента
              </label>
              <div className="grid grid-cols-2 gap-2">
                {calculatorOptions.clientType.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => set("clientType", opt.value)}
                    className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      form.clientType === opt.value
                        ? "border-accent bg-accent text-white"
                        : "border-border bg-surface text-fg-2 hover:border-accent/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-fg">
                Размер команды
              </label>
              <div className="grid grid-cols-2 gap-2">
                {calculatorOptions.teamSize.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => set("teamSize", opt.value)}
                    className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      form.teamSize === opt.value
                        ? "border-accent bg-accent text-white"
                        : "border-border bg-surface text-fg-2 hover:border-accent/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-fg">
                Что нужно
              </label>
              <div className="space-y-2">
                {calculatorOptions.need.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => set("need", opt.value)}
                    className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
                      form.need === opt.value
                        ? "border-accent bg-accent text-white"
                        : "border-border bg-surface text-fg-2 hover:border-accent/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-fg">
                Демо-ассистент нужен?
              </label>
              <div className="flex gap-2">
                {calculatorOptions.demoNeeded.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => set("demoNeeded", opt.value)}
                    className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      form.demoNeeded === opt.value
                        ? "border-accent bg-accent text-white"
                        : "border-border bg-surface text-fg-2 hover:border-accent/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-fg">
                Формат
              </label>
              <div className="flex gap-2">
                {calculatorOptions.format.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => set("format", opt.value)}
                    className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      form.format === opt.value
                        ? "border-accent bg-accent text-white"
                        : "border-border bg-surface text-fg-2 hover:border-accent/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                result
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`sticky top-24 rounded-xl border bg-surface p-6 shadow-sm ${
                result ? "border-accent/30" : "border-border"
              }`}
            >
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-fg">
                <Calculator className="h-5 w-5 text-accent" />
                Ваш расчёт
              </h3>

              {result ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted">
                      Примерная стоимость
                    </p>
                    <motion.p
                      key={result.price}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl font-bold tracking-tight text-fg"
                    >
                      {result.price.toLocaleString()} ₸
                    </motion.p>
                  </div>

                  <div className="rounded-lg bg-accent-light/50 px-4 py-3">
                    <p className="text-xs font-medium uppercase tracking-[0.08em] text-accent">
                      Рекомендуемый пакет
                    </p>
                    <p className="text-base font-semibold text-accent">
                      {result.recommended}
                    </p>
                  </div>

                  {result.formatNote && (
                    <p className="text-xs leading-relaxed text-muted">
                      {result.formatNote}
                    </p>
                  )}

                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-hover active:scale-[0.97]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Отправить расчёт в WhatsApp
                  </a>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <Calculator className="mb-3 h-10 w-10 text-muted/40" />
                  <p className="text-sm text-muted">
                    Заполните поля слева, чтобы увидеть предварительный расчёт
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
