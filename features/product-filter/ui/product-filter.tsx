"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Chip } from "@shared/ui/chip";

const SORT_OPTIONS = [
  { value: "popular", labelKey: "sortPopular" },
  { value: "price-asc", labelKey: "sortPriceAsc" },
  { value: "price-desc", labelKey: "sortPriceDesc" },
  { value: "newest", labelKey: "sortNewest" },
] as const;

interface ProductFilterProps {
  onSortChange?: (value: string) => void;
}

export function ProductFilter({ onSortChange }: ProductFilterProps) {
  const t = useTranslations("catalog");
  const [active, setActive] = useState<string>("popular");

  return (
    <div className="hide-scrollbar flex gap-3 overflow-x-auto px-6 py-3">
      {SORT_OPTIONS.map((option) => (
        <Chip
          key={option.value}
          active={active === option.value}
          onClick={() => {
            setActive(option.value);
            onSortChange?.(option.value);
          }}
        >
          {t(option.labelKey)}
        </Chip>
      ))}
    </div>
  );
}
