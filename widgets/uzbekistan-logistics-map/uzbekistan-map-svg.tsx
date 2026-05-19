"use client";

import { useId, useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { getAllRegions } from "@entities/region";
import type { Locale } from "@shared/config/locales";
import { cn } from "@shared/lib/cn";

import {
  UZBEKISTAN_MAP_MARKERS,
  UZBEKISTAN_MAP_VIEWBOX,
  UZBEKISTAN_OUTLINE_PATH,
  type UzbekistanMapMarker,
} from "./uzbekistan-map-data";

type UzbekistanMapSvgProps = {
  className?: string;
  /** Accessible label for the map graphic */
  ariaLabel: string;
};

export function UzbekistanMapSvg({ className, ariaLabel }: UzbekistanMapSvgProps) {
  const locale = useLocale() as Locale;
  const uid = useId().replace(/:/g, "");
  const [activeId, setActiveId] = useState<UzbekistanMapMarker["id"] | null>(null);

  const regionsBySlug = useMemo(() => {
    const map = new Map<string, string>();
    for (const region of getAllRegions()) {
      map.set(region.slug, region.i18n[locale]);
    }
    return map;
  }, [locale]);

  const activeMarker = activeId ? UZBEKISTAN_MAP_MARKERS.find((m) => m.id === activeId) : null;
  const activeLabel = activeMarker
    ? (regionsBySlug.get(activeMarker.regionSlug) ?? activeMarker.id)
    : null;

  return (
    <figure className={cn("relative w-full", className)}>
      <svg
        viewBox={`0 0 ${UZBEKISTAN_MAP_VIEWBOX.width} ${UZBEKISTAN_MAP_VIEWBOX.height}`}
        className="text-primary h-auto max-h-[min(72vh,28rem)] w-full"
        role="img"
        aria-label={ariaLabel}
        onMouseLeave={() => setActiveId(null)}
      >
        <defs>
          <radialGradient id={`${uid}-glow`} cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
          <filter id={`${uid}-shadow`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.25" />
          </filter>
        </defs>

        <rect
          width={UZBEKISTAN_MAP_VIEWBOX.width}
          height={UZBEKISTAN_MAP_VIEWBOX.height}
          fill={`url(#${uid}-glow)`}
          className="text-primary-container"
        />

        <path
          d={UZBEKISTAN_OUTLINE_PATH}
          className="fill-primary/10 stroke-primary/35"
          strokeWidth={2}
          strokeLinejoin="round"
        />

        {UZBEKISTAN_MAP_MARKERS.map((marker) => {
          const label = regionsBySlug.get(marker.regionSlug) ?? marker.id;
          const isActive = activeId === marker.id;
          const isPrimary = marker.isPrimary;
          const radius = isPrimary ? 7 : 5.5;

          return (
            <g
              key={marker.id}
              className="cursor-pointer"
              onMouseEnter={() => setActiveId(marker.id)}
              onFocus={() => setActiveId(marker.id)}
              onBlur={() => setActiveId(null)}
              tabIndex={0}
              role="button"
              aria-label={label}
            >
              {isPrimary ? (
                <circle
                  cx={marker.x}
                  cy={marker.y}
                  r={14}
                  className={cn(
                    "fill-primary/15 transition-opacity duration-200",
                    isActive ? "opacity-100" : "opacity-70",
                  )}
                />
              ) : null}
              <circle
                cx={marker.x}
                cy={marker.y}
                r={isActive ? radius + 1.5 : radius}
                className={cn(
                  "stroke-surface-container-lowest transition-all duration-200",
                  isPrimary ? "fill-primary stroke-[2.5]" : "fill-secondary stroke-[1.75]",
                  isActive && !isPrimary && "fill-primary",
                )}
                filter={`url(#${uid}-shadow)`}
              />
              <circle
                cx={marker.x}
                cy={marker.y}
                r={isPrimary ? 2.8 : 2}
                className="fill-surface-container-lowest pointer-events-none"
              />
              <title>{label}</title>
            </g>
          );
        })}
      </svg>

      <figcaption className="font-label text-on-surface mt-3 min-h-[1.25rem] text-center text-sm font-bold">
        {activeLabel ?? <span className="text-on-surface-variant font-normal">{ariaLabel}</span>}
      </figcaption>
    </figure>
  );
}
