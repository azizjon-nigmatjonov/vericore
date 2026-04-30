"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { Badge } from "@shared/ui/badge";
import { getPostBySlug } from "@entities/blog-post";
import { Footer } from "@widgets/footer";
import type { Locale } from "@shared/config/locales";

interface BlogPostPageClientProps {
  slug: string;
}

export function BlogPostPageClient({ slug }: BlogPostPageClientProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const i18n = post.i18n[locale];

  return (
    <>
      <main className="mx-auto max-w-3xl space-y-6 px-6 pt-24 pb-24" id="main-content">
        <Breadcrumb
          items={[
            { label: t("nav.home"), href: "/" },
            { label: t("blog.title"), href: "/blog" },
            { label: i18n.title },
          ]}
        />
        <Badge tone="secondary">{t("blog.comingSoon")}</Badge>
        <h1 className="font-headline text-4xl font-extrabold tracking-tight">{i18n.title}</h1>
        <div className="relative aspect-video overflow-hidden rounded-3xl">
          <Image
            src={post.hero}
            alt={i18n.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>
        <p className="text-on-surface-variant text-lg leading-relaxed">{i18n.excerpt}</p>
        <p className="text-on-surface leading-relaxed">{i18n.body}</p>
      </main>
      <Footer />
    </>
  );
}
