"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@shared/i18n/navigation";
import { LOCALES, LOCALE_SHORT, type Locale } from "@shared/config/locales";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className="text-on-surface-variant flex items-center gap-1 text-xs font-bold"
      role="group"
      aria-label="Language"
    >
      <Globe size={16} className="text-outline mr-1" aria-hidden />
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
            className={
              l === locale
                ? "text-primary-container font-extrabold"
                : "text-on-surface-variant hover:text-primary transition-colors"
            }
            aria-current={l === locale ? "true" : undefined}
          >
            {LOCALE_SHORT[l]}
          </button>
          {idx < LOCALES.length - 1 ? <span className="text-outline-variant mx-1">/</span> : null}
        </span>
      ))}
    </div>
  );
}
