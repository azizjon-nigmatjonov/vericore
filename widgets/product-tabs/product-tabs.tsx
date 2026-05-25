"use client";

import { useTranslations } from "next-intl";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@shared/ui/tabs";
import type { Product } from "@entities/product";

interface ProductTabsProps {
  product: Product;
  description: string;
}

export function ProductTabs({ product, description }: ProductTabsProps) {
  const t = useTranslations("product");

  return (
    <section className="py-8" aria-labelledby="product-tabs-heading">
      <h2 id="product-tabs-heading" className="sr-only">
        Product details
      </h2>
      <Tabs defaultValue="description" className="space-y-6">
        <TabsList>
          <TabsTrigger value="description">{t("tabs.description")}</TabsTrigger>
          <TabsTrigger value="technical">{t("tabs.technical")}</TabsTrigger>
          <TabsTrigger value="configuration">{t("tabs.configuration")}</TabsTrigger>
          <TabsTrigger value="delivery">{t("tabs.delivery")}</TabsTrigger>
          <TabsTrigger value="warranty">{t("tabs.warranty")}</TabsTrigger>
        </TabsList>

        <TabsContent value="description">
          <p className="text-on-surface-variant leading-relaxed">{description}</p>
        </TabsContent>

        <TabsContent value="technical">
          <dl className="bg-surface-container-lowest space-y-4 rounded-2xl p-6">
            <Row
              label={t("specs.productivity")}
              value={`${product.spec.productivity.value} m³/h`}
            />
            <Row label={t("specs.cycleTime")} value={`${product.spec.cycleTimeSeconds}s`} />
            <Row label={t("specs.power")} value={`${product.spec.powerKw} kW`} />
            <Row label={t("specs.mixer")} value={product.spec.mixerModel} />
            <Row label={t("specs.batcher")} value={product.spec.batcherModel} />
            <Row label={t("specs.compressor")} value={`${product.spec.airCompressorKw} kW`} />
            <Row
              label={t("specs.discharge")}
              value={`${product.spec.dischargeMeters.min}–${product.spec.dischargeMeters.max} m`}
            />
            <Row
              label={t("specs.dimensions")}
              value={`${product.spec.dimensionsMm.l}×${product.spec.dimensionsMm.w}×${product.spec.dimensionsMm.h} mm`}
            />
            <Row
              label={t("specs.weighingAccuracy")}
              value={`H₂O ${product.spec.weighingAccuracy.water}`}
            />
          </dl>
        </TabsContent>

        <TabsContent value="configuration">
          <ul className="space-y-4">
            {product.configuration.length === 0 ? (
              <li className="bg-surface-container-low text-on-surface-variant rounded-2xl p-4 text-sm">
                Detailed configuration available on request.
              </li>
            ) : (
              product.configuration.map((sys) => (
                <li key={sys.systemName} className="bg-surface-container-lowest rounded-2xl p-5">
                  <h3 className="font-headline text-on-surface mb-3 font-bold">{sys.systemName}</h3>
                  <ul className="space-y-1.5 text-sm">
                    {sys.items
                      .filter((item) => item.name !== "Ishlab chiqaruvchi")
                      .map((item, idx) => (
                        <li key={`${sys.systemName}-${idx}`} className="flex justify-between gap-3">
                          <span className="text-on-surface-variant">{item.name}</span>
                          <span className="font-label text-on-surface text-right font-bold">
                            {item.spec ? `${item.spec} · ` : ""}
                            {item.quantity}
                          </span>
                        </li>
                      ))}
                  </ul>
                </li>
              ))
            )}
          </ul>
        </TabsContent>

        <TabsContent value="delivery">
          <dl className="bg-surface-container-lowest space-y-4 rounded-2xl p-6">
            <Row label={t("containerLabel")} value={product.commercial.containerType} />
            <Row
              label={t("deliveryTimeLabel")}
              value={`${product.commercial.deliveryWorkingDays} working days`}
            />
            <Row label={t("validityLabel")} value={`${product.warranty.validityDays} days`} />
          </dl>
        </TabsContent>

        <TabsContent value="warranty">
          <div className="bg-surface-container-lowest space-y-4 rounded-2xl p-6">
            <Row label={t("warrantyLabel")} value={`${product.warranty.months} months`} />
            <p className="text-on-surface-variant text-sm leading-relaxed">{t("installation")}</p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-outline-variant/30 flex items-center justify-between gap-3 border-b pb-3 last:border-0 last:pb-0">
      <dt className="text-on-surface-variant text-sm">{label}</dt>
      <dd className="font-label text-on-surface text-right text-sm font-bold">{value}</dd>
    </div>
  );
}
