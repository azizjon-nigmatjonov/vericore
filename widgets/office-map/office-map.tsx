"use client";

import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { SITE_CONFIG } from "@shared/config/site";

export function OfficeMap() {
  const t = useTranslations("contact");

  return (
    <section className="py-8" aria-labelledby="office-heading">
      <h2
        id="office-heading"
        className="font-headline text-on-surface mb-6 text-2xl font-extrabold"
      >
        {t("officeTitle")}
      </h2>
      <div className="bg-surface-container-low shadow-soft overflow-hidden rounded-3xl">
        <div className="from-primary-container/30 to-secondary-container/30 relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br">
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,191,212,0.15)_0%,transparent_70%)]" />
          <MapPin size={48} className="text-primary relative z-10" aria-hidden />
          <span className="absolute right-4 bottom-4 left-4 rounded-xl bg-white/90 p-3 text-xs backdrop-blur">
            <strong className="text-on-surface font-headline block font-bold">
              {SITE_CONFIG.contact.workingHours}
            </strong>
            <span className="text-on-surface-variant">
              {SITE_CONFIG.address.locality}, {SITE_CONFIG.address.addressLine}
            </span>
          </span>
        </div>
        <ul className="grid gap-4 p-6 text-sm sm:grid-cols-3">
          <li className="flex items-start gap-3">
            <Phone size={16} className="text-primary mt-1" aria-hidden />
            <a
              href={`tel:${SITE_CONFIG.contact.phoneDigits}`}
              className="text-on-surface hover:text-primary"
            >
              {SITE_CONFIG.contact.phone}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Mail size={16} className="text-primary mt-1" aria-hidden />
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="text-on-surface hover:text-primary"
            >
              {SITE_CONFIG.contact.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Clock size={16} className="text-primary mt-1" aria-hidden />
            <span className="text-on-surface-variant">{SITE_CONFIG.contact.workingHours}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
