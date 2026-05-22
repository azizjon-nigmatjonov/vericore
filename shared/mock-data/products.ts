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

const toysImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.45.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.46.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.47.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.48.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.50.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.51.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.52.jpeg",
];

const cilAs699Images = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.08.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.11.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.12.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.14.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.17.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.19.jpeg",
];

const ht500Images = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/HT-500%20stretch%20film%20rewinding%20and%20slitting%20machine/photo_2026-05-21%2016.25.17.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/HT-500%20stretch%20film%20rewinding%20and%20slitting%20machine/photo_2026-05-21%2016.25.19.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/HT-500%20stretch%20film%20rewinding%20and%20slitting%20machine/photo_2026-05-21%2016.25.20.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/HT-500%20stretch%20film%20rewinding%20and%20slitting%20machine/photo_2026-05-21%2016.25.21.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/HT-500%20stretch%20film%20rewinding%20and%20slitting%20machine/photo_2026-05-21%2016.25.22.jpeg",
];

const vegetableSlicerImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vegitable-slicer/photo_2026-05-21%2016.23.07.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vegitable-slicer/photo_2026-05-21%2016.23.09.jpeg",
];

const mixerImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.05.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.06.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.09.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.10.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.12.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.17.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.20.jpeg",
];

const toiletPaperImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.06.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.07.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.08.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.09.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.10.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.12.jpeg",
];
const waterPlasticImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.42.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.44.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.46.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.47.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.49.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.50.jpeg",
];

export const PRODUCTS: Product[] = [
  {
    slug: "semi-auto-pet-bottle-machine-50-2000ml",
    modelCode: "PET-SA-2C",
    categorySlug: "suv-liniyalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: waterPlasticImages,
    spec: {
      productivity: { value: 1200, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 22,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Semi-automatic",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Machine specifications",
        items: [
          { name: "Plastic processed", spec: "PET", quantity: "—" },
          { name: "Automation", spec: "Semi-automatic", quantity: "—" },
          { name: "Voltage", spec: "220–380V 50–60Hz", quantity: "—" },
          { name: "PLC Brand", spec: "Schneider", quantity: "—" },
          { name: "Rotary Cylinder Brand", spec: "AirTac", quantity: "—" },
          { name: "High Pressure Valve Brand", spec: "AirTac", quantity: "—" },
        ],
      },
      {
        systemName: "Bottle parameters",
        items: [
          { name: "Output", spec: "800–1200 BPH", quantity: "—" },
          { name: "Bottle volume", spec: "50–2000 ml", quantity: "—" },
          { name: "Max bottle height", spec: "360 mm", quantity: "—" },
          { name: "Max bottle diameter", spec: "120 mm", quantity: "—" },
          { name: "Neck diameter", spec: "130 mm", quantity: "—" },
          { name: "Cavity", spec: "2 Cavity", quantity: "—" },
          { name: "Suitable bottles", spec: "Water / Juice / Drink / Oil", quantity: "—" },
        ],
      },
      {
        systemName: "Included equipment",
        items: [
          { name: "Bottle mold", quantity: "1 Set" },
          { name: "High pressure air compressor", quantity: "Included" },
          { name: "High pressure pipe", quantity: "Included" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          {
            name: "Company",
            spec: "Guangdong First Intelligent Drinking Water Equipment Co., Ltd",
            quantity: "—",
          },
          { name: "Established", spec: "2002", quantity: "—" },
          { name: "Factory space", spec: "12 500 m²", quantity: "—" },
          { name: "Experience", spec: "23 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "Yarim avtomatik mini PET shisha tayyorlash mashinasi (50–2000ml)",
        shortName: "PET-SA-2C",
        tagline: "Mineral suv uchun arzon va ishonchli PET shisha ishlab chiqarish",
        description:
          "Yarim avtomatik mini PET shisha tayyorlash mashinasi kichik va o'rta hajmdagi mineral suv, sharbat va ichimliklar ishlab chiqaruvchilar uchun mo'ljallangan. 2 kavitali qolip bilan soatiga 800–1200 dona 50–2000 ml hajmdagi shishalarni ishlab chiqaradi. Schneider PLC va AirTac pnevmatikasi bilan ishonchli ishlashni ta'minlaydi. Ishlab chiqaruvchi: Guangdong First Intelligent Drinking Water Equipment Co., Ltd — 2002-yildan buyon 23 yillik tajribaga ega, 12 500 m² maydondagi zavodda faoliyat yuritadi.",
      },
      ru: {
        name: "Полуавтоматическая мини-машина для выдува ПЭТ-бутылок (50–2000 мл)",
        shortName: "PET-SA-2C",
        tagline: "Доступное производство ПЭТ-тары для минеральной воды",
        description:
          "Полуавтоматическая машина для выдува ПЭТ-бутылок предназначена для малого и среднего производства минеральной воды, сока и напитков. С 2-гнёздной пресс-формой выпускает 800–1200 бутылок/час объёмом 50–2000 мл. ПЛК Schneider и пневматика AirTac обеспечивают надёжную работу. Производитель: Guangdong First Intelligent Drinking Water Equipment Co., Ltd — 23 года опыта с 2002 г., завод площадью 12 500 м².",
      },
      en: {
        name: "Semi-automatic mini mineral water PET bottle making machine (50–2000 ml)",
        shortName: "PET-SA-2C",
        tagline: "Affordable PET bottle production for mineral water lines",
        description:
          "Semi-automatic mini PET bottle blowing machine designed for small and medium mineral water, juice and beverage producers. With a 2-cavity mould it outputs 800–1200 bottles/hour in sizes from 50 to 2000 ml. Schneider PLC and AirTac pneumatics ensure reliable operation. Manufacturer: Guangdong First Intelligent Drinking Water Equipment Co., Ltd — 23 years of experience since 2002, operating from a 12,500 m² facility.",
      },
    },
  },
  {
    slug: "fy-r1575-toilet-tissue-rewinding-machine",
    modelCode: "FY-R1575",
    categorySlug: "tualet-qogoz-liniyalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: toiletPaperImages,
    spec: {
      productivity: { value: 50, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 7.5,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Jumbo roll rewinding",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 7500, w: 3200, h: 1750 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Machine specifications",
        items: [
          { name: "Product type", spec: "Toilet tissue", quantity: "—" },
          { name: "Processing type", spec: "Paper slitting and rewinding", quantity: "—" },
          { name: "Voltage", spec: "380V 50Hz", quantity: "—" },
          { name: "Power", spec: "7.5 kW", quantity: "—" },
          { name: "Core components", spec: "PLC, Engine", quantity: "—" },
          { name: "Weight", spec: "2000 kg", quantity: "—" },
          { name: "Dimensions (L×W×H)", spec: "6500–7500 × 2600–3200 × 1750 mm", quantity: "—" },
        ],
      },
      {
        systemName: "Paper parameters",
        items: [
          { name: "Raw material", spec: "Jumbo roll", quantity: "—" },
          { name: "Paper width", spec: "1575 / 1880 / 2400 / 2800 mm", quantity: "—" },
          { name: "Drop tube", spec: "Manual / Automatic", quantity: "—" },
          { name: "Embossing", spec: "Single / Double embossing", quantity: "—" },
          { name: "Embossing roller", spec: "As required", quantity: "—" },
        ],
      },
      {
        systemName: "After-sales service",
        items: [
          { name: "Warranty", spec: "1 Year", quantity: "—" },
          { name: "Engineers available overseas", spec: "Yes", quantity: "—" },
          { name: "Spare parts", spec: "Provided", quantity: "—" },
          { name: "Online support", spec: "Yes", quantity: "—" },
          { name: "Certification", spec: "CE, ISO", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Henan Fuyuan Machinery Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2005", quantity: "—" },
          { name: "Factory space", spec: "31 738 m²", quantity: "—" },
          { name: "Experience", spec: "19 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "To'liq avtomatik tualet qog'ozi o'rash mashinasi FY-R1575",
        shortName: "FY-R1575",
        tagline: "Jumbo rulon qog'ozdan tualet qog'ozi ishlab chiqarish uchun avtomatik liniya",
        description:
          "FY-R1575 — to'liq avtomatik tualet qog'ozi o'rash va kesish mashinasi. Jumbo rulon xom ashyodan foydalanib, bir necha o'lchamdagi (1575–2800 mm) qog'oz rulonlarini ishlab chiqaradi. Yagona va juft embosslash rejimi, PLC boshqaruvi, CE va ISO sertifikatlari mavjud. Ishlab chiqaruvchi: Henan Fuyuan Machinery Co., Ltd — 2005-yildan buyon 19 yillik tajribaga ega, 31 738 m² maydondagi zavodda faoliyat yuritadi.",
      },
      ru: {
        name: "Полностью автоматическая машина для намотки туалетной бумаги FY-R1575",
        shortName: "FY-R1575",
        tagline: "Автоматическая линия производства туалетной бумаги из джамбо-рулона",
        description:
          "FY-R1575 — полностью автоматическая перемоточно-резательная машина для производства туалетной бумаги. Работает с джамбо-рулонами шириной 1575–2800 мм, поддерживает одинарное и двойное тиснение, управление ПЛК. Сертификаты CE и ISO. Производитель: Henan Fuyuan Machinery Co., Ltd — 19 лет опыта с 2005 г., завод площадью 31 738 м².",
      },
      en: {
        name: "Fully automatic toilet tissue paper roll making machine FY-R1575",
        shortName: "FY-R1575",
        tagline: "Automatic toilet paper rewinding line from jumbo roll",
        description:
          "FY-R1575 is a fully automatic toilet tissue rewinding and slitting machine. Processes jumbo rolls in widths from 1575 to 2800 mm, supports single and double embossing, PLC control. CE and ISO certified. Manufacturer: Henan Fuyuan Machinery Co., Ltd — 19 years of experience since 2005, operating from a 31,738 m² facility.",
      },
    },
  },
  {
    slug: "gfq-800-bottom-sealing-bag-making-machine",
    modelCode: "GFQ-800",
    categorySlug: "upakovka-liniyalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/bag-making-machine/photo_2026-05-21%2015.29.57.jpeg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/bag-making-machine/photo_2026-05-21%2015.29.58.jpeg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/bag-making-machine/photo_2026-05-21%2015.29.59.jpeg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/bag-making-machine/photo_2026-05-21%2015.30.01.jpeg",
    ],
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Bottom sealing",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 6800,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Ruian Xinye Packing Machine Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2010", quantity: "—" },
          { name: "Factory space", spec: "4 200 m²", quantity: "—" },
          { name: "Experience", spec: "15 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "GFQ-800 — Pastki chok paket tayyorlash mashinasi",
        shortName: "GFQ-800",
        tagline: "Polietilen paketlarni avtomatik ishlab chiqarish uchun yuqori unumli mashina",
        description:
          "GFQ-800 — pastki chok bilan paket tayyorlash mashinasi. Polietilen va boshqa materiallardan turli o'lchamdagi paketlarni ishlab chiqaradi. Ishlab chiqaruvchi: Ruian Xinye Packing Machine Co., Ltd — 2010-yildan buyon 15 yillik tajribaga ega, 4 200 m² zavodda faoliyat yuritadi.",
      },
      ru: {
        name: "GFQ-800 — Машина для изготовления пакетов с донным швом",
        shortName: "GFQ-800",
        tagline:
          "Высокопроизводительная машина для автоматического производства полиэтиленовых пакетов",
        description:
          "GFQ-800 — машина для производства пакетов с донным швом из полиэтилена и других материалов. Производитель: Ruian Xinye Packing Machine Co., Ltd — 15 лет опыта с 2010 г., завод площадью 4 200 м².",
      },
      en: {
        name: "GFQ-800 — Bottom sealing bag making machine",
        shortName: "GFQ-800",
        tagline: "High-speed automatic bag production from polyethylene film",
        description:
          "GFQ-800 bottom sealing bag making machine produces bags of various sizes from polyethylene and other film materials. Manufacturer: Ruian Xinye Packing Machine Co., Ltd — 15 years of experience since 2010, operating from a 4,200 m² facility.",
      },
    },
  },
  // ── Toys — Yiwu Jinxin (Maxsus texnikalar) ───────────────────────────────
  {
    slug: "yiwu-jinxin-toys",
    modelCode: "TOY-JX",
    categorySlug: "oyinchoqlar",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: toysImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Product details",
        items: [{ name: "Unit price", spec: "USD 0.11 / pc", quantity: "—" }],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Yiwu Jinxin Toys Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2001", quantity: "—" },
          { name: "Factory space", spec: "12 050 m²", quantity: "—" },
          { name: "Experience", spec: "24 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "O'yinchoqlar katalogi — Yiwu Jinxin",
        shortName: "TOY-JX",
        tagline: "Dona narxi $0.11 — sifatli xitoy o'yinchoqlari",
        description:
          "Yiwu Jinxin Toys Co., Ltd tomonidan ishlab chiqarilgan o'yinchoqlar katalogi. Dona narxi USD 0.11 dan boshlanadi. Kompaniya 2001-yildan buyon 24 yillik tajribaga ega, 12 050 m² maydondagi zavodda faoliyat yuritadi.",
      },
      ru: {
        name: "Каталог игрушек — Yiwu Jinxin",
        shortName: "TOY-JX",
        tagline: "От $0.11/шт — качественные китайские игрушки",
        description:
          "Каталог игрушек от Yiwu Jinxin Toys Co., Ltd. Цена от USD 0.11 за штуку. Компания работает с 2001 года, 24-летний опыт, завод площадью 12 050 м².",
      },
      en: {
        name: "Toys catalogue — Yiwu Jinxin",
        shortName: "TOY-JX",
        tagline: "From $0.11/pc — quality Chinese toys",
        description:
          "Toys catalogue from Yiwu Jinxin Toys Co., Ltd. Unit price from USD 0.11/pc. The company has been operating since 2001 with 24 years of experience from a 12,050 m² facility.",
      },
    },
  },

  // ── CIL-AS-699 Pocket Tissue Production Line (Tualet qog'oz liniyalari) ──
  {
    slug: "cil-as-699-pocket-tissue-paper-production-line",
    modelCode: "CIL-AS-699",
    categorySlug: "tualet-qogoz-liniyalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: cilAs699Images,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 5.5,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Vacuum adsorb folding",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 2840, w: 2650, h: 1720 },
    },
    commercial: {
      containerType: "Seaworthy wooden packing",
      priceUsdExw: 45000,
      deliveryWorkingDays: 75,
      paymentTerms: "30% T/T down payment / 70% T/T before shipment",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Folding machine (CIL-MFT-21C)",
        items: [
          { name: "Designed speed", spec: "800–1 200 pcs/min", quantity: "—" },
          { name: "Stable production speed", spec: "800–1 000 pcs/min", quantity: "—" },
          { name: "Main machine power", spec: "5.5 kW", quantity: "—" },
          { name: "Blower power", spec: "5.5 kW", quantity: "—" },
          { name: "Air pressure", spec: "≥ 0.6 MPa", quantity: "—" },
          {
            name: "Final product — Mini",
            spec: "75 × 52 mm (opening 210 × 210 mm)",
            quantity: "—",
          },
          {
            name: "Final product — Standard",
            spec: "105 × 52 mm (opening 210 × 210 mm)",
            quantity: "—",
          },
          { name: "Weight", spec: "≈ 1 300 kg", quantity: "—" },
        ],
      },
      {
        systemName: "Packing machine (individual bags)",
        items: [
          { name: "Packing size — Standard", spec: "106 × 53 × 26 mm / 10 sheets", quantity: "—" },
          { name: "Packing size — Mini", spec: "72 × 53 × 26 mm / 10 sheets", quantity: "—" },
          { name: "Packing film width — Standard", spec: "150 mm", quantity: "—" },
          { name: "Packing film width — Mini", spec: "116 mm", quantity: "—" },
          { name: "Speed", spec: "50–80 bags/min", quantity: "—" },
          { name: "Overall size (L×W×H)", spec: "2 840 × 2 650 × 1 720 mm", quantity: "—" },
          { name: "Main motor power", spec: "1.1 kW", quantity: "—" },
          { name: "Side-sealing motor power", spec: "0.18 kW", quantity: "—" },
          { name: "Heating power", spec: "3.4 kW", quantity: "—" },
          { name: "Power supply", spec: "4.5 kW / 380V 50Hz", quantity: "—" },
          { name: "Air pressure", spec: "0.3–0.4 MPa", quantity: "—" },
          { name: "Weight", spec: "≈ 1 500 kg", quantity: "—" },
        ],
      },
      {
        systemName: "Medium bag packing machine (CIL-AS-330-A)",
        items: [
          { name: "Speed", spec: "22–42 bags/min", quantity: "—" },
          { name: "Max film width", spec: "≤ 330 mm", quantity: "—" },
          { name: "Packing size", spec: "(50–300) × (40–180) × (10–90) mm", quantity: "—" },
          { name: "Outline dimension", spec: "2 350 × 900 × 1 650 mm", quantity: "—" },
          { name: "Power consumption", spec: "6.6 kW / 380V 50Hz", quantity: "—" },
          { name: "Air pressure", spec: "0.5 MPa", quantity: "—" },
          { name: "Shrink film", spec: "CPP, PE, BOPP (double-sided hot sealing)", quantity: "—" },
          { name: "Machine weight", spec: "750 kg", quantity: "—" },
        ],
      },
      {
        systemName: "Key features",
        items: [
          { name: "Embossing", spec: "Clear embossing design on raw paper", quantity: "—" },
          {
            name: "Tension control",
            spec: "Rolling tension control for variable raw paper",
            quantity: "—",
          },
          {
            name: "Edge finish",
            spec: "Mill edge infolding for elegant appearance",
            quantity: "—",
          },
          { name: "Cutting", spec: "Screw turning knife for easy adjustment", quantity: "—" },
          { name: "Folding method", spec: "Vacuum folding format", quantity: "—" },
          {
            name: "Printing option",
            spec: "Single or double colour printing available",
            quantity: "—",
          },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Quanzhou Xinda Machinery Co., Ltd", quantity: "—" },
          { name: "Established", spec: "1997", quantity: "—" },
          { name: "Experience", spec: "28 years", quantity: "—" },
          {
            name: "Address",
            spec: "No.589 Nanhuan Road, Yuxia Community, Jinlong Street, Licheng Zone, Quanzhou City, Fujian, China",
            quantity: "—",
          },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 150,
        buyerCovers: ["round-trip air tickets", "hotel", "food", "local traffic"],
      },
    },
    i18n: {
      uz: {
        name: "CIL-AS-699 — To'liq avtomatik cho'ntak salfetka ishlab chiqarish liniyasi",
        shortName: "CIL-AS-699",
        tagline: "Minutiga 1200 dona — cho'ntak salfetka burish, qadoqlash va o'rash liniyasi",
        description:
          "CIL-AS-699 — cho'ntak to'qima qog'oz mahsulotlari uchun to'liq avtomatik ishlab chiqarish liniyasi. Vakuum yordamida burish tizimi, minutiga 800–1200 dona tezlik, 5.5 kW quvvat. Mini (75×52 mm) va standart (105×52 mm) o'lchamlarda mahsulot ishlab chiqaradi. Liniya tarkibiga individual qadoqlash mashinasi (50–80 sumka/min) va o'rta sumka qadoqlash mashinasi (22–42 sumka/min) kiradi. FOB Xiamen narxi: USD 45 000. Yetkazib berish muddati: to'lov olgandan so'ng 70–80 kun. Ishlab chiqaruvchi: Quanzhou Xinda Machinery Co., Ltd — 1997-yildan beri 28 yillik tajriba.",
      },
      ru: {
        name: "CIL-AS-699 — Полностью автоматическая линия производства карманных салфеток",
        shortName: "CIL-AS-699",
        tagline: "1 200 шт/мин — линия фальцовки, упаковки и обёртки карманных салфеток",
        description:
          "CIL-AS-699 — полностью автоматическая производственная линия для карманных бумажных салфеток. Вакуумная фальцовка, скорость 800–1 200 шт/мин, мощность 5.5 кВт. Форматы: мини 75×52 мм и стандарт 105×52 мм. В состав линии входят машина поштучной упаковки (50–80 пакетов/мин) и машина групповой упаковки (22–42 пакетов/мин). Цена FOB Сямэнь: USD 45 000. Срок изготовления: 70–80 дней после предоплаты. Производитель: Quanzhou Xinda Machinery Co., Ltd — 28 лет опыта с 1997 г.",
      },
      en: {
        name: "CIL-AS-699 — Full-automatic pocket tissue paper production line",
        shortName: "CIL-AS-699",
        tagline: "1,200 pcs/min — folding, individual packing and medium bag packing line",
        description:
          "The CIL-AS-699 is a complete fully-automatic pocket tissue paper production line combining a high-speed vacuum-fold machine (800–1,200 pcs/min, 5.5 kW) with an individual packing machine (50–80 bags/min) and medium bag packing machine (22–42 bags/min). Produces mini (75×52 mm) and standard (105×52 mm) formats with optional single or double-colour printing. FOB Xiamen price: USD 45,000. Delivery: 70–80 days after down payment. Manufacturer: Quanzhou Xinda Machinery Co., Ltd — 28 years of experience since 1997.",
      },
    },
  },

  // ── HT-500 Stretch Film Rewinding & Slitting (Strech klyonka) ────────────
  {
    slug: "ht-500-stretch-film-rewinding-slitting-machine",
    modelCode: "HT-500",
    categorySlug: "strech-klyonka",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: ht500Images,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 1.5,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "By hand",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 1400, w: 1100, h: 1100 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 2300,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "Blue / Orange / Yellow / Green — as requested",
    },
    configuration: [
      {
        systemName: "Technical specifications",
        items: [
          { name: "Finished product width", spec: "500 mm", quantity: "—" },
          { name: "Motor power", spec: "1.5 / 2.2 kW", quantity: "—" },
          { name: "Linear speed", spec: "400–600 m/min", quantity: "—" },
          { name: "Roll laying mode", spec: "By hand", quantity: "—" },
          { name: "Parent roll diameter (max)", spec: "φ400 mm", quantity: "—" },
          { name: "Parent roll width (max)", spec: "500 mm", quantity: "—" },
          { name: "Parent roll core", spec: '3"', quantity: "—" },
          { name: "Sub-roll width", spec: "30–500 mm", quantity: "—" },
          { name: "Sub-roll diameter (max)", spec: "φ300 mm", quantity: "—" },
          { name: "Sub-roll core", spec: '3", 2", 1.5", 1"', quantity: "—" },
          { name: "Overall dimensions (L×W×H)", spec: "1400 × 1100 × 1100 mm", quantity: "—" },
          { name: "Weight", spec: "700 kg", quantity: "—" },
        ],
      },
      {
        systemName: "Pricing",
        items: [
          { name: "Machine price (EXW)", spec: "USD 2 300", quantity: "—" },
          { name: "Wooden case packaging", spec: "USD 100", quantity: "—" },
          { name: "Transport to Ningbo port", spec: "USD 100", quantity: "—" },
          { name: "Warehouse entry fee", spec: "USD 50", quantity: "—" },
          { name: "Export customs cost", spec: "USD 250", quantity: "—" },
          { name: "FOB Ningbo price", spec: "USD 2 800", quantity: "—" },
        ],
      },
      {
        systemName: "Optional accessories",
        items: [
          {
            name: "Air shaft roller 500 mm",
            spec: "USD 80/pc (2 pcs per size)",
            quantity: "Optional",
          },
          {
            name: "Air shaft roller 1000 mm",
            spec: "USD 150/pc (2 pcs per size)",
            quantity: "Optional",
          },
        ],
      },
      {
        systemName: "Certifications",
        items: [
          { name: "CE Certificate", spec: "Machinery Directive 2006/42/EC", quantity: "—" },
          { name: "Standard", spec: "EN ISO 12100:2010; EN 60204-1:2018", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Ruian Hengtuo Machinery Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2016", quantity: "—" },
          { name: "Factory space", spec: "5 000 m²", quantity: "—" },
          { name: "Experience", spec: "5 years", quantity: "—" },
          {
            name: "Address",
            spec: "XiaWan Industrial Zone, PanDai Street, Ruian City, Zhejiang, China",
            quantity: "—",
          },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HT-500 — Strech plyonkani o'rash va kesish mashinasi",
        shortName: "HT-500",
        tagline: "Katta rulondan kichik rulonlarga qayta o'rash va kesish",
        description:
          "HT-500 — strech plyonkani qayta o'rash va kesish uchun ko'p funksiyali mashina. Katta jumbo rulonlarni 30–500 mm kenglikdagi kichik rulonlarga kesadi. Tezligi 400–600 m/min, quvvati 1.5/2.2 kW. O'lchamlari: 1400×1100×1100 mm, vazni 700 kg. Mashinaning rangi buyurtmaga ko'ra tanlanadi (ko'k, to'q sariq, sariq, yashil). CE sertifikatiga ega. EXW narxi: USD 2 300, FOB Ningbo: USD 2 800. Ishlab chiqaruvchi: Ruian Hengtuo Machinery Co., Ltd — 2016-yildan beri 5 yillik tajriba, 5 000 m² zavod.",
      },
      ru: {
        name: "HT-500 — Машина для перемотки и нарезки стрейч-плёнки",
        shortName: "HT-500",
        tagline: "Перемотка джамбо-рулонов в малые рулоны с онлайн-нарезкой",
        description:
          "HT-500 — многофункциональная машина для перемотки и нарезки стрейч-плёнки. Режет крупные рулоны на малые шириной 30–500 мм. Скорость 400–600 м/мин, мощность 1.5/2.2 кВт. Габариты: 1400×1100×1100 мм, вес 700 кг. Цвет по запросу. Сертификат CE. Цена EXW: USD 2 300, FOB Ningbo: USD 2 800. Производитель: Ruian Hengtuo Machinery Co., Ltd — 5 лет опыта с 2016 г., завод 5 000 м².",
      },
      en: {
        name: "HT-500 — Stretch film rewinding and slitting machine",
        shortName: "HT-500",
        tagline: "Rewind jumbo rolls into small rolls with online slitting",
        description:
          "The HT-500 is a multi-functional stretch film rewinding and slitting machine that cuts large jumbo rolls into small rolls 30–500 mm wide. Speed: 400–600 m/min, power: 1.5/2.2 kW. Dimensions: 1400×1100×1100 mm, weight: 700 kg. Machine color available in blue, orange, yellow or green on request. CE certified. EXW price: USD 2,300 — FOB Ningbo: USD 2,800. Manufacturer: Ruian Hengtuo Machinery Co., Ltd — 5 years of experience since 2016, 5,000 m² facility.",
      },
    },
  },

  // ── Vegetable Slicer (Oziq ovqat uskunalari) ─────────────────────────────
  {
    slug: "vegetable-slicer-300kg",
    modelCode: "VS-300",
    categorySlug: "oziq-ovqat-uskunalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: vegetableSlicerImages,
    spec: {
      productivity: { value: 300, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 1.5,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 350, w: 490, h: 600 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 246,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Machine specifications",
        items: [
          { name: "Dimensions (L×W×H)", spec: "350 × 490 × 600 mm", quantity: "—" },
          { name: "Voltage", spec: "220V 50Hz", quantity: "—" },
          { name: "Power", spec: "1.5 kW", quantity: "—" },
          { name: "Output", spec: "300 kg/h", quantity: "—" },
          { name: "Weight", spec: "45 kg", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Zhongji Metal Products Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2021", quantity: "—" },
          { name: "Factory space", spec: "4 000 m²", quantity: "—" },
          { name: "Experience", spec: "5 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "Sabzavot kesish mashinasi VS-300",
        shortName: "VS-300",
        tagline: "Soatiga 300 kg — tez va ishonchli sabzavot kesish",
        description:
          "VS-300 sabzavot kesish mashinasi oziq-ovqat korxonalari uchun mo'ljallangan. 220V 50Hz tarmoqda ishlaydi, 1.5 kW quvvat bilan soatiga 300 kg sabzavotni qayta ishlaydi. O'lchamlari: 350×490×600 mm, vazni 45 kg. Ishlab chiqaruvchi: Zhongji Metal Products Co., Ltd — 2021-yildan beri 5 yillik tajriba, 4 000 m² zavod maydoni.",
      },
      ru: {
        name: "Овощерезка VS-300",
        shortName: "VS-300",
        tagline: "300 кг/ч — быстрая и надёжная нарезка овощей",
        description:
          "Овощерезка VS-300 предназначена для предприятий пищевой промышленности. Работает от сети 220V 50Hz, мощность 1.5 кВт, производительность 300 кг/ч. Габариты: 350×490×600 мм, вес 45 кг. Производитель: Zhongji Metal Products Co., Ltd — 5 лет опыта с 2021 г., площадь завода 4 000 м².",
      },
      en: {
        name: "Vegetable slicer VS-300",
        shortName: "VS-300",
        tagline: "300 kg/h — fast and reliable vegetable slicing",
        description:
          "The VS-300 vegetable slicer is designed for food processing enterprises. Operates on 220V 50Hz, 1.5 kW power, output 300 kg/h. Dimensions: 350×490×600 mm, weight 45 kg. Manufacturer: Zhongji Metal Products Co., Ltd — 5 years of experience since 2021, 4,000 m² factory.",
      },
    },
  },

  // ── Mixer (Maxsus texnikalar) ─────────────────────────────────────────────
  {
    slug: "concrete-mixer-machine",
    modelCode: "MIXER-350",
    categorySlug: "maxsus-texnikalar",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: mixerImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "Mikser — Beton aralashtirgich",
        shortName: "MIXER-350",
        tagline: "Qurilish ishlari uchun ishonchli beton aralashtirgich",
        description:
          "Kichik va o'rta qurilish loyihalari uchun mo'ljallangan beton aralashtirgich. Ishonchli motor va bardoshli korpus bilan uzoq muddatli foydalanishni ta'minlaydi.",
      },
      ru: {
        name: "Миксер — бетоносмеситель",
        shortName: "MIXER-350",
        tagline: "Надёжный бетоносмеситель для строительных работ",
        description:
          "Бетоносмеситель для малых и средних строительных объектов. Надёжный двигатель и прочный корпус обеспечивают долгосрочную эксплуатацию.",
      },
      en: {
        name: "Mixer — Concrete mixer machine",
        shortName: "MIXER-350",
        tagline: "Reliable concrete mixer for construction works",
        description:
          "Concrete mixer designed for small and medium construction projects. Reliable motor and durable body ensure long-term operation.",
      },
    },
  },

  // ── Concrete batching plants ──────────────────────────────────────────────
  {
    slug: "hzs35",
    modelCode: "HZS35",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: [photoAt(0), photoAt(3), photoAt(6)],
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
      priceUsdExw: 0,
      deliveryWorkingDays: 15,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (5 m³)", spec: "PLD1200", quantity: "2 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Belt conveyor", quantity: "3 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS750", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
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
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢219", quantity: "1 set" },
          { name: "Cement silo", spec: "100T", quantity: "1 set" },
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
        tagline: "O'rta hajmdagi qurilish loyihalari uchun soatiga 35 m³ beton",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS35 — modulli beton ishlab chiqarish zavodi. JS750 mikser va PLD1200 dozator bilan jihozlangan, soatiga 35 m³ beton ishlab chiqaradi. Kichik va o'rta qurilish loyihalari uchun ideal yechim.",
      },
      ru: {
        name: "HZS35 — Бетонный завод",
        shortName: "HZS35",
        tagline: "35 м³/ч бетона для средних строительных объектов",
        description:
          "HZS35 от Vericore Global — модульный бетонный завод с миксером JS750 и дозатором PLD1200. Производительность 35 м³/ч, идеален для малых и средних строительных проектов.",
      },
      en: {
        name: "HZS35 — Concrete Batching Plant",
        shortName: "HZS35",
        tagline: "35 m³/h concrete output for medium-scale construction",
        description:
          "The HZS35 from Vericore Global is a modular concrete batching plant equipped with a JS750 mixer and PLD1200 batcher. Producing 35 m³/h, it is the ideal solution for small and medium construction projects.",
      },
    },
  },
  {
    slug: "hzs50",
    modelCode: "HZS50",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: [photoAt(1), photoAt(4), photoAt(7)],
    spec: {
      productivity: { value: 50, unit: "m³/h" },
      cycleTimeSeconds: 72,
      powerKw: 100,
      mixerModel: "JS1000",
      batcherModel: "PLD1600",
      feedingModel: "Lift Hopper",
      dischargeMeters: { min: 3.8, max: 4.2 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 18360, w: 9800, h: 17600 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 0,
      deliveryWorkingDays: 15,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (8 m³)", spec: "PLD1600", quantity: "3 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Belt conveyor", quantity: "3 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS1000", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
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
          { name: "Air compressor", spec: "HTA-100", quantity: "1 set" },
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
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢219", quantity: "1 set" },
          { name: "Cement silo", spec: "100T", quantity: "1 set" },
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
        name: "HZS50 — Beton zavodi",
        shortName: "HZS50",
        tagline: "Soatiga 50 m³ beton — qurilish hajmini oshirish uchun",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS50 — JS1000 mikser va PLD1600 dozator bilan jihozlangan beton zavodi. Soatiga 50 m³ quvvat bilan o'rta va yirik qurilish loyihalarini ta'minlaydi.",
      },
      ru: {
        name: "HZS50 — Бетонный завод",
        shortName: "HZS50",
        tagline: "50 м³/ч для средних и крупных строительных проектов",
        description:
          "HZS50 от Vericore Global — бетонный завод с миксером JS1000 и дозатором PLD1600. Производительность 50 м³/ч покрывает потребности средних и крупных строительных проектов.",
      },
      en: {
        name: "HZS50 — Concrete Batching Plant",
        shortName: "HZS50",
        tagline: "50 m³/h capacity for growing construction demands",
        description:
          "The HZS50 from Vericore Global is equipped with a JS1000 mixer and PLD1600 batcher, delivering 50 m³/h to serve medium and large construction projects efficiently.",
      },
    },
  },
  {
    slug: "hzs75",
    modelCode: "HZS75",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: false,
    isPopular: true,
    images: [photoAt(2), photoAt(5), photoAt(8)],
    spec: {
      productivity: { value: 75, unit: "m³/h" },
      cycleTimeSeconds: 75,
      powerKw: 165,
      mixerModel: "JS1500",
      batcherModel: "PLD2400",
      feedingModel: "Lift Hopper",
      dischargeMeters: { min: 3.8, max: 4.0 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 21500, w: 9500, h: 17600 },
    },
    commercial: {
      containerType: "1×45HQ+",
      priceUsdExw: 0,
      deliveryWorkingDays: 10,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (10 m³)", spec: "PLD2400", quantity: "3 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Roller motor", quantity: "1 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS1500", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
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
          { name: "Air compressor", spec: "HTA-100", quantity: "1 set" },
          { name: "Electromagnetic valve", quantity: "1 set" },
          { name: "Gasholder", quantity: "1 set" },
          { name: "Pipeline system", quantity: "1 set" },
        ],
      },
      {
        systemName: "Electric control system",
        items: [
          { name: "Current cabinet", quantity: "1 set" },
          { name: "Control computer", quantity: "1 set" },
          { name: "Strong electric cabinet", quantity: "1 set" },
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢219×9m", quantity: "1 set" },
          { name: "Flaky cement silo", spec: "120T", quantity: "1 set" },
        ],
      },
    ],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 100,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HZS75 — Beton zavodi",
        shortName: "HZS75",
        tagline: "Yirik qurilish va infratuzilma loyihalari uchun soatiga 75 m³",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS75 — JS1500 mikser va PLD2400 dozator bilan jihozlangan yuqori unumli beton zavodi. Soatiga 75 m³ quvvat bilan yirik qurilish va infratuzilma loyihalarini ta'minlaydi.",
      },
      ru: {
        name: "HZS75 — Бетонный завод",
        shortName: "HZS75",
        tagline: "75 м³/ч для крупных строительных и инфраструктурных объектов",
        description:
          "HZS75 от Vericore Global — высокопроизводительный бетонный завод с миксером JS1500 и дозатором PLD2400. 75 м³/ч для крупных строительных и инфраструктурных проектов.",
      },
      en: {
        name: "HZS75 — Concrete Batching Plant",
        shortName: "HZS75",
        tagline: "75 m³/h for large construction and infrastructure projects",
        description:
          "The HZS75 from Vericore Global is a high-capacity plant featuring a JS1500 mixer and PLD2400 batcher, delivering 75 m³/h for large-scale construction and infrastructure projects.",
      },
    },
  },
  {
    slug: "hzs90",
    modelCode: "HZS90",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: false,
    isPopular: false,
    images: [photoAt(9), photoAt(12), photoAt(15)],
    spec: {
      productivity: { value: 90, unit: "m³/h" },
      cycleTimeSeconds: 72,
      powerKw: 180,
      mixerModel: "JS1500",
      batcherModel: "PLD2400",
      feedingModel: "Belt Conveyor",
      dischargeMeters: { min: 3.8, max: 4.2 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×45HQ",
      priceUsdExw: 0,
      deliveryWorkingDays: 10,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (12 m³)", spec: "PLD2400", quantity: "3 set" },
          { name: "Weighing hopper", quantity: "3 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Roller motor", quantity: "1 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS1500", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
          { name: "Rail rack", quantity: "1 set" },
        ],
      },
      {
        systemName: "Belt conveyor",
        items: [
          { name: "Roller motor", quantity: "1 set" },
          { name: "Rubber conveyor belt", quantity: "1 set" },
          { name: "Buffer hopper", quantity: "1 set" },
          { name: "Belt conveyor frame", quantity: "1 set" },
          { name: "Various idlers", quantity: "1 set" },
        ],
      },
      {
        systemName: "Water, cement & additive weighing",
        items: [
          { name: "Water flow-meter", quantity: "1 set" },
          { name: "Water pump", quantity: "1 set" },
          { name: "Cement weighing bin", quantity: "1 set" },
          { name: "Cement weigher", quantity: "1 set" },
          { name: "Additive weighing bin", quantity: "1 set" },
          { name: "Butterfly valves", quantity: "3 set" },
        ],
      },
      {
        systemName: "Pneumatic & electric control",
        items: [
          { name: "Air compressor", quantity: "1 set" },
          { name: "Electromagnetic valve", quantity: "1 set" },
          { name: "Gasholder", quantity: "1 set" },
          { name: "Current cabinet", quantity: "1 set" },
          { name: "Control computer", quantity: "1 set" },
          { name: "Strong electric cabinet", quantity: "1 set" },
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢219×9m", quantity: "1 set" },
          { name: "Cement silo", spec: "150T", quantity: "1 set" },
        ],
      },
    ],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 100,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HZS90 — Beton zavodi",
        shortName: "HZS90",
        tagline: "Soatiga 90 m³ — katta hajmli qurilish uchun kuchli yechim",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS90 — tasmali konveyer va JS1500 mikser bilan jihozlangan kuchli beton zavodi. Soatiga 90 m³ quvvat bilan yirik qurilish ob'ektlarini uzluksiz ta'minlaydi.",
      },
      ru: {
        name: "HZS90 — Бетонный завод",
        shortName: "HZS90",
        tagline: "90 м³/ч — мощное решение для крупных стройплощадок",
        description:
          "HZS90 от Vericore Global — высокопроизводительный завод с ленточным конвейером и миксером JS1500. 90 м³/ч для бесперебойного снабжения крупных строительных объектов.",
      },
      en: {
        name: "HZS90 — Concrete Batching Plant",
        shortName: "HZS90",
        tagline: "90 m³/h — powerful output for large construction sites",
        description:
          "The HZS90 from Vericore Global features a belt conveyor feeding system and JS1500 mixer, producing 90 m³/h to keep large construction sites running without interruption.",
      },
    },
  },
  {
    slug: "hzs120",
    modelCode: "HZS120",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: false,
    isPopular: false,
    images: [photoAt(10), photoAt(13), photoAt(16)],
    spec: {
      productivity: { value: 120, unit: "m³/h" },
      cycleTimeSeconds: 60,
      powerKw: 200,
      mixerModel: "JS2000",
      batcherModel: "PLD3200",
      feedingModel: "Belt Conveyor",
      dischargeMeters: { min: 4.0, max: 4.5 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 36000, w: 18000, h: 17600 },
    },
    commercial: {
      containerType: "45HQ + 40HQ",
      priceUsdExw: 0,
      deliveryWorkingDays: 15,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (15 m³)", spec: "PLD3200", quantity: "4 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Roller motor", quantity: "1 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS2000", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
          { name: "Rail rack", quantity: "1 set" },
        ],
      },
      {
        systemName: "Belt conveyor",
        items: [
          { name: "Roller motor", quantity: "1 set" },
          { name: "Rubber conveyor belt", quantity: "1 set" },
          { name: "Buffer hopper", quantity: "1 set" },
          { name: "Belt conveyor frame", quantity: "1 set" },
          { name: "Various idlers", quantity: "1 set" },
        ],
      },
      {
        systemName: "Water, cement & additive weighing",
        items: [
          { name: "Water flow-meter", quantity: "1 set" },
          { name: "Water pump", quantity: "1 set" },
          { name: "Cement weighing bin", quantity: "2 set" },
          { name: "Cement weigher", quantity: "2 set" },
          { name: "Additive weighing bin", quantity: "1 set" },
          { name: "Butterfly valves", quantity: "various" },
        ],
      },
      {
        systemName: "Pneumatic & electric control",
        items: [
          { name: "Air compressor", spec: "HTA-100", quantity: "1 set" },
          { name: "Electromagnetic valve", quantity: "1 set" },
          { name: "Gasholder", quantity: "1 set" },
          { name: "Current cabinet", quantity: "1 set" },
          { name: "Control computer", quantity: "1 set" },
          { name: "Strong electric cabinet", quantity: "1 set" },
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢273×9m", quantity: "1 set" },
          { name: "Flaky cement silo", spec: "150T", quantity: "1 set" },
        ],
      },
    ],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 100,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HZS120 — Beton zavodi",
        shortName: "HZS120",
        tagline: "Soatiga 120 m³ — sanoat miqyosidagi loyihalar uchun",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS120 — JS2000 mikser va PLD3200 dozator bilan jihozlangan sanoat miqyosidagi beton zavodi. 4 ta 15 m³ hajmli bunker va tasmali konveyer bilan soatiga 120 m³ beton ishlab chiqaradi.",
      },
      ru: {
        name: "HZS120 — Бетонный завод",
        shortName: "HZS120",
        tagline: "120 м³/ч — промышленный масштаб производства бетона",
        description:
          "HZS120 от Vericore Global — промышленный бетонный завод с миксером JS2000 и дозатором PLD3200. 4 бункера по 15 м³ и ленточный конвейер обеспечивают 120 м³/ч.",
      },
      en: {
        name: "HZS120 — Concrete Batching Plant",
        shortName: "HZS120",
        tagline: "120 m³/h — industrial-scale concrete production",
        description:
          "The HZS120 from Vericore Global is an industrial-scale plant with a JS2000 mixer and PLD3200 batcher. Four 15 m³ hoppers and a belt conveyor system deliver 120 m³/h.",
      },
    },
  },
  {
    slug: "hzs180",
    modelCode: "HZS180",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: false,
    isPopular: false,
    images: [photoAt(11), photoAt(14), photoAt(16)],
    spec: {
      productivity: { value: 180, unit: "m³/h" },
      cycleTimeSeconds: 60,
      powerKw: 250,
      mixerModel: "JS3000",
      batcherModel: "PLD4800",
      feedingModel: "Belt Conveyor",
      dischargeMeters: { min: 4.0, max: 4.5 },
      airCompressorKw: 11,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "2×45HQ+",
      priceUsdExw: 0,
      deliveryWorkingDays: 15,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (20 m³)", spec: "PLD4800", quantity: "4 set" },
          { name: "Weighing hopper", quantity: "4 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Roller motor", quantity: "1 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS3000", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
          { name: "Rail rack", quantity: "1 set" },
        ],
      },
      {
        systemName: "Belt conveyor",
        items: [
          { name: "Roller motor", quantity: "1 set" },
          { name: "Rubber conveyor belt", quantity: "1 set" },
          { name: "Buffer hopper", quantity: "1 set" },
          { name: "Belt conveyor frame", quantity: "1 set" },
          { name: "Various idlers", quantity: "1 set" },
        ],
      },
      {
        systemName: "Water, cement & additive weighing",
        items: [
          { name: "Water flow-meter", quantity: "1 set" },
          { name: "Water pump", quantity: "1 set" },
          { name: "Cement weighing bin", quantity: "1 set" },
          { name: "Cement weigher", quantity: "1 set" },
          { name: "Additive weighing bin", quantity: "1 set" },
          { name: "Butterfly valves", quantity: "various" },
        ],
      },
      {
        systemName: "Pneumatic & electric control",
        items: [
          { name: "Air compressor", spec: "HTA-120", quantity: "1 set" },
          { name: "Electromagnetic valve", quantity: "1 set" },
          { name: "Gasholder", quantity: "1 set" },
          { name: "Current cabinet", quantity: "1 set" },
          { name: "Control computer", quantity: "1 set" },
          { name: "Strong electric cabinet", quantity: "1 set" },
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢325×9m", quantity: "1 set" },
          { name: "Flaky cement silo", spec: "150T", quantity: "1 set" },
        ],
      },
    ],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 100,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HZS180 — Beton zavodi",
        shortName: "HZS180",
        tagline: "Soatiga 180 m³ — mega loyihalar uchun eng yuqori quvvat",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS180 — JS3000 mikser va PLD4800 dozator bilan jihozlangan eng yuqori quvvatli beton zavodi. 4 ta 20 m³ bunker bilan soatiga 180 m³ beton ishlab chiqarib, ko'p qavalli binolar va katta infratuzilma loyihalarini ta'minlaydi.",
      },
      ru: {
        name: "HZS180 — Бетонный завод",
        shortName: "HZS180",
        tagline: "180 м³/ч — максимальная мощность для мегапроектов",
        description:
          "HZS180 от Vericore Global — флагманский бетонный завод с миксером JS3000 и дозатором PLD4800. 4 бункера по 20 м³ обеспечивают 180 м³/ч для многоэтажных и инфраструктурных мегапроектов.",
      },
      en: {
        name: "HZS180 — Concrete Batching Plant",
        shortName: "HZS180",
        tagline: "180 m³/h — maximum capacity for mega-projects",
        description:
          "The HZS180 from Vericore Global is the flagship plant with a JS3000 mixer and PLD4800 batcher. Four 20 m³ hoppers produce 180 m³/h for high-rise construction and large infrastructure mega-projects.",
      },
    },
  },
];
