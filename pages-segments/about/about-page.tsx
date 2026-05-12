"use client";

import { useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { PageContent } from "@shared/ui/page-content";
import { Footer } from "@widgets/footer";

export function AboutPage() {
  const t = useTranslations("about");
  const tRoot = useTranslations();

  return (
    <>
      <main className="bg-background pt-24 pb-24" id="main-content">
        <PageContent className="max-w-3xl space-y-8">
          <Breadcrumb items={[{ label: tRoot("nav.home"), href: "/" }, { label: t("title") }]} />
          <header className="space-y-4">
            <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight lg:text-5xl">
              {t("title")}
            </h1>
            <div className="bg-primary-container h-1 w-16 rounded-full" aria-hidden />
          </header>
          <p className="text-on-surface-variant text-lg leading-relaxed">{t("intro")}</p>
        </PageContent>
      </main>
      <Footer />
    </>
  );
}
