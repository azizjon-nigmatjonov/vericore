"use client";

import { useState } from "react";
import { Send, MessageCircle, Phone, Plus, X } from "lucide-react";
import { SITE_CONFIG } from "@shared/config/site";
import { cn } from "@shared/lib/cn";

export function FloatingContactFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-24 z-30 hidden sm:block md:bottom-6">
      <div className={cn("flex flex-col items-end gap-2 transition-all", open ? "mb-2" : "")}>
        <a
          href={SITE_CONFIG.contact.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "shadow-soft flex h-12 w-12 items-center justify-center rounded-full bg-[#229ED9] text-white transition-all",
            open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-12 opacity-0",
          )}
          aria-label="Telegram"
        >
          <Send size={20} aria-hidden />
        </a>
        <a
          href={SITE_CONFIG.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "shadow-soft flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-all",
            open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-12 opacity-0",
          )}
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} aria-hidden />
        </a>
        <a
          href={`tel:${SITE_CONFIG.contact.phoneDigits}`}
          className={cn(
            "bg-primary text-on-primary shadow-soft flex h-12 w-12 items-center justify-center rounded-full transition-all",
            open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-12 opacity-0",
          )}
          aria-label="Phone"
        >
          <Phone size={20} aria-hidden />
        </a>
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="bg-secondary-container text-on-secondary-container shadow-soft flex h-14 w-14 items-center justify-center rounded-full transition-transform hover:scale-105"
        aria-label="Toggle quick contacts"
      >
        {open ? <X size={22} aria-hidden /> : <Plus size={22} aria-hidden />}
      </button>
    </div>
  );
}
