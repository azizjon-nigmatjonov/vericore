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
    <section className="bg-surface px-6 py-16 lg:py-24" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-7xl lg:px-2 xl:px-0">
        <div className="mb-10 lg:mb-12">
          <h2
            id="categories-heading"
            className="font-headline text-on-surface text-3xl font-extrabold tracking-tight lg:text-4xl xl:text-[2.5rem] xl:leading-tight"
          >
            {t("categoriesTitle")}
          </h2>
          <div className="bg-primary-container mt-4 h-1 w-16 rounded-full lg:mt-5 lg:w-20" />
        </div>
        <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <li key={category.slug}>
                <Link
                  href={`/katalog/${category.slug}`}
                  className="bg-surface-container-low border-outline-variant/8 hover:border-primary-container/25 hover:bg-primary-container/[0.07] group active:bg-primary-container/10 block space-y-3 rounded-2xl border border-transparent p-4 transition-all duration-200 lg:rounded-3xl lg:p-6"
                >
                  <Icon
                    size={32}
                    className="text-primary transition-transform duration-200 group-hover:scale-105 lg:size-9"
                    aria-hidden
                  />
                  <p className="font-headline text-sm leading-snug font-bold lg:text-base">
                    {category.i18n[locale].name}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
