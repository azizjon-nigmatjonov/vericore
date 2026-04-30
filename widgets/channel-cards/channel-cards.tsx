"use client";

import { Send, MessageCircle, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { SITE_CONFIG } from "@shared/config/site";

export function ChannelCards() {
  const t = useTranslations("contact");

  const channels = [
    {
      label: t("channelTelegramLabel"),
      hint: t("channelTelegramHint"),
      icon: Send,
      href: SITE_CONFIG.contact.telegramUrl,
      color: "bg-[#229ED9] text-white",
    },
    {
      label: t("channelWhatsappLabel"),
      hint: t("channelWhatsappHint"),
      icon: MessageCircle,
      href: SITE_CONFIG.contact.whatsappUrl,
      color: "bg-[#25D366] text-white",
    },
    {
      label: t("channelPhoneLabel"),
      hint: t("channelPhoneHint"),
      icon: Phone,
      href: `tel:${SITE_CONFIG.contact.phoneDigits}`,
      color: "bg-primary-container text-on-primary-container",
    },
    {
      label: t("channelEmailLabel"),
      hint: t("channelEmailHint"),
      icon: Mail,
      href: `mailto:${SITE_CONFIG.contact.email}`,
      color: "bg-secondary-container text-on-secondary-container",
    },
  ];

  return (
    <section className="grid gap-3 px-6 py-8 sm:grid-cols-2" aria-label="Contact channels">
      {channels.map((channel) => {
        const Icon = channel.icon;
        return (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="bg-surface-container-lowest shadow-soft border-outline-variant/10 flex items-center gap-4 rounded-2xl border p-5 transition-transform hover:scale-[1.01]"
          >
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${channel.color}`}
            >
              <Icon size={22} aria-hidden />
            </span>
            <div>
              <p className="font-headline text-on-surface font-bold">{channel.label}</p>
              <p className="text-on-surface-variant text-xs">{channel.hint}</p>
            </div>
          </a>
        );
      })}
    </section>
  );
}
