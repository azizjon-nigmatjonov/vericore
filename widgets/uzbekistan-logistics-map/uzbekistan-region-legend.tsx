"use client";

import { useLocale } from "next-intl";
import { getAllRegions } from "@entities/region";
import type { Locale } from "@shared/config/locales";

import { UZBEKISTAN_MAP_MARKERS } from "./uzbekistan-map-data";

export function UzbekistanRegionLegend() {
  const locale = useLocale() as Locale;
  const regionsBySlug = new Map(
    getAllRegions().map((region) => [region.slug, region.i18n[locale]]),
  );

  return (
    <>
      {UZBEKISTAN_MAP_MARKERS.map((marker) => {
        const label = regionsBySlug.get(marker.regionSlug) ?? marker.regionSlug;
        return (
          <li
            key={marker.id}
            className="text-on-surface-variant flex items-center gap-2 text-xs leading-snug"
          >
            <span
              className={
                marker.isPrimary
                  ? "bg-primary ring-primary/30 h-2.5 w-2.5 shrink-0 rounded-full ring-2"
                  : "bg-secondary h-2 w-2 shrink-0 rounded-full"
              }
              aria-hidden
            />
            <span className={marker.isPrimary ? "text-on-surface font-semibold" : undefined}>
              {label}
            </span>
          </li>
        );
      })}
    </>
  );
}
