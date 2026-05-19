"use client";

import { Clock, ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { OFFICE_LOCATION } from "@shared/config/office-location";
import type { Locale } from "@shared/config/locales";
import { SITE_CONFIG } from "@shared/config/site";
import {
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  googleMapsSearchUrl,
} from "@shared/lib/google-maps";
import { Button } from "@shared/ui/button";

export function OfficeMap() {
  const t = useTranslations("contact");
  const locale = useLocale() as Locale;
  const address = OFFICE_LOCATION.address[locale];
  const embedSrc = googleMapsEmbedUrl();
  const mapsUrl = googleMapsSearchUrl();
  const directionsUrl = googleMapsDirectionsUrl();

  return (
    <section className="py-8" aria-labelledby="office-heading">
      <h2
        id="office-heading"
        className="font-headline text-on-surface mb-6 text-2xl font-extrabold"
      >
        {t("officeTitle")}
      </h2>
      <div className="bg-surface-container-low shadow-soft overflow-hidden rounded-3xl">
        <div className="relative aspect-[4/3] min-h-[280px] w-full sm:aspect-[16/10]">
          <iframe
            title={t("mapEmbedTitle")}
            src={embedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="border-outline-variant/15 flex flex-col gap-4 border-t p-5 sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-3">
              <MapPin size={20} className="text-primary mt-0.5 shrink-0" aria-hidden />
              <div>
                <p className="text-on-surface font-headline text-sm font-bold">
                  {t("officeAddressLabel")}
                </p>
                <p className="text-on-surface-variant mt-1 text-sm leading-relaxed">{address}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:shrink-0">
              <Button asChild variant="primary" size="sm" className="gap-2">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} aria-hidden />
                  {t("openInGoogleMaps")}
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation size={16} aria-hidden />
                  {t("getDirections")}
                </a>
              </Button>
            </div>
          </div>

          <ul className="border-outline-variant/10 grid gap-4 border-t pt-4 text-sm sm:grid-cols-3">
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-primary mt-1 shrink-0" aria-hidden />
              <span className="flex flex-col gap-1">
                {SITE_CONFIG.contact.phones.map((p) => (
                  <a
                    key={p.digits}
                    href={`tel:${p.digits}`}
                    className="text-on-surface hover:text-primary"
                  >
                    {p.display}
                  </a>
                ))}
              </span>
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
      </div>
    </section>
  );
}
