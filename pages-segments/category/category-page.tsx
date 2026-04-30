"use client";

import { useLocale, useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { ProductCard } from "@widgets/product-card";
import { ProductFilter } from "@features/product-filter";
import { CompareTray } from "@features/compare";
import { Footer } from "@widgets/footer";
import { getCategoryBySlug } from "@entities/category";
import { getProductsByCategory } from "@entities/product";
import { notFound } from "next/navigation";
import type { Locale } from "@shared/config/locales";

interface CategoryPageProps {
  categorySlug: string;
}

export function CategoryPage({ categorySlug }: CategoryPageProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const products = getProductsByCategory(categorySlug);

  return (
    <>
      <main className="mx-auto max-w-6xl pt-24 pb-32" id="main-content">
        <div className="space-y-3 px-6">
          <Breadcrumb
            items={[
              { label: t("nav.home"), href: "/" },
              { label: t("catalog.title"), href: "/katalog" },
              { label: category.i18n[locale].name },
            ]}
          />
          <h1 className="font-headline text-4xl font-extrabold tracking-tight">
            {category.i18n[locale].name}
          </h1>
          <p className="text-on-surface-variant max-w-md">{category.i18n[locale].description}</p>
        </div>

        <ProductFilter />

        <section aria-labelledby="cat-products" className="px-6 pt-4">
          <h2 id="cat-products" className="sr-only">
            Products
          </h2>
          {products.length === 0 ? (
            <p className="text-on-surface-variant py-16 text-center">No products yet.</p>
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, idx) => (
                <li key={product.slug}>
                  <ProductCard product={product} priority={idx < 2} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <CompareTray />
      <Footer />
    </>
  );
}
