"use client";

import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { Badge } from "@shared/ui/badge";
import { ProductGallery } from "@widgets/product-gallery";
import { QuickSpecsGrid } from "@widgets/quick-specs-grid";
import { PriceCard } from "@widgets/price-card";
import { ProductTabs } from "@widgets/product-tabs";
import { TrustBlock } from "@widgets/trust-block";
import { FaqAccordion } from "@widgets/faq-accordion";
import { OrderTrackingTimeline } from "@widgets/order-tracking-timeline";
import { Footer } from "@widgets/footer";
import { LeadForm } from "@features/lead-form";
import { RoiCalculatorMini } from "@features/roi-calculator";
import { getProductBySlug, getRelatedProducts } from "@entities/product";
import { getCategoryBySlug } from "@entities/category";
import { ProductCard } from "@widgets/product-card";
import type { Locale } from "@shared/config/locales";

interface ProductDetailPageProps {
  slug: string;
}

export function ProductDetailPage({ slug }: ProductDetailPageProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(slug, 2);
  const i18n = product.i18n[locale];

  return (
    <>
      <ProductGallery
        images={product.images}
        alt={i18n.name}
        status={product.status}
        inStockLabel={t("catalog.inStock")}
        preorderLabel={t("catalog.preorder")}
      />

      <main className="pt-6 pb-24" id="main-content">
        <div className="space-y-2 px-6">
          <Breadcrumb
            items={[
              { label: t("nav.home"), href: "/" },
              { label: t("catalog.title"), href: "/katalog" },
              ...(category
                ? [{ label: category.i18n[locale].name, href: `/katalog/${category.slug}` }]
                : []),
              { label: product.modelCode },
            ]}
          />
          <span className="font-label text-primary text-xs font-bold tracking-widest uppercase">
            {product.modelCode}
          </span>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight">{i18n.name}</h1>
          <p className="text-on-surface-variant max-w-prose">{i18n.tagline}</p>
        </div>

        <div className="px-6">
          <QuickSpecsGrid spec={product.spec} />
        </div>

        <PriceCard commercial={product.commercial} warranty={product.warranty} />

        <div className="px-6">
          <ProductTabs product={product} description={i18n.description} />
        </div>

        <TrustBlock />

        <section className="space-y-4 px-6 py-12">
          <h2 className="font-headline text-xl font-extrabold">{t("product.timelineTitle")}</h2>
          <OrderTrackingTimeline currentStep={3} variant="vertical" />
        </section>

        <section className="px-6 py-8">
          <RoiCalculatorMini productivityM3PerHour={product.spec.productivity.value} />
        </section>

        <FaqAccordion limit={4} />

        {related.length > 0 ? (
          <section className="space-y-4 px-6 py-12">
            <h2 className="font-headline text-xl font-extrabold">{t("product.compareTitle")}</h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <li key={p.slug}>
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="space-y-3 px-6 py-8">
          <header>
            <Badge tone="primary">{t("product.bottomFormTitle")}</Badge>
            <p className="text-on-surface-variant mt-2 text-sm">
              {t("product.bottomFormSubtitle")}
            </p>
          </header>
          <LeadForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
