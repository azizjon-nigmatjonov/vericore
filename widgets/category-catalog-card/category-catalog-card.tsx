"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { getCategoryImage } from "@shared/mock-data/categories";
import type { Category } from "@entities/category";
import type { Locale } from "@shared/config/locales";

interface CategoryCatalogCardProps {
  category: Category;
  priority?: boolean;
  /** Live product count (e.g. on home); falls back to category.productCount */
  productCount?: number;
  /** Hide footer CTA row (compact layout for home) */
  compact?: boolean;
}

export function CategoryCatalogCard({
  category,
  priority = false,
  productCount: productCountProp,
  compact = false,
}: CategoryCatalogCardProps) {
  const t = useTranslations("catalog");
  const locale = useLocale() as Locale;
  const name = category.i18n[locale].name;
  const imageSrc = getCategoryImage(category.imageKey);
  const Icon = category.icon as LucideIcon;
  const productCount = productCountProp ?? category.productCount;

  return (
    <Link
      href={`/katalog/${category.slug}`}
      className="border-outline-variant/10 bg-surface-container-lowest shadow-soft group focus-visible:ring-primary relative flex flex-col overflow-hidden rounded-2xl border transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:outline-none sm:rounded-3xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          unoptimized
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="from-on-surface/85 via-on-surface/30 absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="bg-on-surface/25 absolute top-2 right-2 flex size-7 items-center justify-center rounded-lg backdrop-blur-sm sm:top-3 sm:right-3 sm:size-9 sm:rounded-xl">
          <Icon size={14} className="text-primary-fixed sm:hidden" aria-hidden />
          <Icon size={18} className="text-primary-fixed hidden sm:block" aria-hidden />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-2.5 pt-7 sm:p-4 sm:pt-10">
          <h3 className="font-headline line-clamp-2 text-xs leading-snug font-extrabold text-white sm:text-lg sm:leading-tight">
            {name}
          </h3>
          {productCount > 0 ? (
            <p className="font-label text-primary-fixed mt-1 text-[8px] font-bold tracking-wide uppercase sm:mt-1.5 sm:text-[10px] sm:tracking-widest">
              {t("modelsCount", { count: productCount })}
            </p>
          ) : null}
        </div>
      </div>
      {!compact ? (
        <div className="text-primary flex items-center justify-end gap-0.5 px-2.5 py-2 text-[11px] font-semibold sm:gap-1 sm:px-4 sm:py-3 sm:text-sm">
          <span className="sr-only">{name} — </span>
          <span className="truncate">{t("viewCategory")}</span>
          <ChevronRight
            size={14}
            className="shrink-0 transition-transform group-hover:translate-x-0.5 sm:size-4"
            aria-hidden
          />
        </div>
      ) : null}
    </Link>
  );
}
