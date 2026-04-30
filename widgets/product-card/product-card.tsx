"use client";

import Image from "next/image";
import { Gauge, Zap, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { Button } from "@shared/ui/button";
import { StatusBadge } from "@shared/ui/status-badge";
import { formatPrice } from "@shared/lib/format";
import type { Product } from "@entities/product";
import type { Locale } from "@shared/config/locales";
import { CompareToggleButton } from "./compare-toggle-button";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "row";
  priority?: boolean;
}

export function ProductCard({ product, variant = "grid", priority = false }: ProductCardProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const i18n = product.i18n[locale];

  return (
    <article className="bg-surface-container-lowest shadow-soft border-outline-variant/10 flex flex-col gap-4 rounded-3xl border p-4">
      <Link href={`/mahsulot/${product.slug}`} className="group block">
        <div className="relative h-44 overflow-hidden rounded-2xl">
          <Image
            src={product.images[0] ?? ""}
            alt={i18n.name}
            fill
            sizes={variant === "row" ? "100vw" : "(max-width: 768px) 50vw, 33vw"}
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <StatusBadge
              status={product.status}
              inStockLabel={t("catalog.inStock")}
              preorderLabel={t("catalog.preorder")}
            />
          </div>
          <CompareToggleButton productSlug={product.slug} />
        </div>
      </Link>

      <div className="space-y-1">
        <span className="font-label text-outline text-[10px] font-bold tracking-wider uppercase">
          {product.modelCode}
        </span>
        <h3 className="font-headline text-on-surface text-lg leading-tight font-extrabold">
          {i18n.name}
        </h3>
      </div>

      <ul className="grid grid-cols-2 gap-2 text-xs">
        <li className="bg-surface-container-low flex items-center gap-2 rounded-xl p-2">
          <Gauge size={16} className="text-primary" aria-hidden />
          <span className="font-label font-bold">{product.spec.productivity.value} m³/h</span>
        </li>
        <li className="bg-surface-container-low flex items-center gap-2 rounded-xl p-2">
          <Zap size={16} className="text-primary" aria-hidden />
          <span className="font-label font-bold">{product.spec.powerKw} kW</span>
        </li>
      </ul>

      <div className="flex items-end justify-between gap-3 pt-2">
        <div>
          <span className="font-label text-outline block text-[10px] tracking-wider uppercase">
            {t("catalog.basePrice")}
          </span>
          <span className="font-label text-secondary text-2xl font-bold">
            {formatPrice(product.commercial.priceUsdExw)}
          </span>
        </div>
        <Button asChild variant="accent" size="sm">
          <Link href={`/mahsulot/${product.slug}`}>
            {t("common.more")}
            <ChevronRight size={16} aria-hidden />
          </Link>
        </Button>
      </div>
    </article>
  );
}
