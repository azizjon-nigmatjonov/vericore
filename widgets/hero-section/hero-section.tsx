"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { Button } from "@shared/ui/button";

export function HeroSection() {
  const t = useTranslations("home");

  return (
    <section className="relative flex min-h-[640px] flex-col justify-end overflow-hidden px-6 pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-concrete-plant.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="from-ink-dark via-ink-dark/60 absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>

      <div className="space-y-6">
        <span className="bg-primary-container/20 border-primary-container/30 inline-flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur-sm">
          <ShieldCheck size={14} className="text-primary-container" aria-hidden />
          <span className="font-label text-primary-container text-[10px] font-bold tracking-widest uppercase">
            {t("heroBadge")}
          </span>
        </span>

        <h1 className="font-headline text-4xl leading-[1.1] font-extrabold tracking-tight text-white md:text-6xl">
          {t("heroTitle")}
        </h1>

        <p className="max-w-md text-base text-slate-200 md:text-lg">{t("heroSubtitle")}</p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="primary" size="xl" block>
            <Link href="/kontakt">
              {t("heroCtaPrimary")}
              <ArrowRight size={20} aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outlineLight" size="xl" block>
            <Link href="/katalog">{t("heroCtaSecondary")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
