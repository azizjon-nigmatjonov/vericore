"use client";

import { useTranslations } from "next-intl";

const STEPS = [
  { n: "01", titleKey: "step01Title" },
  { n: "02", titleKey: "step02Title" },
  { n: "03", titleKey: "step03Title" },
  { n: "04", titleKey: "step04Title" },
  { n: "05", titleKey: "step05Title" },
];

export function HowWeWorkTimeline() {
  const t = useTranslations();

  return (
    <section className="bg-ink-dark py-16 text-white" aria-labelledby="hww-heading">
      <div className="mb-12 px-6">
        <h2 id="hww-heading" className="font-headline text-3xl font-extrabold tracking-tight">
          {t("home.howWeWorkTitle")}
        </h2>
        <p className="mt-2 text-slate-400">{t("home.howWeWorkSubtitle")}</p>
      </div>
      <ol className="hide-scrollbar flex gap-6 overflow-x-auto px-6 pb-4">
        {STEPS.map((step) => (
          <li
            key={step.n}
            className="flex min-w-[150px] flex-col items-center space-y-4 text-center"
          >
            <div className="bg-primary-container/15 border-primary-container flex h-16 w-16 items-center justify-center rounded-full border">
              <span className="text-primary-container font-label text-xl font-bold">{step.n}</span>
            </div>
            <p className="font-headline text-sm leading-tight font-bold">
              {t(`howWeWork.${step.titleKey}`)}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
