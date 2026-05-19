"use client";

import { useLocale, useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { PageContent } from "@shared/ui/page-content";
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
      <main className="bg-background pt-24 pb-32" id="main-content">
        <PageContent className="space-y-3 pb-8 lg:pb-10">
          <Breadcrumb
            items={[{ label: t("nav.home"), href: "/" }, { label: t("catalog.title") }]}
          />
          <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t("catalog.title")}
          </h1>
          <div className="bg-primary-container h-1 w-16 rounded-full lg:w-20" aria-hidden />
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
            {t("catalog.subtitle")}
          </p>
        </PageContent>

        <PageContent className="pb-8">
          <section aria-labelledby="catalog-categories">
            <h2 id="catalog-categories" className="sr-only">
              Categories
            </h2>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <li key={category.slug}>
                    <Link
                      href={`/katalog/${category.slug}`}
                      className="border-outline-variant/8 bg-surface-container-low hover:border-primary-container/20 hover:bg-primary-container/[0.06] flex h-full flex-col gap-3 rounded-2xl border border-transparent p-4 transition-all lg:rounded-3xl lg:p-5"
                    >
                      <Icon size={28} className="text-primary lg:size-8" aria-hidden />
                      <p className="font-headline text-on-surface text-sm leading-tight font-bold lg:text-base">
                        {category.i18n[locale].name}
                      </p>
                      <span className="font-label text-outline mt-auto text-[10px] tracking-widest uppercase">
                        {t("catalog.modelsCount", { count: category.productCount })}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </PageContent>

        <PageContent className="py-2">
          <ProductFilter />
        </PageContent>

        <PageContent className="pt-4">
          <section aria-labelledby="catalog-products">
            <h2 id="catalog-products" className="sr-only">
              Products
            </h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {products.map((product, idx) => (
                <li key={product.slug}>
                  <ProductCard product={product} priority={idx < 3} />
                </li>
              ))}
            </ul>
          </section>
        </PageContent>
      </main>
      <CompareTray />
      <Footer />
    </>
  );
}
