"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Gauge, Zap } from "lucide-react";
import { Link } from "@shared/i18n/navigation";
import { Button } from "@shared/ui/button";
import { Badge } from "@shared/ui/badge";
import { getFeaturedProducts } from "@entities/product";
import { formatPrice } from "@shared/lib/format";
import type { Locale } from "@shared/config/locales";

export function FeaturedProductsCarousel() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const products = getFeaturedProducts(3);

  return (
    <section className="bg-surface-container-low px-6 py-16" aria-labelledby="featured-heading">
      <h2
        id="featured-heading"
        className="font-headline text-on-surface mb-8 text-2xl font-extrabold"
      >
        {t("home.featuredTitle")}
      </h2>
      <ul className="hide-scrollbar -mx-6 flex snap-x gap-6 overflow-x-auto px-6 pb-4">
        {products.map((product, idx) => (
          <li
            key={product.slug}
            className="bg-surface-container-lowest shadow-soft min-w-[85vw] snap-center overflow-hidden rounded-3xl sm:min-w-[400px]"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={product.images[0] ?? ""}
                alt={product.i18n[locale].name}
                fill
                sizes="(max-width: 640px) 85vw, 400px"
                className="object-cover"
                priority={idx === 0}
              />
              {product.isPopular ? (
                <div className="absolute top-4 right-4">
                  <Badge tone="tertiary">TOP</Badge>
                </div>
              ) : null}
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-headline text-xl leading-tight font-bold">
                  {product.i18n[locale].shortName}
                </h3>
                <p className="text-secondary font-label text-lg font-bold">
                  {formatPrice(product.commercial.priceUsdExw)}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-surface-container-low flex items-center gap-2 rounded-lg px-3 py-1.5">
                  <Gauge size={16} className="text-primary" aria-hidden />
                  <span className="font-label text-xs font-bold">
                    {product.spec.productivity.value} m³/h
                  </span>
                </li>
                <li className="bg-surface-container-low flex items-center gap-2 rounded-lg px-3 py-1.5">
                  <Zap size={16} className="text-primary" aria-hidden />
                  <span className="font-label text-xs font-bold">{product.spec.powerKw} kW</span>
                </li>
              </ul>
              <Button asChild variant="accent" block>
                <Link href={`/mahsulot/${product.slug}`}>
                  {t("common.more")}
                  <ArrowRight size={18} aria-hidden />
                </Link>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
