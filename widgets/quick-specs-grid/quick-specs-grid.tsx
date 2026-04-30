"use client";

import { Gauge, Timer, Zap, Layers } from "lucide-react";
import { useTranslations } from "next-intl";
import { KpiTile } from "@shared/ui/kpi-tile";
import type { ProductSpec } from "@entities/product";

interface QuickSpecsGridProps {
  spec: ProductSpec;
}

export function QuickSpecsGrid({ spec }: QuickSpecsGridProps) {
  const t = useTranslations("product.specs");

  return (
    <section className="py-8" aria-labelledby="quick-specs-heading">
      <h2 id="quick-specs-heading" className="sr-only">
        Quick specs
      </h2>
      <div className="bg-surface-container-lowest shadow-soft divide-outline-variant/30 grid grid-cols-2 divide-x divide-y overflow-hidden rounded-3xl sm:grid-cols-4 sm:divide-y-0">
        <KpiTile
          variant="compact"
          icon={Gauge}
          label={t("productivity")}
          value={`${spec.productivity.value} m³/h`}
        />
        <KpiTile
          variant="compact"
          icon={Timer}
          label={t("cycleTime")}
          value={`${spec.cycleTimeSeconds}s`}
        />
        <KpiTile variant="compact" icon={Zap} label={t("power")} value={`${spec.powerKw} kW`} />
        <KpiTile variant="compact" icon={Layers} label={t("mixer")} value={spec.mixerModel} />
      </div>
    </section>
  );
}
