"use client";

import { useLocale, useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { ProductCard } from "@widgets/product-card";
import { ProductFilter } from "@features/product-filter";
import { CompareTray } from "@features/compare";
import { Footer } from "@widgets/footer";
import { getAllProducts } from "@entities/product";
import { getAllCategories } from "@entities/category";
import { Link } from "@shared/i18n/navigation";
import type { Locale } from "@shared/config/locales";

export function CatalogPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const products = getAllProducts();
  const categories = getAllCategories();

  return (
    <>
      <main className="mx-auto max-w-6xl pt-24 pb-32" id="main-content">
        <div className="space-y-3 px-6">
          <Breadcrumb
            items={[{ label: t("nav.home"), href: "/" }, { label: t("catalog.title") }]}
          />
          <h1 className="font-headline text-4xl font-extrabold tracking-tight">
            {t("catalog.title")}
          </h1>
          <p className="text-on-surface-variant max-w-md">{t("catalog.subtitle")}</p>
        </div>

        <section aria-labelledby="catalog-categories" className="px-6 pt-8">
          <h2 id="catalog-categories" className="sr-only">
            Categories
          </h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <li key={category.slug}>
                  <Link
                    href={`/katalog/${category.slug}`}
                    className="bg-surface-container-low hover:bg-primary-container/10 flex h-full flex-col gap-3 rounded-2xl p-4 transition-colors"
                  >
                    <Icon size={28} className="text-primary" aria-hidden />
                    <p className="font-headline text-on-surface text-sm leading-tight font-bold">
                      {category.i18n[locale].name}
                    </p>
                    <span className="font-label text-outline mt-auto text-[10px] tracking-widest uppercase">
                      {category.productCount} models
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <ProductFilter />

        <section aria-labelledby="catalog-products" className="px-6 pt-4">
          <h2 id="catalog-products" className="sr-only">
            Products
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, idx) => (
              <li key={product.slug}>
                <ProductCard product={product} priority={idx < 3} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <CompareTray />
      <Footer />
    </>
  );
}
