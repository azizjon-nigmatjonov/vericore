"use client";

import { ShieldCheck, Truck, Calculator, Phone, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@shared/ui/button";
import { Link } from "@shared/i18n/navigation";
import { formatPrice } from "@shared/lib/format";
import { SITE_CONFIG } from "@shared/config/site";
import type { ProductCommercial, ProductWarranty } from "@entities/product";

interface PriceCardProps {
  commercial: ProductCommercial;
  warranty: ProductWarranty;
}

export function PriceCard({ commercial, warranty }: PriceCardProps) {
  const t = useTranslations("product");

  return (
    <section className="from-primary to-primary-container -mx-6 bg-gradient-to-br px-6 py-12 text-white">
      <div className="space-y-6">
        <div>
          <span className="font-label text-xs font-bold tracking-widest uppercase opacity-80">
            {t("priceLabel")}
          </span>
          <p className="font-label mt-1 text-5xl font-bold">
            {formatPrice(commercial.priceUsdExw)}
          </p>
          <p className="mt-1 text-sm font-medium opacity-80">{t("paymentTerms")}</p>
        </div>

        <ul className="grid grid-cols-2 gap-3">
          <li className="flex flex-col items-center gap-1.5 rounded-2xl bg-white/15 p-4 text-center backdrop-blur-sm">
            <Truck size={20} aria-hidden />
            <span className="text-xs font-bold opacity-90">{t("deliveryTimeLabel")}</span>
            <strong className="font-headline text-base font-bold">
              {t("deliveryLeadDays", { days: commercial.deliveryWorkingDays })}
            </strong>
          </li>
          <li className="flex flex-col items-center gap-1.5 rounded-2xl bg-white/15 p-4 text-center backdrop-blur-sm">
            <ShieldCheck size={20} aria-hidden />
            <span className="text-xs font-bold opacity-90">{t("warrantyLabel")}</span>
            <strong className="font-headline text-base font-bold">{warranty.months} mo</strong>
          </li>
        </ul>

        <div className="space-y-3">
          <Button asChild variant="primary" size="xl" block>
            <Link href="/kontakt">
              {t("ctaOrder")}
              <ArrowRight size={20} aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outlineLight" size="lg" block>
            <a href={`tel:${SITE_CONFIG.contact.phoneDigits}`}>
              <Phone size={18} aria-hidden />
              {t("ctaQuote")}
            </a>
          </Button>
          <Button asChild variant="ghost" size="md" block className="text-white hover:bg-white/10">
            <Link href="/roi">
              <Calculator size={16} aria-hidden />
              {t("ctaRoi")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
