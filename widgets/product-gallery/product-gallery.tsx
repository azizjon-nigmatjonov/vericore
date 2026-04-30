"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { useRouter } from "@shared/i18n/navigation";
import { StatusBadge } from "@shared/ui/status-badge";
import type { StockStatus } from "@shared/types";

interface ProductGalleryProps {
  images: string[];
  alt: string;
  status: StockStatus;
  inStockLabel: string;
  preorderLabel: string;
}

export function ProductGallery({
  images,
  alt,
  status,
  inStockLabel,
  preorderLabel,
}: ProductGalleryProps) {
  const router = useRouter();
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <header className="relative -mx-6 h-[60vh] min-h-[450px]">
      <div className="absolute inset-0">
        <Image
          src={images[activeIdx] ?? images[0] ?? ""}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="from-on-surface/70 via-on-surface/20 absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>

      <div className="absolute top-4 right-4 left-4 z-10 flex items-center justify-between">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md"
          aria-label="Back"
        >
          <ArrowLeft size={20} aria-hidden />
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md"
            aria-label="Save"
          >
            <Heart size={18} aria-hidden />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md"
            aria-label="Share"
          >
            <Share2 size={18} aria-hidden />
          </button>
        </div>
      </div>

      <div className="absolute right-6 bottom-6 left-6 z-10">
        <div className="flex items-center justify-between">
          <StatusBadge status={status} inStockLabel={inStockLabel} preorderLabel={preorderLabel} />
          {images.length > 1 ? (
            <div className="flex gap-2" role="tablist">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIdx}
                  onClick={() => setActiveIdx(idx)}
                  className={
                    "h-1.5 rounded-full transition-all " +
                    (idx === activeIdx ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60")
                  }
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
