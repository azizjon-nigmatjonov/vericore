"use client";

import { useLocale, useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { PageContent } from "@shared/ui/page-content";
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
      <main className="bg-background pt-24 pb-32" id="main-content">
        <PageContent className="space-y-3 pb-8 lg:pb-10">
          <Breadcrumb
            items={[
              { label: t("nav.home"), href: "/" },
              { label: t("catalog.title"), href: "/katalog" },
              { label: category.i18n[locale].name },
            ]}
          />
          <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight lg:text-5xl">
            {category.i18n[locale].name}
          </h1>
          <div className="bg-primary-container h-1 w-16 rounded-full lg:w-20" aria-hidden />
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
            {category.i18n[locale].description}
          </p>
        </PageContent>

        <PageContent className="py-2">
          <ProductFilter />
        </PageContent>

        <PageContent className="pt-4">
          <section aria-labelledby="cat-products">
            <h2 id="cat-products" className="sr-only">
              Products
            </h2>
            {products.length === 0 ? (
              <p className="text-on-surface-variant py-16 text-center">No products yet.</p>
            ) : (
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {products.map((product, idx) => (
                  <li key={product.slug}>
                    <ProductCard product={product} priority={idx < 2} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        </PageContent>
      </main>
      <CompareTray />
      <Footer />
    </>
  );
}
