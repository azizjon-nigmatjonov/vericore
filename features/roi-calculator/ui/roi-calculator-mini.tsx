"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Calculator, TrendingUp } from "lucide-react";
import { Card, CardBody } from "@shared/ui/card";

interface RoiMiniProps {
  productivityM3PerHour: number;
  hourlyProfitUsd?: number;
  monthlyHours?: number;
}

export function RoiCalculatorMini({
  productivityM3PerHour,
  hourlyProfitUsd = 18,
  monthlyHours = 220,
}: RoiMiniProps) {
  const t = useTranslations("roi");
  const [load, setLoad] = useState(0.6);

  const monthlyProfit = useMemo(() => {
    return Math.round(productivityM3PerHour * load * hourlyProfitUsd * monthlyHours);
  }, [productivityM3PerHour, load, hourlyProfitUsd, monthlyHours]);

  return (
    <Card className="bg-surface-container-low">
      <CardBody className="space-y-4">
        <header className="flex items-center gap-3">
          <span className="bg-primary-container/15 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <Calculator size={20} aria-hidden />
          </span>
          <h3 className="font-headline text-on-surface font-bold">{t("title")}</h3>
        </header>

        <div className="space-y-2">
          <label
            htmlFor="roi-load"
            className="font-label text-outline text-xs font-bold tracking-widest uppercase"
          >
            {t("averageOutput")}: {Math.round(load * 100)}%
          </label>
          <input
            id="roi-load"
            type="range"
            min={0.3}
            max={1}
            step={0.05}
            value={load}
            onChange={(e) => setLoad(parseFloat(e.target.value))}
            className="accent-primary w-full"
          />
        </div>

        <div className="border-outline-variant/30 flex items-end justify-between gap-3 border-t pt-2">
          <div className="flex items-center gap-2">
            <TrendingUp size={18} className="text-tertiary-container" aria-hidden />
            <span className="text-on-surface-variant text-xs">{t("monthlyProfit")}</span>
          </div>
          <span className="font-label text-tertiary-container text-2xl font-bold">
            ${monthlyProfit.toLocaleString("en-US")}
          </span>
        </div>

        <p className="text-outline text-[10px] italic">{t("disclaimer")}</p>
      </CardBody>
    </Card>
  );
}
