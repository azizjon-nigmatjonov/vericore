"use client";

import { photoAt } from "@shared/config/site-photos";
import Image from "next/image";
import { useTranslations } from "next-intl";

const REASONS = [
  {
    image: photoAt(9),
    badge: "China Direct",
    badgeTone: "primary" as const,
    titleKey: "whyUs1Title",
    bodyKey: "whyUs1Body",
    align: "right" as const,
  },
  {
    image: photoAt(10),
    badge: "Turn-Key",
    badgeTone: "secondary" as const,
    titleKey: "whyUs2Title",
    bodyKey: "whyUs2Body",
    align: "left" as const,
  },
  {
    image: photoAt(11),
    badge: "Logistics",
    badgeTone: "primary" as const,
    titleKey: "whyUs3Title",
    bodyKey: "whyUs3Body",
    align: "right" as const,
  },
  {
    image: photoAt(12),
    badge: "Service",
    badgeTone: "secondary" as const,
    titleKey: "whyUs4Title",
    bodyKey: "whyUs4Body",
    align: "left" as const,
  },
];

export function WhyUs() {
  const t = useTranslations("home");

  return (
    <section className="py-16" aria-labelledby="why-us-heading">
      <div className="mb-12 px-6">
        <h2
          id="why-us-heading"
          className="font-headline text-on-surface text-3xl font-extrabold tracking-tight"
        >
          {t("whyUsTitle")}
        </h2>
        <div className="bg-primary-container mt-4 h-1 w-20 rounded-full" />
      </div>
      <div className="space-y-12">
        {REASONS.map((reason) => (
          <article key={reason.titleKey} className="flex flex-col gap-4">
            <div className="relative px-6">
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={reason.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <span
                className={
                  "font-label absolute rounded-xl px-4 py-2 text-sm font-bold shadow-lg " +
                  (reason.align === "right"
                    ? "bg-primary right-4 -bottom-3 text-white"
                    : "bg-secondary-container text-on-secondary-container -top-3 left-4")
                }
              >
                {reason.badge}
              </span>
            </div>
            <div className="px-6">
              <h3 className="font-headline text-on-surface mb-2 text-xl font-bold">
                {t(reason.titleKey)}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">{t(reason.bodyKey)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
