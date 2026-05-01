"use client";

import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { SITE_CONFIG } from "@shared/config/site";

export function ChannelCards() {
  const t = useTranslations("contact");

  const channels = [
    {
      label: t("channelTelegramLabel"),
      value: `@${SITE_CONFIG.contact.telegram}`,
      icon: Send,
      iconWell: "bg-sky-100 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400",
      href: SITE_CONFIG.contact.telegramUrl,
    },
    {
      label: t("channelWhatsappLabel"),
      value: SITE_CONFIG.contact.phone,
      icon: MessageCircle,
      iconWell: "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",
      href: SITE_CONFIG.contact.whatsappUrl,
    },
    {
      label: t("channelPhoneLabel"),
      value: SITE_CONFIG.contact.phone,
      icon: Phone,
      iconWell:
        "bg-primary-container/25 text-primary dark:bg-cyan-950/40 dark:text-primary-container",
      href: `tel:${SITE_CONFIG.contact.phoneDigits}`,
    },
    {
      label: t("channelEmailLabel"),
      value: SITE_CONFIG.contact.email,
      icon: Mail,
      iconWell: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
      href: `mailto:${SITE_CONFIG.contact.email}`,
    },
  ];

  return (
    <section
      className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4"
      aria-label="Contact channels"
    >
      {channels.map((channel) => {
        const Icon = channel.icon;
        return (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="border-outline-variant/10 bg-surface-container-lowest hover:border-outline-variant/20 flex flex-col gap-4 rounded-xl border p-5 shadow-[0_12px_32px_rgba(10,18,32,0.04)] transition-transform active:scale-[0.99] lg:rounded-2xl lg:p-6"
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg lg:h-11 lg:w-11 lg:rounded-xl ${channel.iconWell}`}
            >
              <Icon size={22} aria-hidden className="shrink-0" />
            </span>
            <div className="space-y-1">
              <p className="font-label text-outline text-[11px] tracking-wider uppercase lg:text-xs">
                {channel.label}
              </p>
              <p className="font-headline text-on-surface text-sm leading-snug font-bold">
                {channel.value}
              </p>
            </div>
          </a>
        );
      })}
    </section>
  );
}
