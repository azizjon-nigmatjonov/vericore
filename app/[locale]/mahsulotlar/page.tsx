import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ProductsPage } from "@pages-segments/products";
import { buildMetadata } from "@shared/seo/generate-metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "/mahsulotlar",
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductsPage />;
}
