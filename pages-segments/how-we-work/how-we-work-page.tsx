"use client";

import { useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { Button } from "@shared/ui/button";
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
      <main className="pt-24 pb-24" id="main-content">
        <div className="space-y-3 px-6">
          <Breadcrumb
            items={[{ label: t("nav.home"), href: "/" }, { label: t("howWeWork.title") }]}
          />
          <h1 className="font-headline text-4xl font-extrabold tracking-tight">
            {t("howWeWork.title")}
          </h1>
          <p className="text-on-surface-variant max-w-md leading-relaxed">
            {t("howWeWork.subtitle")}
          </p>
        </div>

        <HowWeWorkNarrative />
        <CommissionDiagram />
        <OwnFactoriesGrid />
        <UzbekistanLogisticsMap />

        <section className="space-y-5 px-6 py-16 text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight">
            {t("howWeWork.finalCtaTitle")}
          </h2>
          <p className="text-on-surface-variant mx-auto max-w-md leading-relaxed">
            {t("howWeWork.finalCtaBody")}
          </p>
          <div className="flex justify-center">
            <Button asChild variant="primary" size="xl">
              <Link href="/kontakt">
                {t("common.freeConsultation")}
                <ArrowRight size={20} aria-hidden />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
