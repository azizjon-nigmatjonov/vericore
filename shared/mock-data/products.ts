import { photoAt } from "@shared/config/site-photos";
import type { StockStatus } from "@shared/types";

export interface ProductSpec {
  productivity: { value: number; unit: "m³/h" };
  cycleTimeSeconds: number;
  powerKw: number;
  mixerModel: string;
  batcherModel: string;
  feedingModel: string;
  dischargeMeters: { min: number; max: number };
  airCompressorKw: number;
  weighingAccuracy: { water: string; aggregate: string; cement: string };
  dimensionsMm: { l: number; w: number; h: number };
}

export interface ProductConfigItem {
  systemName: string;
  items: { name: string; spec?: string; quantity: string }[];
}

export interface ProductCommercial {
  containerType: string;
  priceUsdExw: number;
  deliveryWorkingDays: number;
  paymentTerms: string;
  colorPolicy: string;
}

export interface ProductWarranty {
  months: number;
  validityDays: number;
  installation: {
    engineersOnSite: number;
    dailyRateUsd: number;
    buyerCovers: string[];
  };
}

export interface Product {
  slug: string;
  modelCode: string;
  categorySlug: string;
  status: StockStatus;
  isFeatured: boolean;
  isPopular: boolean;
  images: string[];
  spec: ProductSpec;
  commercial: ProductCommercial;
  configuration: ProductConfigItem[];
  warranty: ProductWarranty;
  i18n: {
    uz: { name: string; shortName: string; description: string; tagline: string };
    ru: { name: string; shortName: string; description: string; tagline: string };
    en: { name: string; shortName: string; description: string; tagline: string };
  };
}

const concreteImages = [photoAt(1), photoAt(5), photoAt(9)];
const brickImages = [photoAt(2), photoAt(6)];
const tileImages = [photoAt(4), photoAt(8)];

export const PRODUCTS: Product[] = [
  // === HZS35 — the source-of-truth product from the PDF ===
  {
    slug: "hzs35",
    modelCode: "HZS35",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: concreteImages,
    spec: {
      productivity: { value: 35, unit: "m³/h" },
      cycleTimeSeconds: 72,
      powerKw: 80,
      mixerModel: "JS750",
      batcherModel: "PLD1200",
      feedingModel: "Lift Hopper",
      dischargeMeters: { min: 3.8, max: 4.2 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 18360, w: 9800, h: 17600 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 25500,
      deliveryWorkingDays: 15,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (5m³)", spec: "PLD1200", quantity: "2 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Belt conveyor", quantity: "3 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS750", quantity: "1 set" },
          { name: "Lubrication thick oil pump", quantity: "1 set" },
          { name: "Pneumatic discharge", quantity: "1 set" },
          { name: "Hard-wearing plate", quantity: "1 set" },
        ],
      },
      {
        systemName: "Hoisting mechanism",
        items: [
          { name: "Aggregate lift hopper", quantity: "1 set" },
          { name: "Lift hopper", quantity: "1 set" },
          { name: "Rail rack", quantity: "1 set" },
        ],
      },
      {
        systemName: "Water weighing system",
        items: [
          { name: "Water flow-meter", quantity: "1 set" },
          { name: "Water pump", quantity: "1 set" },
          { name: "Pipe valve system", quantity: "1 set" },
        ],
      },
      {
        systemName: "Cement weighing system",
        items: [
          { name: "Cement weighing bin", quantity: "1 set" },
          { name: "Cement weigher", quantity: "1 set" },
          { name: "Butterfly valve", quantity: "1 set" },
        ],
      },
      {
        systemName: "Additive weighing system",
        items: [
          { name: "Additive weighing bin", quantity: "1 set" },
          { name: "Pipeline", quantity: "1 set" },
          { name: "Weighing sensor", quantity: "1 set" },
          { name: "Butterfly valve", quantity: "1 set" },
        ],
      },
      {
        systemName: "Pneumatic system",
        items: [
          { name: "Air compressor", quantity: "1 set" },
          { name: "Electromagnetic valve", quantity: "1 set" },
          { name: "Pipeline system", quantity: "1 set" },
        ],
      },
      {
        systemName: "Electric control system",
        items: [
          { name: "Current cabinet", quantity: "1 set" },
          { name: "Control computer", quantity: "1 set" },
          { name: "Contactor", quantity: "1 set" },
          { name: "Autoswitch", quantity: "1 set" },
          { name: "Mini-relay", quantity: "1 set" },
          { name: "Thermo-relay", quantity: "1 set" },
          { name: "Weighing transmitter", quantity: "1 set" },
          { name: "Electrical control accessories", quantity: "1 set" },
        ],
      },
      {
        systemName: "Conveyor & storage",
        items: [
          { name: "Screw conveyor", spec: "Ø219", quantity: "1 set" },
          { name: "Cement Pot", spec: "100T", quantity: "1 set" },
        ],
      },
    ],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HZS35 — Beton zavodi",
        shortName: "HZS35",
        tagline: "O'rta hajmdagi qurilish loyihalari uchun ideal yechim",
        description:
          "HZS35 beton zavodi — modulli konstruksiya, oson tashish va tezkor o'rnatish imkoniyatlarini o'zida mujassam etgan. Zavod to'liq avtomatlashtirilgan boshqaruv tizimi (PLC) bilan jihozlangan bo'lib, har bir partiyaning aniqligini kafolatlaydi. JS750 majburiy aralashtirish miksori va PLD1200 dozatori bilan jihozlangan.",
      },
      ru: {
        name: "HZS35 — Бетонный завод",
        shortName: "HZS35",
        tagline: "Идеальное решение для средних строительных проектов",
        description:
          "Бетонный завод HZS35 — модульная конструкция с лёгкой транспортировкой и быстрым монтажом. Полностью автоматизированная система управления (ПЛК) гарантирует точность каждой партии. Оснащён принудительным смесителем JS750 и дозатором PLD1200.",
      },
      en: {
        name: "HZS35 — Concrete batching plant",
        shortName: "HZS35",
        tagline: "Ideal solution for medium-scale construction projects",
        description:
          "HZS35 concrete batching plant — modular construction with easy transport and rapid installation. Fully automated PLC control system guarantees batch accuracy. Equipped with JS750 forced mixer and PLD1200 batching machine.",
      },
    },
  },
  {
    slug: "hzs25",
    modelCode: "HZS25",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: false,
    isPopular: false,
    images: concreteImages,
    spec: {
      productivity: { value: 25, unit: "m³/h" },
      cycleTimeSeconds: 72,
      powerKw: 60,
      mixerModel: "JS500",
      batcherModel: "PLD800",
      feedingModel: "Lift Hopper",
      dischargeMeters: { min: 3.8, max: 4.2 },
      airCompressorKw: 5.5,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 16500, w: 8500, h: 16000 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 19800,
      deliveryWorkingDays: 12,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: { engineersOnSite: 2, dailyRateUsd: 80, buyerCovers: [] },
    },
    i18n: {
      uz: {
        name: "HZS25 — Beton zavodi",
        shortName: "HZS25",
        tagline: "Kichik biznes uchun arzon va sifatli yechim",
        description:
          "HZS25 — kichik hajmdagi qurilish loyihalari uchun mo'ljallangan modulli beton zavod.",
      },
      ru: {
        name: "HZS25 — Бетонный завод",
        shortName: "HZS25",
        tagline: "Доступное решение для малого бизнеса",
        description: "HZS25 — модульный бетонный завод для небольших строительных проектов.",
      },
      en: {
        name: "HZS25 — Concrete batching plant",
        shortName: "HZS25",
        tagline: "Affordable entry-level solution",
        description:
          "HZS25 — modular concrete batching plant for small-scale construction projects.",
      },
    },
  },
  {
    slug: "hzs50",
    modelCode: "HZS50",
    categorySlug: "beton-zavodlari",
    status: "preorder",
    isFeatured: true,
    isPopular: true,
    images: concreteImages,
    spec: {
      productivity: { value: 50, unit: "m³/h" },
      cycleTimeSeconds: 60,
      powerKw: 110,
      mixerModel: "JS1000",
      batcherModel: "PLD1600",
      feedingModel: "Lift Hopper",
      dischargeMeters: { min: 3.8, max: 4.2 },
      airCompressorKw: 11,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 22000, w: 10500, h: 18500 },
    },
    commercial: {
      containerType: "1×40HQ + 1×20GP",
      priceUsdExw: 42000,
      deliveryWorkingDays: 18,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: { engineersOnSite: 2, dailyRateUsd: 80, buyerCovers: [] },
    },
    i18n: {
      uz: {
        name: "HZS50 — Beton zavodi",
        shortName: "HZS50",
        tagline: "Optimal — narx va unumdorlik muvozanati",
        description: "HZS50 — o'rta-katta loyihalar uchun ommabop tanlov. JS1000 mikser bilan.",
      },
      ru: {
        name: "HZS50 — Бетонный завод",
        shortName: "HZS50",
        tagline: "Оптимальный баланс цены и производительности",
        description: "HZS50 — популярный выбор для средне-крупных проектов. С смесителем JS1000.",
      },
      en: {
        name: "HZS50 — Concrete batching plant",
        shortName: "HZS50",
        tagline: "Optimal price-performance balance",
        description: "HZS50 — a popular choice for medium-large projects. JS1000 mixer.",
      },
    },
  },
  {
    slug: "hzs75",
    modelCode: "HZS75",
    categorySlug: "beton-zavodlari",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: concreteImages,
    spec: {
      productivity: { value: 75, unit: "m³/h" },
      cycleTimeSeconds: 60,
      powerKw: 140,
      mixerModel: "JS1500",
      batcherModel: "PLD2400",
      feedingModel: "Belt Conveyor",
      dischargeMeters: { min: 3.8, max: 4.2 },
      airCompressorKw: 15,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 26000, w: 12000, h: 19500 },
    },
    commercial: {
      containerType: "2×40HQ",
      priceUsdExw: 58500,
      deliveryWorkingDays: 22,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: { engineersOnSite: 2, dailyRateUsd: 80, buyerCovers: [] },
    },
    i18n: {
      uz: {
        name: "HZS75 — Beton zavodi",
        shortName: "HZS75",
        tagline: "Yirik qurilish maydonlari uchun",
        description: "HZS75 — yirik infratuzilma loyihalari uchun yuqori unumdorlikdagi yechim.",
      },
      ru: {
        name: "HZS75 — Бетонный завод",
        shortName: "HZS75",
        tagline: "Для крупных стройплощадок",
        description:
          "HZS75 — высокопроизводительное решение для крупных инфраструктурных проектов.",
      },
      en: {
        name: "HZS75 — Concrete batching plant",
        shortName: "HZS75",
        tagline: "For large construction sites",
        description: "HZS75 — high-output solution for major infrastructure projects.",
      },
    },
  },
  {
    slug: "hzs90",
    modelCode: "HZS90",
    categorySlug: "beton-zavodlari",
    status: "preorder",
    isFeatured: true,
    isPopular: true,
    images: concreteImages,
    spec: {
      productivity: { value: 90, unit: "m³/h" },
      cycleTimeSeconds: 60,
      powerKw: 160,
      mixerModel: "JS1500",
      batcherModel: "PLD2400",
      feedingModel: "Belt Conveyor",
      dischargeMeters: { min: 4.0, max: 4.5 },
      airCompressorKw: 15,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 28000, w: 12500, h: 21000 },
    },
    commercial: {
      containerType: "2×40HQ + 1×20GP",
      priceUsdExw: 78500,
      deliveryWorkingDays: 25,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: { engineersOnSite: 2, dailyRateUsd: 80, buyerCovers: [] },
    },
    i18n: {
      uz: {
        name: "HZS90 — Beton zavodi",
        shortName: "HZS90",
        tagline: "Eng yuqori unumdorlikdagi tanlov",
        description: "HZS90 — flagman model. Eng katta avtotsement xo'jaliklari uchun.",
      },
      ru: {
        name: "HZS90 — Бетонный завод",
        shortName: "HZS90",
        tagline: "Флагманская производительность",
        description: "HZS90 — флагманская модель. Для крупнейших бетонных хозяйств.",
      },
      en: {
        name: "HZS90 — Concrete batching plant",
        shortName: "HZS90",
        tagline: "Flagship-class output",
        description: "HZS90 — the flagship model. For the largest ready-mix operations.",
      },
    },
  },
  // === Brick + tile samples for catalog completeness ===
  {
    slug: "qt4-25-brick-line",
    modelCode: "QT4-25",
    categorySlug: "gisht-zavodlari",
    status: "in-stock",
    isFeatured: false,
    isPopular: true,
    images: brickImages,
    spec: {
      productivity: { value: 5000, unit: "m³/h" },
      cycleTimeSeconds: 25,
      powerKw: 22,
      mixerModel: "JS500",
      batcherModel: "—",
      feedingModel: "Hydraulic press",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 4500, w: 2200, h: 2500 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 14500,
      deliveryWorkingDays: 15,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: { engineersOnSite: 1, dailyRateUsd: 80, buyerCovers: [] },
    },
    i18n: {
      uz: {
        name: "QT4-25 — G'isht ishlab chiqarish liniyasi",
        shortName: "QT4-25",
        tagline: "Avtomatik blok-g'isht liniyasi",
        description:
          "QT4-25 — gidravlik bosim ostida ishlaydigan avtomatik g'isht ishlab chiqarish liniyasi.",
      },
      ru: {
        name: "QT4-25 — Линия производства кирпича",
        shortName: "QT4-25",
        tagline: "Автоматическая блок-кирпичная линия",
        description:
          "QT4-25 — автоматическая линия производства блоков и кирпича на гидравлическом прессе.",
      },
      en: {
        name: "QT4-25 — Brick production line",
        shortName: "QT4-25",
        tagline: "Automated block & brick line",
        description: "QT4-25 — hydraulic-press automated brick & block production line.",
      },
    },
  },
  {
    slug: "kct-tile-line-300",
    modelCode: "KCT-300",
    categorySlug: "plastik-idishlar",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: tileImages,
    spec: {
      productivity: { value: 300, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 250,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Continuous belt",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 65000, w: 12000, h: 6500 },
    },
    commercial: {
      containerType: "5×40HQ",
      priceUsdExw: 285000,
      deliveryWorkingDays: 60,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [],
    warranty: {
      months: 18,
      validityDays: 30,
      installation: { engineersOnSite: 4, dailyRateUsd: 100, buyerCovers: [] },
    },
    i18n: {
      uz: {
        name: "KCT-300 — Kafel liniyasi",
        shortName: "KCT-300",
        tagline: "300 m²/soat keramik kafel ishlab chiqarish",
        description:
          "KCT-300 — to'liq avtomatlashtirilgan keramik kafel ishlab chiqarish liniyasi.",
      },
      ru: {
        name: "KCT-300 — Линия керамической плитки",
        shortName: "KCT-300",
        tagline: "Производство 300 м²/час",
        description:
          "KCT-300 — полностью автоматизированная линия производства керамической плитки.",
      },
      en: {
        name: "KCT-300 — Ceramic tile line",
        shortName: "KCT-300",
        tagline: "300 m²/h ceramic tile output",
        description: "KCT-300 — fully automated ceramic tile production line.",
      },
    },
  },
  {
    slug: "aac-200",
    modelCode: "AAC-200",
    categorySlug: "gisht-zavodlari",
    status: "in-stock",
    isFeatured: false,
    isPopular: true,
    images: [photoAt(3)],
    spec: {
      productivity: { value: 200, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 180,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Slurry batching",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 15,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 42000, w: 8000, h: 6000 },
    },
    commercial: {
      containerType: "3×40HQ",
      priceUsdExw: 185000,
      deliveryWorkingDays: 45,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: { engineersOnSite: 3, dailyRateUsd: 90, buyerCovers: [] },
    },
    i18n: {
      uz: {
        name: "AAC-200 — Gazobeton liniyasi",
        shortName: "AAC-200",
        tagline: "Avtoklavli gazobeton ishlab chiqarish",
        description: "AAC-200 — avtoklavli gazobeton bloklari uchun mo'ljallangan liniya.",
      },
      ru: {
        name: "AAC-200 — Линия газобетона",
        shortName: "AAC-200",
        tagline: "Автоклавный газобетон",
        description: "AAC-200 — линия производства автоклавного газобетона.",
      },
      en: {
        name: "AAC-200 — AAC production line",
        shortName: "AAC-200",
        tagline: "Autoclaved aerated concrete",
        description: "AAC-200 — autoclaved aerated concrete block and panel production line.",
      },
    },
  },
];
