"use client";

import { useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { Button } from "@shared/ui/button";
import { PageContent } from "@shared/ui/page-content";
import { Link } from "@shared/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { HowWeWorkNarrative } from "@widgets/how-we-work-narrative";
import { CommissionDiagram } from "@widgets/commission-diagram";
import { OwnFactoriesGrid } from "@widgets/own-factories-grid";
import { UzbekistanLogisticsMap } from "@widgets/uzbekistan-logistics-map";
import { Footer } from "@widgets/footer";

export function HowWeWorkPage() {
  const t = useTranslations();

  return (
    <>
      <main className="bg-background pt-24 pb-24" id="main-content">
        <PageContent className="space-y-4 pb-10 lg:pb-14">
          <Breadcrumb
            items={[{ label: t("nav.home"), href: "/" }, { label: t("howWeWork.title") }]}
          />
          <header className="max-w-2xl space-y-3">
            <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight lg:text-5xl">
              {t("howWeWork.title")}
            </h1>
            <div className="bg-primary-container h-1 w-16 rounded-full lg:w-20" aria-hidden />
            <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
              {t("howWeWork.subtitle")}
            </p>
          </header>
        </PageContent>

        <HowWeWorkNarrative />
        <CommissionDiagram />
        <OwnFactoriesGrid />
        <UzbekistanLogisticsMap />

        <PageContent className="py-16 text-center lg:py-20">
          <section className="space-y-5">
            <h2 className="font-headline text-on-surface text-3xl font-extrabold tracking-tight lg:text-4xl">
              {t("howWeWork.finalCtaTitle")}
            </h2>
            <p className="text-on-surface-variant mx-auto max-w-lg leading-relaxed lg:text-lg">
              {t("howWeWork.finalCtaBody")}
            </p>
            <div className="flex justify-center pt-2">
              <Button asChild variant="primary" size="xl">
                <Link href="/kontakt">
                  {t("common.freeConsultation")}
                  <ArrowRight size={20} aria-hidden />
                </Link>
              </Button>
            </div>
          </section>
        </PageContent>
      </main>
      <Footer />
    </>
  );
}
