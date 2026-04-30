"use client";

import { Truck, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function UzbekistanLogisticsMap() {
  const t = useTranslations("howWeWork");

  return (
    <section className="bg-surface-container-low px-6 py-16" aria-labelledby="logistics-heading">
      <header className="mb-8 space-y-2 text-center">
        <Truck size={32} className="text-primary mx-auto" aria-hidden />
        <h2 id="logistics-heading" className="font-headline text-3xl font-extrabold tracking-tight">
          {t("logisticsTitle")}
        </h2>
        <p className="text-on-surface-variant mx-auto max-w-md leading-relaxed">
          {t("logisticsBody")}
        </p>
      </header>
      <div className="bg-surface-container-lowest shadow-soft relative overflow-hidden rounded-3xl p-8">
        <div className="from-primary-container/20 to-secondary-container/20 relative aspect-[5/3] rounded-2xl bg-gradient-to-br">
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,191,212,0.2),transparent_60%)]" />
          {[20, 35, 50, 65, 80].map((left, idx) => (
            <span
              key={idx}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${30 + (idx % 3) * 18}%` }}
            >
              <MapPin
                size={idx === 2 ? 28 : 18}
                className={idx === 2 ? "text-primary" : "text-secondary"}
                strokeWidth={2.5}
                aria-hidden
              />
            </span>
          ))}
        </div>
        <p className="font-label text-on-surface-variant mt-6 text-center text-sm font-bold tracking-widest uppercase">
          {t("logisticsCoverage")}
        </p>
      </div>
    </section>
  );
}
