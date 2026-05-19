"use client";

import { Truck } from "lucide-react";
import { useTranslations } from "next-intl";

import { UzbekistanMapSvg } from "./uzbekistan-map-svg";
import { UzbekistanRegionLegend } from "./uzbekistan-region-legend";

export function UzbekistanLogisticsMap() {
  const t = useTranslations("howWeWork");

  return (
    <section
      className="bg-surface-container-low px-6 py-16 lg:py-20"
      aria-labelledby="logistics-heading"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 space-y-3 text-center lg:mb-10">
          <Truck size={32} className="text-primary mx-auto" aria-hidden />
          <h2
            id="logistics-heading"
            className="font-headline text-on-surface text-3xl font-extrabold tracking-tight lg:text-4xl"
          >
            {t("logisticsTitle")}
          </h2>
          <p className="text-on-surface-variant mx-auto max-w-lg leading-relaxed lg:text-lg">
            {t("logisticsBody")}
          </p>
        </header>

        <div className="bg-surface-container-lowest border-outline-variant/10 shadow-soft overflow-hidden rounded-3xl border p-5 sm:p-8 lg:p-10">
          <UzbekistanMapSvg ariaLabel={`${t("logisticsTitle")}. ${t("logisticsCoverage")}`} />

          <p className="font-label text-on-surface-variant mt-6 text-center text-xs font-bold tracking-widest uppercase lg:mt-8">
            {t("logisticsCoverage")}
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
            <UzbekistanRegionLegend />
          </ul>
        </div>
      </div>
    </section>
  );
}
