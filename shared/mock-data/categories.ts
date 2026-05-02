import { photoAt } from "@shared/config/site-photos";
import type { LucideIcon } from "lucide-react";
import {
  Factory,
  Hammer,
  Layers3,
  LayoutDashboard,
  Layers,
  Wrench,
  Zap,
  Anchor,
} from "lucide-react";

export interface Category {
  slug: string;
  icon: LucideIcon;
  productCount: number;
  imageKey: keyof typeof CATEGORY_IMAGES;
  i18n: {
    uz: { name: string; description: string };
    ru: { name: string; description: string };
    en: { name: string; description: string };
  };
}

const CATEGORY_IMAGES = {
  concrete: photoAt(1),
  brick: photoAt(2),
  aac: photoAt(3),
  tile: photoAt(4),
  slate: photoAt(5),
  metal: photoAt(6),
  generator: photoAt(7),
  cement: photoAt(8),
} as const;

export const CATEGORIES: Category[] = [
  {
    slug: "beton-zavodlari",
    icon: Factory,
    productCount: 5,
    imageKey: "concrete",
    i18n: {
      uz: {
        name: "Beton zavodlari",
        description: "HZS turkumi — 25, 35, 50, 75, 90 m³/h modulli beton zavodlari.",
      },
      ru: {
        name: "Бетонные заводы",
        description: "Серия HZS — 25, 35, 50, 75, 90 м³/ч модульные бетонные заводы.",
      },
      en: {
        name: "Concrete plants",
        description: "HZS series — 25, 35, 50, 75, 90 m³/h modular concrete batching plants.",
      },
    },
  },
  {
    slug: "gisht-zavodlari",
    icon: Hammer,
    productCount: 4,
    imageKey: "brick",
    i18n: {
      uz: {
        name: "G'isht zavodlari",
        description:
          "Avtomatik g'isht ishlab chiqarish liniyalari, kunlik unumdorligi 50–200 ming dona.",
      },
      ru: {
        name: "Кирпичные заводы",
        description: "Автоматические линии производства кирпича, до 200 тыс. шт/сутки.",
      },
      en: {
        name: "Brick factories",
        description: "Automated brick production lines, output 50k–200k pcs/day.",
      },
    },
  },
  {
    slug: "gazobeton-liniyasi",
    icon: Layers3,
    productCount: 3,
    imageKey: "aac",
    i18n: {
      uz: {
        name: "Gazobeton liniyasi",
        description: "Avtoklavli gazobeton (AAC) ishlab chiqarish liniyalari.",
      },
      ru: {
        name: "Газобетон (AAC)",
        description: "Линии автоклавного газобетона (AAC).",
      },
      en: {
        name: "AAC lines",
        description: "Autoclaved aerated concrete production lines.",
      },
    },
  },
  {
    slug: "kafel-liniyalari",
    icon: LayoutDashboard,
    productCount: 3,
    imageKey: "tile",
    i18n: {
      uz: {
        name: "Kafel liniyalari",
        description: "Polishlangan va matt kafel ishlab chiqarish liniyalari.",
      },
      ru: {
        name: "Линии плитки",
        description: "Линии производства полированной и матовой керамической плитки.",
      },
      en: {
        name: "Ceramic tile lines",
        description: "Polished and matte ceramic tile production lines.",
      },
    },
  },
  {
    slug: "shifer-uskunalari",
    icon: Layers,
    productCount: 2,
    imageKey: "slate",
    i18n: {
      uz: {
        name: "Shifer uskunalari",
        description: "Tola-sement shifer ishlab chiqarish liniyalari.",
      },
      ru: {
        name: "Шиферные линии",
        description: "Линии производства фиброцементного шифера.",
      },
      en: {
        name: "Slate lines",
        description: "Fiber-cement slate production lines.",
      },
    },
  },
  {
    slug: "metall-konstruksiya",
    icon: Wrench,
    productCount: 4,
    imageKey: "metal",
    i18n: {
      uz: {
        name: "Metall konstruksiya",
        description: "Sandvich panel, profilli list va metall karkas uskunalari.",
      },
      ru: {
        name: "Металлоконструкции",
        description: "Сэндвич-панели, профлист и оборудование металлокаркасов.",
      },
      en: {
        name: "Metal construction",
        description: "Sandwich panel, profile sheet and metal frame equipment.",
      },
    },
  },
  {
    slug: "generatorlar",
    icon: Zap,
    productCount: 6,
    imageKey: "generator",
    i18n: {
      uz: {
        name: "Generatorlar",
        description: "30–500 kVA dizel va gaz generatorlar.",
      },
      ru: {
        name: "Генераторы",
        description: "Дизельные и газовые генераторы 30–500 кВА.",
      },
      en: {
        name: "Generators",
        description: "30–500 kVA diesel and gas generators.",
      },
    },
  },
  {
    slug: "sement-zavodlari",
    icon: Anchor,
    productCount: 2,
    imageKey: "cement",
    i18n: {
      uz: {
        name: "Sement zavodlari",
        description: "Mini sement zavodlari, kunlik unumdorligi 100–500 tonna.",
      },
      ru: {
        name: "Цементные заводы",
        description: "Мини-цементные заводы, 100–500 т/сутки.",
      },
      en: {
        name: "Cement plants",
        description: "Mini cement plants, output 100–500 t/day.",
      },
    },
  },
];

export function getCategoryImage(key: keyof typeof CATEGORY_IMAGES): string {
  return CATEGORY_IMAGES[key];
}
