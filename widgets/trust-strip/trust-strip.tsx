"use client";

import { useTranslations } from "next-intl";
import { TRUST_STATS } from "@shared/mock-data";
import { KpiTile } from "@shared/ui/kpi-tile";

export function TrustStrip() {
  const t = useTranslations("common");

  const labels: Record<string, string> = {
    yearsExperience: t("yearsExperience"),
    ownFactories: t("ownFactories"),
    zeroCommission: t("zeroCommission"),
    warranty: t("warranty", { months: "" }).trim(),
  };

  return (
    <section
      aria-label="Trust signals"
      className="bg-surface-container-low hide-scrollbar overflow-x-auto py-8"
    >
      <ul className="flex min-w-max gap-4 px-6">
        {TRUST_STATS.map((stat) => (
          <li key={stat.i18nKey}>
            <KpiTile variant="stat" value={stat.value} label={labels[stat.i18nKey] ?? ""} />
          </li>
        ))}
      </ul>
    </section>
  );
}
