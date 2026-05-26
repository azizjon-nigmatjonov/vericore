import type { LucideIcon } from "lucide-react";
import {
  Box,
  Boxes,
  Circle,
  Construction,
  Cylinder,
  Droplets,
  Factory,
  FileText,
  Gem,
  Hammer,
  HeartPulse,
  Layers,
  Package,
  Palette,
  Settings2,
  Sparkles,
  Star,
  Sun,
  TreePine,
  Truck,
  UtensilsCrossed,
  Wrench,
  Zap,
} from "lucide-react";

/** Source list (Uzbek titles) — used to build catalog categories */
export const catalogList = [
  { id: 1, title: "Oziq ovqat uskunalari" },
  { id: 2, title: "Kran kozlovoy, mostovoy, bashinniy" },
  { id: 3, title: "Qog'ozni qayta ishlash uskunalari" },
  { id: 4, title: "Strech klyonka uskunasi" },
  { id: 5, title: "Drabilni zavod" },
  { id: 6, title: "Laser stanoki" },
  { id: 7, title: "Generatorlar" },
  { id: 8, title: "G'isht zavodlari" },
  { id: 9, title: "Beton zavodlari" },
  { id: 10, title: "Carmixlar" },
  { id: 11, title: "Salafan polietilen uskunasi" },
  { id: 12, title: "Plastik idishlar" },
  { id: 13, title: "Suv liniyalari" },
  { id: 14, title: "Asfalt zavod" },
  { id: 15, title: "Metalga ishlov berish liniya" },
  { id: 16, title: "Yog'och liniyalari taxta" },
  { id: 17, title: "Maxsus texnikalar" },
  { id: 18, title: "Med texnikalar" },
  { id: 19, title: "Quyosh panel tizimi" },
  { id: 20, title: "Sanwich pannellar" },
  { id: 21, title: "Kraska zavod" },
  { id: 22, title: "Shifr zavod" },
  { id: 23, title: "Upakovichni liniyalar" },
  { id: 24, title: "Kraska uchun idish liniyalari" },
  { id: 25, title: "Tuxum fleykalari liniyalari" },
  { id: 26, title: "Qog'oz liniyalari" },
  { id: 27, title: "O'yinchoqlar va ishlab chiqarish" },
] as const;

export type CatalogListItem = (typeof catalogList)[number];

type CategoryMeta = {
  slug: string;
  icon: LucideIcon;
  productCount: number;
  ru: { name: string; description: string };
  en: { name: string; description: string };
};

const CATEGORY_META: Record<CatalogListItem["id"], CategoryMeta> = {
  1: {
    slug: "oziq-ovqat-uskunalari",
    icon: UtensilsCrossed,
    productCount: 2,
    ru: {
      name: "Пищевое оборудование",
      description: "Линии переработки и фасовки пищевой продукции.",
    },
    en: {
      name: "Food processing equipment",
      description: "Processing and packaging lines for food production.",
    },
  },
  2: {
    slug: "kran-uskunalari",
    icon: Construction,
    productCount: 1,
    ru: {
      name: "Краны (башенные, мостовые, козловые)",
      description: "Подъёмно-транспортное оборудование для стройплощадок и складов.",
    },
    en: {
      name: "Cranes (tower, bridge, gantry)",
      description: "Lifting equipment for construction sites and warehouses.",
    },
  },
  3: {
    slug: "qogoz-qayta-ishlash",
    icon: FileText,
    productCount: 0,
    ru: {
      name: "Оборудование переработки бумаги",
      description: "Линии сортировки, измельчения и переработки макулатуры.",
    },
    en: {
      name: "Paper recycling equipment",
      description: "Sorting, shredding and paper recycling production lines.",
    },
  },
  4: {
    slug: "strech-klyonka",
    icon: Package,
    productCount: 1,
    ru: {
      name: "Оборудование для стрейч-плёнки",
      description: "Экструзия и перемотка стрейч-плёнки для упаковки.",
    },
    en: {
      name: "Stretch film equipment",
      description: "Extrusion and rewinding lines for pallet stretch film.",
    },
  },
  5: {
    slug: "drabilni-zavod",
    icon: Gem,
    productCount: 0,
    ru: {
      name: "Дробильный завод",
      description: "Дробилки и сортировочные комплексы для щебня и руды.",
    },
    en: {
      name: "Crushing plant",
      description: "Crushers and screening plants for aggregate and ore.",
    },
  },
  6: {
    slug: "laser-stanoki",
    icon: Sparkles,
    productCount: 0,
    ru: {
      name: "Лазерные станки",
      description: "Лазерная резка и гравировка металла и других материалов.",
    },
    en: {
      name: "Laser machines",
      description: "Laser cutting and engraving for metal and other materials.",
    },
  },
  7: {
    slug: "generatorlar",
    icon: Zap,
    productCount: 0,
    ru: {
      name: "Генераторы",
      description: "Дизельные и газовые генераторы 30–500 кВА.",
    },
    en: {
      name: "Generators",
      description: "30–500 kVA diesel and gas generators.",
    },
  },
  8: {
    slug: "gisht-zavodlari",
    icon: Hammer,
    productCount: 1,
    ru: {
      name: "Кирпичные заводы",
      description: "Автоматические линии производства кирпича.",
    },
    en: {
      name: "Brick factories",
      description: "Automated brick production lines.",
    },
  },
  9: {
    slug: "beton-zavodlari",
    icon: Factory,
    productCount: 0,
    ru: {
      name: "Бетонные заводы",
      description: "Модульные бетонные заводы серии HZS.",
    },
    en: {
      name: "Concrete plants",
      description: "HZS series modular concrete batching plants.",
    },
  },
  10: {
    slug: "carmixlar",
    icon: Truck,
    productCount: 0,
    ru: {
      name: "Carmix (мобильные смесители)",
      description: "Самоходные и прицепные мобильные бетоносмесители.",
    },
    en: {
      name: "Carmix mixers",
      description: "Self-loading and trailer mobile concrete mixers.",
    },
  },
  11: {
    slug: "salafan-polietilen",
    icon: Cylinder,
    productCount: 0,
    ru: {
      name: "Оборудование для полиэтиленовой плёнки",
      description: "Экструзия пищевой и технической плёнки, пакетов.",
    },
    en: {
      name: "Polyethylene film equipment",
      description: "Extrusion lines for PE film and bags.",
    },
  },
  12: {
    slug: "plastik-idishlar",
    icon: Box,
    productCount: 0,
    ru: {
      name: "Пластиковая тара",
      description: "Выдувное формование бутылок, канистр и ёмкостей.",
    },
    en: {
      name: "Plastic containers",
      description: "Blow-moulding lines for bottles and plastic packaging.",
    },
  },
  13: {
    slug: "suv-liniyalari",
    icon: Droplets,
    productCount: 1,
    ru: {
      name: "Линии розлива воды",
      description: "Очистка, розлив и упаковка питьевой воды.",
    },
    en: {
      name: "Water bottling lines",
      description: "Purification, filling and packaging for drinking water.",
    },
  },
  14: {
    slug: "asfalt-zavod",
    icon: Layers,
    productCount: 0,
    ru: {
      name: "Асфальтный завод",
      description: "Барабанные и мобильные асфальтосмесительные установки.",
    },
    en: {
      name: "Asphalt plant",
      description: "Drum and mobile asphalt mixing plants.",
    },
  },
  15: {
    slug: "metalga-ishlov-berish",
    icon: Wrench,
    productCount: 0,
    ru: {
      name: "Линии обработки металла",
      description: "Профилирование, гибка, сварка и металлоконструкции.",
    },
    en: {
      name: "Metal processing lines",
      description: "Profiling, bending, welding and metal structure equipment.",
    },
  },
  16: {
    slug: "yogoch-liniyalari",
    icon: TreePine,
    productCount: 0,
    ru: {
      name: "Деревообрабатывающие линии",
      description: "Распиловка, сушка и обработка пиломатериалов.",
    },
    en: {
      name: "Wood processing lines",
      description: "Sawing, drying and lumber processing equipment.",
    },
  },
  17: {
    slug: "maxsus-texnikalar",
    icon: Settings2,
    productCount: 5,
    ru: {
      name: "Спецтехника",
      description: "Нестандартное и проектное промышленное оборудование.",
    },
    en: {
      name: "Special machinery",
      description: "Custom and project-specific industrial equipment.",
    },
  },
  18: {
    slug: "med-texnikalar",
    icon: HeartPulse,
    productCount: 0,
    ru: {
      name: "Медицинское оборудование",
      description: "Оборудование для клиник и медицинского производства.",
    },
    en: {
      name: "Medical equipment",
      description: "Equipment for clinics and medical manufacturing.",
    },
  },
  19: {
    slug: "quyosh-panel",
    icon: Sun,
    productCount: 0,
    ru: {
      name: "Солнечные электростанции",
      description: "Солнечные панели, инверторы и системы накопления.",
    },
    en: {
      name: "Solar panel systems",
      description: "PV modules, inverters and storage systems.",
    },
  },
  20: {
    slug: "sanwich-pannellar",
    icon: Layers,
    productCount: 0,
    ru: {
      name: "Сэндвич-панели",
      description: "Линии производства сэндвич-панелей и профлиста.",
    },
    en: {
      name: "Sandwich panels",
      description: "Sandwich panel and profile sheet production lines.",
    },
  },
  21: {
    slug: "kraska-zavod",
    icon: Palette,
    productCount: 0,
    ru: {
      name: "Краска / ЛКМ",
      description: "Диспергирование, смешение и фасовка красок.",
    },
    en: {
      name: "Paint plant",
      description: "Dispersion, mixing and filling lines for coatings.",
    },
  },
  22: {
    slug: "shifr-zavod",
    icon: Layers,
    productCount: 0,
    ru: {
      name: "Шиферный завод",
      description: "Линии производства фиброцементного шифера.",
    },
    en: {
      name: "Slate plant",
      description: "Fiber-cement slate production lines.",
    },
  },
  23: {
    slug: "upakovka-liniyalari",
    icon: Boxes,
    productCount: 1,
    ru: {
      name: "Упаковочные линии",
      description: "Автоматическая упаковка и паллетирование продукции.",
    },
    en: {
      name: "Packaging lines",
      description: "Automatic packaging and palletizing systems.",
    },
  },
  24: {
    slug: "kraska-idish-liniyalari",
    icon: Box,
    productCount: 0,
    ru: {
      name: "Линии тары для краски",
      description: "Производство банок и ёмкостей для ЛКМ.",
    },
    en: {
      name: "Paint container lines",
      description: "Tin and plastic container lines for coatings.",
    },
  },
  25: {
    slug: "tuxum-fleyka-liniyalari",
    icon: Circle,
    productCount: 0,
    ru: {
      name: "Линии яичных лотков",
      description: "Формование и прессование лотков из переработанной бумаги.",
    },
    en: {
      name: "Egg tray lines",
      description: "Moulding and pressing lines for pulp egg trays.",
    },
  },
  27: {
    slug: "oyinchoqlar",
    icon: Star,
    productCount: 8,
    ru: {
      name: "Игрушки и производство",
      description: "Детские игрушки оптом и оборудование для производства игрушек.",
    },
    en: {
      name: "Toys and manufacturing",
      description: "Children's toys wholesale and toy manufacturing equipment.",
    },
  },
  26: {
    slug: "tualet-qogoz-liniyalari",
    icon: FileText,
    productCount: 3,
    ru: {
      name: "Бумажные линии",
      description: "Перемотка, нарезка и упаковка бумажной продукции.",
    },
    en: {
      name: "Paper lines",
      description: "Rewinding, slitting and packaging lines for paper products.",
    },
  },
};

const CATEGORY_IMAGE_BASE = "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories";

const CATEGORY_IMAGES = Object.fromEntries(
  catalogList.map((item) => [
    `cat-${item.id}`,
    `${CATEGORY_IMAGE_BASE}/${CATEGORY_META[item.id].slug}/cover.jpeg`,
  ]),
) as Record<`cat-${number}`, string>;

export type CategoryImageKey = keyof typeof CATEGORY_IMAGES;

export interface Category {
  id: number;
  slug: string;
  icon: LucideIcon;
  productCount: number;
  imageKey: CategoryImageKey;
  i18n: {
    uz: { name: string; description: string };
    ru: { name: string; description: string };
    en: { name: string; description: string };
  };
}

export const CATEGORIES: Category[] = catalogList.map((item) => {
  const meta = CATEGORY_META[item.id];
  return {
    id: item.id,
    slug: meta.slug,
    icon: meta.icon,
    productCount: meta.productCount,
    imageKey: `cat-${item.id}` as CategoryImageKey,
    i18n: {
      uz: {
        name: item.title,
        description: `${item.title} — ishonchli xitoy ishlab chiqaruvchilaridan uskunalar va liniyalar.`,
      },
      ru: meta.ru,
      en: meta.en,
    },
  };
});

export function getCategoryImage(key: CategoryImageKey): string {
  return CATEGORY_IMAGES[key] ?? `${CATEGORY_IMAGE_BASE}/beton-zavodlari/cover.jpeg`;
}
