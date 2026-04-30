import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { CategoryPage } from "@pages-segments/category";
import { getAllCategories, getCategoryBySlug } from "@entities/category";
import { routing } from "@shared/i18n/routing";
import { buildMetadata } from "@shared/seo/generate-metadata";
import { notFound } from "next/navigation";
import type { Locale } from "@shared/config/locales";

interface PageProps {
  params: Promise<{ locale: string; category: string }>;
}

export function generateStaticParams() {
  const categories = getAllCategories();
  return routing.locales.flatMap((locale) =>
    categories.map((category) => ({ locale, category: category.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  const i18n = category.i18n[locale as Locale];
  return buildMetadata({
    title: `${i18n.name} | VeriCore Global`,
    description: i18n.description,
    locale,
    path: `/katalog/${categorySlug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale, category } = await params;
  setRequestLocale(locale);
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();
  return <CategoryPage categorySlug={category} />;
}
