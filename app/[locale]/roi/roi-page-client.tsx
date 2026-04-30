"use client";

import { useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { RoiCalculatorMini } from "@features/roi-calculator";
import { Footer } from "@widgets/footer";

export function RoiPageClient() {
  const t = useTranslations();

  return (
    <>
      <main className="mx-auto max-w-3xl space-y-8 px-6 pt-24 pb-24" id="main-content">
        <Breadcrumb items={[{ label: t("nav.home"), href: "/" }, { label: t("roi.title") }]} />
        <header className="space-y-3">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight">{t("roi.title")}</h1>
          <p className="text-on-surface-variant max-w-md">{t("roi.subtitle")}</p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          <RoiCalculatorMini productivityM3PerHour={35} />
          <RoiCalculatorMini productivityM3PerHour={50} />
          <RoiCalculatorMini productivityM3PerHour={75} />
          <RoiCalculatorMini productivityM3PerHour={90} />
        </div>
      </main>
      <Footer />
    </>
  );
}
