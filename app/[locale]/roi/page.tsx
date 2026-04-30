import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { buildMetadata } from "@shared/seo/generate-metadata";
import { RoiPageClient } from "./roi-page-client";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "roi" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("subtitle"),
    locale,
    path: "/roi",
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RoiPageClient />;
}
