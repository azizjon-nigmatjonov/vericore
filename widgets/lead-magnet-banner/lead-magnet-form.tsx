"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@shared/ui/button";
import { toast } from "@shared/ui/toast";
import { sleep } from "@shared/lib/sleep";

export function LeadMagnetForm() {
  const t = useTranslations();
  const [pending, setPending] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || phone.replace(/\D/g, "").length < 9) {
      toast({
        title: t("errors.validation.nameRequired"),
        variant: "error",
      });
      return;
    }
    setPending(true);
    await sleep(800);
    setPending(false);
    setName("");
    setPhone("+998 ");
    toast({ title: t("contact.formSuccess"), variant: "success" });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("contact.formNameLabel")}
        className="focus:ring-primary-container h-14 w-full rounded-xl border-none bg-white/5 px-4 text-white placeholder:text-white/40 focus:ring-2 focus:outline-none"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+998 91 777 77 60"
        className="focus:ring-primary-container h-14 w-full rounded-xl border-none bg-white/5 px-4 text-white placeholder:text-white/40 focus:ring-2 focus:outline-none"
      />
      <Button type="submit" variant="primary" size="xl" block disabled={pending}>
        {pending ? t("common.loading") : t("home.leadMagnetSubmit")}
      </Button>
    </form>
  );
}
