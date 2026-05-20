"use client";

import { useTranslations } from "next-intl";
import { LeadMagnetForm } from "./lead-magnet-form";

export function LeadMagnetBanner() {
  const t = useTranslations("home");

  return (
    <section
      id="lead-form"
      className="bg-ink-dark px-6 py-16"
      aria-labelledby="lead-magnet-heading"
    >
      <div className="from-primary/20 to-primary-container/10 border-primary/20 mx-auto space-y-6 rounded-3xl border bg-gradient-to-br p-8 lg:w-2xl">
        <header className="space-y-2">
          <h2 id="lead-magnet-heading" className="font-headline text-2xl font-extrabold text-white">
            {t("leadMagnetTitle")}
          </h2>
          <p className="text-sm text-slate-400">{t("leadMagnetSubtitle")}</p>
        </header>
        <LeadMagnetForm />
      </div>
    </section>
  );
}
