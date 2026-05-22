"use client";

import Image from "next/image";
import { Gauge, Zap, ChevronRight, LayoutGrid, MessageCircle, Info } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { Button } from "@shared/ui/button";
import { StatusBadge } from "@shared/ui/status-badge";
import type { Product } from "@entities/product";
import type { Locale } from "@shared/config/locales";
import { CompareToggleButton } from "./compare-toggle-button";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "row";
  priority?: boolean;
  categorySlug?: string;
  categoryName?: string;
}

export function ProductCard({
  product,
  variant = "grid",
  priority = false,
  categorySlug,
}: ProductCardProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const i18n = product.i18n[locale];

  const hasProductivity = product.spec.productivity.value > 0;
  const hasPower = product.spec.powerKw > 0;
  const useRealSpecs = hasProductivity || hasPower;

  // When real specs are zero, pull first 2 meaningful items from configuration
  const configItems = !useRealSpecs ? (product.configuration[0]?.items ?? []).slice(0, 2) : [];

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

      {useRealSpecs ? (
        <ul className="grid grid-cols-2 gap-2 text-xs">
          {hasProductivity ? (
            <li className="bg-surface-container-low flex items-center gap-2 rounded-xl p-2">
              <Gauge size={16} className="text-primary" aria-hidden />
              <span className="font-label font-bold">
                {product.spec.productivity.value} {product.spec.productivity.unit}
              </span>
            </li>
          ) : null}
          {hasPower ? (
            <li className="bg-surface-container-low flex items-center gap-2 rounded-xl p-2">
              <Zap size={16} className="text-primary" aria-hidden />
              <span className="font-label font-bold">{product.spec.powerKw} kW</span>
            </li>
          ) : null}
        </ul>
      ) : configItems.length > 0 ? (
        <ul className="flex flex-col gap-1.5 text-xs">
          {configItems.map((item, idx) => (
            <li
              key={idx}
              className="bg-surface-container-low flex items-start gap-2 rounded-xl p-2"
            >
              <Info size={14} className="text-primary mt-px shrink-0" aria-hidden />
              <span className="font-label min-w-0">
                <span className="text-outline">{item.name}:</span>{" "}
                <span className="font-bold">{item.spec ?? item.quantity ?? "—"}</span>
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="flex flex-col gap-3 pt-2">
        <Link
          href="/kontakt"
          className="text-primary hover:text-primary/80 font-label flex items-center gap-1.5 text-sm font-semibold transition-colors"
        >
          <MessageCircle size={15} aria-hidden />
          {t("products.contactForPrice")}
        </Link>

        <div className="flex items-center gap-2">
          {categorySlug ? (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={`/katalog/${categorySlug}`}>
                <LayoutGrid size={14} aria-hidden />
                {t("products.viewCategory")}
              </Link>
            </Button>
          ) : null}
          <Button asChild variant="accent" size="sm" className={categorySlug ? "" : "flex-1"}>
            <Link href={`/mahsulot/${product.slug}`}>
              {t("common.more")}
              <ChevronRight size={16} aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
