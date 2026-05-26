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
      className="border-outline-variant/10 bg-surface-container-lowest shadow-soft group focus-visible:ring-primary relative flex flex-col overflow-hidden rounded-3xl border transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:outline-none"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="from-on-surface/85 via-on-surface/30 absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="bg-on-surface/25 absolute top-3 right-3 flex size-9 items-center justify-center rounded-xl backdrop-blur-sm">
          <Icon size={18} className="text-primary-fixed" aria-hidden />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 pt-10">
          <h3 className="font-headline line-clamp-2 text-lg leading-tight font-extrabold text-white">
            {name}
          </h3>
          {productCount > 0 ? (
            <p className="font-label text-primary-fixed mt-1.5 text-[10px] font-bold tracking-widest uppercase">
              {t("modelsCount", { count: productCount })}
            </p>
          ) : null}
        </div>
      </div>
      {!compact ? (
        <div className="text-primary flex items-center justify-end gap-1 px-4 py-3 text-sm font-semibold">
          <span className="sr-only">{name} — </span>
          {t("viewCategory")}
          <ChevronRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </div>
      ) : null}
    </Link>
  );
}
