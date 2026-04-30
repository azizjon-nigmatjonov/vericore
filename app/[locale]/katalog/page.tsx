import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { CatalogPage } from "@pages-segments/catalog";
import { buildMetadata } from "@shared/seo/generate-metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "catalog" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "/katalog",
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CatalogPage />;
}
