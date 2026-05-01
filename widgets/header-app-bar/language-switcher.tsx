"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@shared/i18n/navigation";
import { LOCALES, LOCALE_SHORT, type Locale } from "@shared/config/locales";
import { useTransition } from "react";
import { cn } from "@shared/lib/cn";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        "text-on-surface-variant flex items-center gap-1 text-xs font-bold",
        "rounded-full border border-transparent px-1 py-0.5",
        "md:border-outline-variant/15 md:bg-surface-container-low/60 md:px-3 md:py-1.5 md:backdrop-blur-sm",
      )}
      role="group"
      aria-label="Language"
    >
      <Globe size={16} className="text-outline mr-0.5 shrink-0 md:mr-0" aria-hidden />
      {LOCALES.map((l, idx) => (
        <span key={l} className="flex items-center">
          <button
            type="button"
            disabled={isPending}
            onClick={() => {
              startTransition(() => {
                router.replace(pathname, { locale: l });
              });
            }}
            className={cn(
              "rounded-md px-1.5 py-0.5 transition-colors md:px-2",
              l === locale
                ? "text-primary-container font-extrabold"
                : "text-on-surface-variant hover:text-primary md:hover:bg-on-surface/[0.05]",
            )}
            aria-current={l === locale ? "true" : undefined}
          >
            {LOCALE_SHORT[l]}
          </button>
          {idx < LOCALES.length - 1 ? (
            <span className="text-outline-variant mx-0.5 md:mx-1">/</span>
          ) : null}
        </span>
      ))}
    </div>
  );
}
