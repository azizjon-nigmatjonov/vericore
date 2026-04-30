"use client";

import { User, Factory, ArrowDown, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

export function CommissionDiagram() {
  const t = useTranslations("howWeWork");

  return (
    <section
      className="bg-ink-dark -mx-6 px-6 py-16 text-white"
      aria-labelledby="commission-heading"
    >
      <header className="mb-12 space-y-2 text-center">
        <span className="font-label text-secondary-container text-xs font-bold tracking-widest uppercase">
          {t("commissionEyebrow")}
        </span>
        <h2 id="commission-heading" className="font-headline text-3xl font-extrabold">
          {t("commissionTitle")}
        </h2>
      </header>

      <div className="mx-auto max-w-md space-y-3">
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
          <span className="bg-primary-container/20 text-primary-container flex h-12 w-12 items-center justify-center rounded-xl">
            <User size={24} aria-hidden />
          </span>
          <div className="flex-1">
            <p className="font-headline text-base font-bold">{t("commissionFlowCustomer")}</p>
            <p className="text-xs text-slate-400">{t("commissionFlowCustomerLabel")}</p>
          </div>
          <span className="font-label text-secondary-container font-bold">
            {t("commissionFlowCustomerValue")}
          </span>
        </div>

        <div className="flex justify-center">
          <ArrowDown size={20} className="text-slate-500" aria-hidden />
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
          <span className="bg-secondary-container/20 text-secondary-container flex h-12 w-12 items-center justify-center rounded-xl">
            <Factory size={24} aria-hidden />
          </span>
          <p className="font-headline flex-1 text-base font-bold">{t("commissionFlowFactory")}</p>
        </div>

        <div className="flex justify-center">
          <ArrowDown size={20} className="text-slate-500" aria-hidden />
        </div>

        <div className="bg-primary/15 border-primary-container/30 flex items-center gap-4 rounded-2xl border-2 p-5">
          <span className="bg-primary-container text-on-primary-container flex h-12 w-12 items-center justify-center rounded-xl">
            <Shield size={24} aria-hidden />
          </span>
          <div className="flex-1">
            <p className="font-headline text-primary-container text-base font-bold">
              {t("commissionFlowVeriCore")}
            </p>
            <p className="text-xs text-slate-300">{t("commissionFlowVeriCoreLabel")}</p>
          </div>
          <span className="font-label text-tertiary-container font-bold">+5–8%</span>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400 italic">
          {t("commissionFlowVeriCoreNote")}
        </p>
      </div>

      <p className="mx-auto mt-8 max-w-md text-center text-sm leading-relaxed text-slate-300">
        {t("commissionExplain")}
      </p>
    </section>
  );
}
