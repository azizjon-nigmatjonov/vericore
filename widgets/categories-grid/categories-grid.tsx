"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { getAllCategories } from "@entities/category";
import type { Locale } from "@shared/config/locales";

export function CategoriesGrid() {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;
  const categories = getAllCategories();

  return (
    <section className="bg-surface px-6 py-16" aria-labelledby="categories-heading">
      <div className="mb-8">
        <h2
          id="categories-heading"
          className="font-headline text-on-surface text-3xl font-extrabold tracking-tight"
        >
          {t("categoriesTitle")}
        </h2>
        <div className="bg-primary-container mt-4 h-1 w-20 rounded-full" />
      </div>
      <ul className="grid grid-cols-2 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <li key={category.slug}>
              <Link
                href={`/katalog/${category.slug}`}
                className="bg-surface-container-low hover:bg-primary-container/10 active:bg-primary-container/10 block space-y-3 rounded-2xl p-4 transition-colors"
              >
                <Icon size={32} className="text-primary" aria-hidden />
                <p className="font-headline text-sm font-bold">{category.i18n[locale].name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
