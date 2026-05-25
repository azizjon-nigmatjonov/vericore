"use client";

import { useCallback, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { SearchX } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { PageContent } from "@shared/ui/page-content";
import { ProductCard } from "@widgets/product-card";
import {
  ProductFilter,
  filterProductsByQuery,
  sortProducts,
  type ProductSortValue,
} from "@features/product-filter";
import { ProductSearchInput } from "@features/product-search";
import { CompareTray } from "@features/compare";
import { Footer } from "@widgets/footer";
import { getCategoryBySlug } from "@entities/category";
import { getProductsByCategory } from "@entities/product";
import type { Locale } from "@shared/config/locales";

interface CategoryPageProps {
  categorySlug: string;
}

export function CategoryPage({ categorySlug }: CategoryPageProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const categoryProducts = useMemo(() => getProductsByCategory(categorySlug), [categorySlug]);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<ProductSortValue>("popular");
  const handleQueryChange = useCallback((q: string) => setQuery(q), []);

  const products = useMemo(() => {
    const filtered = filterProductsByQuery(categoryProducts, query, locale);
    return sortProducts(filtered, sort);
  }, [categoryProducts, query, sort, locale]);

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

        <PageContent className="pb-2">
          <ProductSearchInput products={categoryProducts} onQueryChange={handleQueryChange} />
        </PageContent>

        <PageContent className="py-2">
          <ProductFilter active={sort} onSortChange={setSort} />
        </PageContent>

        <PageContent className="pt-4">
          <section aria-labelledby="cat-products">
            <h2 id="cat-products" className="sr-only">
              {category.i18n[locale].name}
            </h2>

            {products.length > 0 ? (
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {products.map((product, idx) => (
                  <li key={product.slug}>
                    <ProductCard product={product} priority={idx < 3} />
                  </li>
                ))}
              </ul>
            ) : categoryProducts.length === 0 ? (
              <p className="text-on-surface-variant py-16 text-center">{t("catalog.noProducts")}</p>
            ) : (
              <div className="flex flex-col items-center gap-4 py-20 text-center">
                <SearchX size={48} className="text-outline/40" aria-hidden />
                <p className="font-headline text-on-surface text-xl font-bold">
                  {t("products.noResults")}
                </p>
                {query ? <p className="text-outline text-sm">&ldquo;{query}&rdquo;</p> : null}
              </div>
            )}
          </section>
        </PageContent>
      </main>
      <CompareTray />
      <Footer />
    </>
  );
}
