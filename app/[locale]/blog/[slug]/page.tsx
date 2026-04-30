import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@shared/seo/generate-metadata";
import { getAllPosts, getPostBySlug } from "@entities/blog-post";
import { routing } from "@shared/i18n/routing";
import type { Locale } from "@shared/config/locales";
import { BlogPostPageClient } from "./blog-post-page-client";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return routing.locales.flatMap((locale) => posts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const i18n = post.i18n[locale as Locale];
  return buildMetadata({
    title: `${i18n.title} | VeriCore Global`,
    description: i18n.excerpt,
    locale,
    path: `/blog/${slug}`,
    image: post.hero,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  if (!getPostBySlug(slug)) notFound();
  return <BlogPostPageClient slug={slug} />;
}
