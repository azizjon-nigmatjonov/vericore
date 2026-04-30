"use client";

import { Menu, X } from "lucide-react";
import { Link } from "@shared/i18n/navigation";
import { useTranslations } from "next-intl";
import { PRIMARY_NAV } from "@shared/config/nav";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@shared/ui/dialog";
import { cn } from "@shared/lib/cn";
import { LanguageSwitcher } from "./language-switcher";

export function HeaderAppBar() {
  const t = useTranslations();

  return (
    <header
      role="banner"
      className="glass-nav fixed top-0 right-0 left-0 z-50 bg-white/70 shadow-sm dark:bg-slate-900/70 dark:shadow-none"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                aria-label={t("common.menu")}
                className="text-on-surface hover:text-primary focus-visible:ring-primary-container -m-1 rounded-lg p-1 transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                <Menu size={24} aria-hidden />
              </button>
            </DialogTrigger>
            <DialogContent
              hideClose
              className={cn(
                "border-outline-variant/20 fixed top-0 left-0 z-50 flex h-full max-h-none w-[min(100%,20rem)] max-w-[85vw] translate-x-0 translate-y-0 flex-col gap-0 rounded-none rounded-br-3xl border-r p-0 pt-14 pb-8 shadow-xl",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-4 data-[state=open]:slide-in-from-left-4",
              )}
            >
              <DialogClose className="text-outline hover:bg-surface-container-high hover:text-on-surface absolute top-4 right-4 rounded-lg p-2 transition-colors">
                <X size={22} aria-hidden />
                <span className="sr-only">{t("common.close")}</span>
              </DialogClose>
              <DialogTitle className="sr-only">{t("common.menu")}</DialogTitle>
              <DialogDescription className="sr-only">
                {t("nav.home")}, {t("nav.catalog")}, {t("nav.contact")}
              </DialogDescription>
              <nav className="flex flex-col px-4" aria-label={t("common.menu")}>
                <ul className="flex flex-col gap-1">
                  {PRIMARY_NAV.map((item) => (
                    <li key={item.href}>
                      <DialogClose asChild>
                        <Link
                          href={item.href}
                          className="font-headline text-on-surface hover:bg-primary-container/15 hover:text-primary-container block rounded-xl px-4 py-3 text-base font-bold transition-colors"
                        >
                          {t(item.labelKey)}
                        </Link>
                      </DialogClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="border-outline-variant/20 mt-auto border-t px-6 pt-6">
                <p className="font-label text-outline mb-2 text-xs tracking-widest uppercase">
                  {t("nav.language")}
                </p>
                <LanguageSwitcher />
              </div>
            </DialogContent>
          </Dialog>
          <Link
            href="/"
            className="text-primary-container font-headline text-2xl font-extrabold tracking-tight"
          >
            {t("common.brand")}
          </Link>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
