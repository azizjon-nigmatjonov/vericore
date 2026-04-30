export const SITE_CONFIG = {
  name: "VeriCore Global",
  legalName: "VeriCore Global LLC",
  domain: "vericore.uz",
  url: "https://vericore.uz",
  description:
    "Direct-from-China industrial equipment importer in Uzbekistan since 2012. Concrete plants, brick lines, AAC, ceramic tile lines, slate, metal-construction, generators, cement plants — at factory price with 0% commission.",
  founded: 2012,
  ownFactoriesCount: 10,
  warrantyMonths: 15,
  serviceFeePercent: 0,
  contact: {
    phone: "+998 99 491 28 30",
    phoneDigits: "+998994912830",
    email: "info@vericore.uz",
    telegram: "vericoreglobal",
    telegramUrl: "https://t.me/vericoreglobal",
    whatsapp: "+998994912830",
    whatsappUrl: "https://wa.me/998994912830",
    workingHours: "Mon–Sat 9:00–18:00",
  },
  address: {
    country: "UZ",
    region: "Tashkent",
    locality: "Tashkent",
    district: "Yunusobod",
    addressLine: "Yunusobod tumani, 4-mavze",
    postalCode: "100000",
    geo: { lat: 41.357, lng: 69.288 },
  },
  social: {
    telegram: "https://t.me/vericoreglobal",
    instagram: "https://instagram.com/vericoreglobal",
    youtube: "https://youtube.com/@vericoreglobal",
    facebook: "https://facebook.com/vericoreglobal",
  },
  ogImage: "/images/og-default.png",
} as const;

export type SiteConfig = typeof SITE_CONFIG;
