"use client";

import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { HOW_WE_WORK_STEPS } from "@shared/mock-data";
import { cn } from "@shared/lib/cn";

import { HowWeWorkIllustration } from "../how-we-work-timeline/how-we-work-illustrations";

export function HowWeWorkNarrative() {
  const t = useTranslations();

  return (
    <section className="space-y-6 px-6 py-12" aria-labelledby="hww-narrative-heading">
      <h2 id="hww-narrative-heading" className="sr-only">
        Steps
      </h2>
      <ol className="space-y-6">
        {HOW_WE_WORK_STEPS.map((step) => {
          const isPrimary = step.step === "02";
          const isLight = !isPrimary;
          return (
            <li
              key={step.step}
              className={cn(
                "shadow-soft relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl border p-6",
                isPrimary && "bg-primary border-primary text-white text-shadow-lg",
                isLight && "border-outline-variant/10 bg-surface-container-lowest",
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 overflow-hidden",
                  isPrimary ? "text-white opacity-[0.14]" : "text-primary opacity-[0.18]",
                )}
                aria-hidden
              >
                <HowWeWorkIllustration
                  id={step.illustrationId}
                  className="min-h-[140%] min-w-[140%] -translate-y-[8%]"
                />
              </div>

              <span
                className={cn(
                  "font-display absolute top-6 left-6 text-7xl leading-none font-black opacity-15",
                  isLight ? "text-primary" : "text-white",
                )}
                aria-hidden
              >
                {step.step}
              </span>

              {step.badgeKey ? (
                <span className="bg-secondary-container text-on-secondary-container font-label absolute top-5 right-5 rounded-xl px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                  {t(step.badgeKey)}
                </span>
              ) : null}

              <div className="relative space-y-2">
                <span
                  className={cn(
                    "font-label text-[10px] font-bold tracking-widest uppercase",
                    isLight ? "text-on-surface-variant" : "text-white/80",
                  )}
                >
                  {isPrimary ? "Step " : ""}
                  {step.step}
                </span>
                <h3
                  className={cn(
                    "font-headline text-2xl leading-tight font-extrabold",
                    isLight ? "text-on-surface" : "text-white",
                  )}
                >
                  {t(step.i18nTitleKey)}
                </h3>
                <p
                  className={cn(
                    "max-w-[28ch] text-sm leading-relaxed",
                    isLight ? "text-on-surface-variant" : "text-white/85",
                  )}
                >
                  {t(step.i18nBodyKey)}
                </p>
                <p
                  className={cn(
                    "font-label inline-flex items-center gap-1 pt-2 text-xs font-bold",
                    isLight ? "text-primary" : "text-secondary-container",
                  )}
                >
                  {t(step.i18nDurationKey)}
                  <ChevronRight size={14} aria-hidden />
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
