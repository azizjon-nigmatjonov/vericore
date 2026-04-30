"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { HOW_WE_WORK_STEPS } from "@shared/mock-data";
import { cn } from "@shared/lib/cn";

export function HowWeWorkNarrative() {
  const t = useTranslations();

  return (
    <section className="space-y-6 px-6 py-12" aria-labelledby="hww-narrative-heading">
      <h2 id="hww-narrative-heading" className="sr-only">
        Steps
      </h2>
      <ol className="space-y-6">
        {HOW_WE_WORK_STEPS.map((step) => {
          const isLight = step.background !== "primary";
          return (
            <li
              key={step.step}
              className={cn(
                "shadow-soft relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl border p-6",
                step.background === "primary" &&
                  "bg-primary border-primary text-white text-shadow-lg",
                step.background === "surface" &&
                  "bg-surface-container-lowest border-outline-variant/10",
                step.background === "image" && "border-transparent bg-cover bg-center text-white",
              )}
              style={
                step.background === "image" && step.imageUrl
                  ? {
                      backgroundImage: `linear-gradient(180deg, rgba(10,18,32,0.45) 0%, rgba(10,18,32,0.85) 100%), url(${step.imageUrl})`,
                    }
                  : undefined
              }
            >
              {step.background === "image" && step.imageUrl ? (
                <Image
                  src={step.imageUrl}
                  alt=""
                  fill
                  sizes="100vw"
                  className="-z-10 object-cover"
                  loading="lazy"
                />
              ) : null}

              <span
                className={cn(
                  "font-display absolute top-6 left-6 text-7xl leading-none font-black opacity-15",
                  step.background === "surface" ? "text-primary" : "text-white",
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
                  {step.background === "primary" ? "Step " : ""}
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
