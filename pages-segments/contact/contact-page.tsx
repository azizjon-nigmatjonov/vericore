"use client";

import { ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { ChannelCards } from "@widgets/channel-cards";
import { OfficeMap } from "@widgets/office-map";
import { FaqAccordion } from "@widgets/faq-accordion";
import { Footer } from "@widgets/footer";
import { LeadForm } from "@features/lead-form";

export function ContactPage() {
  const t = useTranslations();

  return (
    <>
      <main className="pt-24 pb-24" id="main-content">
        <div className="space-y-3 px-6">
          <Breadcrumb
            items={[{ label: t("nav.home"), href: "/" }, { label: t("contact.title") }]}
          />
          <span className="bg-primary-container/15 text-primary-container inline-flex items-center gap-2 rounded-full px-3 py-1">
            <ShieldCheck size={14} aria-hidden />
            <span className="font-label text-[10px] font-bold tracking-widest uppercase">
              {t("contact.badge")}
            </span>
          </span>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight">
            {t("contact.title")}
          </h1>
          <p className="text-on-surface-variant max-w-md leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <ChannelCards />

        <section className="space-y-4 px-6 py-8">
          <h2 className="font-headline text-xl font-extrabold">{t("contact.formTitle")}</h2>
          <LeadForm />
        </section>

        <OfficeMap />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}
