"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { Badge } from "@shared/ui/badge";
import { getRecentPosts } from "@entities/blog-post";
import { Footer } from "@widgets/footer";
import type { Locale } from "@shared/config/locales";

export function BlogPageClient() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const posts = getRecentPosts();

  return (
    <>
      <main className="pt-24 pb-24" id="main-content">
        <div className="space-y-3 px-6">
          <Breadcrumb items={[{ label: t("nav.home"), href: "/" }, { label: t("blog.title") }]} />
          <h1 className="font-headline text-4xl font-extrabold tracking-tight">
            {t("blog.title")}
          </h1>
          <Badge tone="secondary">{t("blog.comingSoon")}</Badge>
          <p className="text-on-surface-variant max-w-md">{t("blog.comingSoonBody")}</p>
        </div>

        <ul className="grid grid-cols-1 gap-6 px-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="bg-surface-container-lowest shadow-soft border-outline-variant/10 block overflow-hidden rounded-3xl border transition-transform hover:scale-[1.01]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.hero}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <span className="font-label text-outline text-[10px] font-bold tracking-widest uppercase">
                    {post.category} · {post.readMinutes} min
                  </span>
                  <h3 className="font-headline text-on-surface leading-tight font-bold">
                    {post.i18n[locale].title}
                  </h3>
                  <p className="text-on-surface-variant line-clamp-2 text-sm">
                    {post.i18n[locale].excerpt}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
