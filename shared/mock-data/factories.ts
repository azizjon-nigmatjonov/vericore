import { photoAt } from "@shared/config/site-photos";

export interface OwnedFactory {
  id: string;
  image: string;
  yearStarted: number;
  i18n: {
    uz: { name: string; location: string };
    ru: { name: string; location: string };
    en: { name: string; location: string };
  };
}

export const OWN_FACTORIES: OwnedFactory[] = [
  {
    id: "tashkent-industrial-park",
    image: photoAt(3),
    yearStarted: 2014,
    i18n: {
      uz: { name: "Toshkent sanoat parki", location: "Toshkent shahri" },
      ru: { name: "Ташкентский индустриальный парк", location: "г. Ташкент" },
      en: { name: "Tashkent Industrial Park", location: "Tashkent city" },
    },
  },
  {
    id: "samarkand-block-plant",
    image: photoAt(4),
    yearStarted: 2016,
    i18n: {
      uz: { name: "Samarqand blok zavodi", location: "Samarqand viloyati" },
      ru: { name: "Самаркандский блок-завод", location: "Самаркандская обл." },
      en: { name: "Samarkand Block Plant", location: "Samarkand region" },
    },
  },
  {
    id: "fergana-concrete",
    image: photoAt(5),
    yearStarted: 2018,
    i18n: {
      uz: { name: "Farg'ona beton zavodi", location: "Farg'ona viloyati" },
      ru: { name: "Ферганский бетонный завод", location: "Ферганская обл." },
      en: { name: "Fergana Concrete Plant", location: "Fergana region" },
    },
  },
  {
    id: "namangan-tile-line",
    image: photoAt(6),
    yearStarted: 2019,
    i18n: {
      uz: { name: "Namangan kafel liniyasi", location: "Namangan viloyati" },
      ru: { name: "Наманганская плиточная линия", location: "Наманганская обл." },
      en: { name: "Namangan Tile Line", location: "Namangan region" },
    },
  },
  {
    id: "andijan-aac",
    image: photoAt(7),
    yearStarted: 2020,
    i18n: {
      uz: { name: "Andijon gazobeton liniyasi", location: "Andijon viloyati" },
      ru: { name: "Андижанский газобетон", location: "Андижанская обл." },
      en: { name: "Andijan AAC line", location: "Andijan region" },
    },
  },
  {
    id: "bukhara-metal",
    image: photoAt(8),
    yearStarted: 2021,
    i18n: {
      uz: { name: "Buxoro metall konstruksiya", location: "Buxoro viloyati" },
      ru: { name: "Бухарские металлоконструкции", location: "Бухарская обл." },
      en: { name: "Bukhara Metal Construction", location: "Bukhara region" },
    },
  },
  {
    id: "kashkadarya-cement",
    image: photoAt(10),
    yearStarted: 2022,
    i18n: {
      uz: { name: "Qashqadaryo sement", location: "Qashqadaryo viloyati" },
      ru: { name: "Кашкадарьинский цемент", location: "Кашкадарьинская обл." },
      en: { name: "Kashkadarya Cement", location: "Kashkadarya region" },
    },
  },
  {
    id: "khorezm-brick",
    image: photoAt(11),
    yearStarted: 2023,
    i18n: {
      uz: { name: "Xorazm g'isht zavodi", location: "Xorazm viloyati" },
      ru: { name: "Хорезмский кирпичный", location: "Хорезмская обл." },
      en: { name: "Khorezm Brick Factory", location: "Khorezm region" },
    },
  },
  {
    id: "navoi-aggregates",
    image: photoAt(12),
    yearStarted: 2023,
    i18n: {
      uz: { name: "Navoiy inert materiallar", location: "Navoiy viloyati" },
      ru: { name: "Навоийские инертные", location: "Навоийская обл." },
      en: { name: "Navoiy Aggregates", location: "Navoiy region" },
    },
  },
  {
    id: "surkhandarya-tile",
    image: photoAt(13),
    yearStarted: 2024,
    i18n: {
      uz: { name: "Surxondaryo kafel zavodi", location: "Surxondaryo viloyati" },
      ru: { name: "Сурхандарьинская плитка", location: "Сурхандарьинская обл." },
      en: { name: "Surkhandarya Tile Plant", location: "Surkhandarya region" },
    },
  },
];
