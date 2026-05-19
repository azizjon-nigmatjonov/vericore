import { photoAt } from "@shared/config/site-photos";

export interface Project {
  slug: string;
  year: number;
  regionSlug: string;
  categorySlug: string;
  featured: boolean;
  images: string[];
  i18n: Record<
    "uz" | "ru" | "en",
    {
      title: string;
      location: string;
      tagline: string;
      summary: string;
      challenge: string;
      solution: string;
      equipment: string;
      results: string;
    }
  >;
  stats: {
    capacityLabel: { uz: string; ru: string; en: string };
    capacityValue: string;
    durationDays: number;
    engineers: number;
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "toshkent-beton-markazi",
    year: 2023,
    regionSlug: "tashkent-city",
    categorySlug: "beton-zavodlari",
    featured: true,
    images: [photoAt(0), photoAt(1), photoAt(2)],
    stats: {
      capacityLabel: {
        uz: "Ishlab chiqarish quvvati",
        ru: "Производительность",
        en: "Production capacity",
      },
      capacityValue: "60 m³/soat",
      durationDays: 45,
      engineers: 2,
    },
    i18n: {
      uz: {
        title: "Toshkent Beton Markazi",
        location: "Toshkent shahri, Yunusobod tumani",
        tagline: "To'liq tsiklli beton zavodi — loyiha, yetkazib berish va ishga tushirish",
        summary:
          "Verikore Global jamoasi Toshkentda zamonaviy beton ishlab chiqarish markazini tashkil qilish uchun HZS seriyali beton zavodini tanlab, yetkazib berdi va ishga tushirdi.",
        challenge:
          "Mijoz qisqa muddatda barqaror sifatli beton ishlab chiqarishni boshlash va mahalliy qurilish bozoridagi talabni qondirishni maqsad qilgan.",
        solution:
          "Biz loyiha hajmini tahlil qildik, HZS50 liniyasini tanladik, logistika va bojxona jarayonlarini boshqarib, joyda o'rnatish va operatorlarni o'qitishni amalga oshirdik.",
        equipment:
          "HZS50 beton zavodi, JS1000 mikser, PLD1200 dозатор, nazorat xonasi va qo'shimcha filtr tizimi.",
        results:
          "Zavod reja bo'yicha ishga tushirildi, birinchi oyda 2 400 m³ dan ortiq beton ishlab chiqarildi, 15 oy kafolat xizmati boshlandi.",
      },
      ru: {
        title: "Ташкентский Бетонный Центр",
        location: "г. Ташкент, Юнусабадский район",
        tagline: "Полный цикл бетонного завода — проект, поставка и запуск",
        summary:
          "Команда Verikore Global подобрала, поставила и запустила линию HZS для современного бетонного производства в Ташкенте.",
        challenge:
          "Заказчику нужно было быстро выйти на стабильный выпуск бетона и закрыть спрос строительного рынка региона.",
        solution:
          "Мы провели анализ объёма, выбрали линию HZS50, организовали логистику и таможню, выполнили монтаж и обучение операторов на площадке.",
        equipment:
          "Бетонный завод HZS50, смеситель JS1000, дозатор PLD1200, пост управления и дополнительная фильтрация.",
        results:
          "Завод запущен по графику, за первый месяц произведено более 2 400 м³ бетона, стартовало 15-месячное гарантийное обслуживание.",
      },
      en: {
        title: "Tashkent Concrete Center",
        location: "Tashkent, Yunusabad district",
        tagline: "Full-cycle concrete plant — engineering, delivery, and commissioning",
        summary:
          "The Verikore Global team selected, delivered, and commissioned an HZS batching plant for a modern concrete production hub in Tashkent.",
        challenge:
          "The client needed to start reliable concrete output quickly and meet demand from the local construction market.",
        solution:
          "We sized the project, specified an HZS50 line, managed logistics and customs, then installed the plant and trained operators on site.",
        equipment:
          "HZS50 batching plant, JS1000 mixer, PLD1200 batcher, control room, and auxiliary filtration.",
        results:
          "The plant went live on schedule, producing over 2,400 m³ in the first month with 15-month warranty service started.",
      },
    },
  },
  {
    slug: "samarqand-gisht-zavodi",
    year: 2022,
    regionSlug: "samarkand",
    categorySlug: "gisht-zavodlari",
    featured: false,
    images: [photoAt(3), photoAt(4)],
    stats: {
      capacityLabel: {
        uz: "Kunlik chiqarish",
        ru: "Суточный выпуск",
        en: "Daily output",
      },
      capacityValue: "120 000 dona",
      durationDays: 38,
      engineers: 2,
    },
    i18n: {
      uz: {
        title: "Samarqand g'isht zavodi",
        location: "Samarqand viloyati",
        tagline: "Avtomatlashtirilgan g'isht ishlab chiqarish liniyasi",
        summary: "To'liq avtomat g'isht liniyasi — loyiha, montaj va ishga tushirish.",
        challenge: "Mavjud sexni zamonaviylashtirish va energiya sarfini kamaytirish.",
        solution: "Liniya konfiguratsiyasi, yetkazib berish va joyda sozlash.",
        equipment: "Press va quritish konveyeri, boshqaruv paneli.",
        results: "Ishlab chiqarish 28% ga oshdi, xodimlar xavfsizligi yaxshilandi.",
      },
      ru: {
        title: "Самаркандский кирпичный завод",
        location: "Самаркандская область",
        tagline: "Автоматизированная линия производства кирпича",
        summary: "Полный цикл — проектирование, поставка и запуск линии.",
        challenge: "Модернизация цеха и снижение энергопотребления.",
        solution: "Конфигурация линии, логистика и пусконаладка на объекте.",
        equipment: "Пресс, сушильный конвейер, панель управления.",
        results: "Выпуск вырос на 28%, улучшена безопасность персонала.",
      },
      en: {
        title: "Samarkand Brick Plant",
        location: "Samarkand region",
        tagline: "Automated brick production line",
        summary: "Turnkey brick line — engineering, delivery, and commissioning.",
        challenge: "Modernize the existing shop and cut energy use.",
        solution: "Line configuration, logistics, and on-site tuning.",
        equipment: "Press, drying conveyor, control panel.",
        results: "Output rose 28% with improved worker safety.",
      },
    },
  },
  {
    slug: "fargona-plastik-idish",
    year: 2024,
    regionSlug: "fergana",
    categorySlug: "plastik-idishlar",
    featured: false,
    images: [photoAt(5), photoAt(6)],
    stats: {
      capacityLabel: {
        uz: "Sikl vaqti",
        ru: "Время цикла",
        en: "Cycle time",
      },
      capacityValue: "18 s",
      durationDays: 32,
      engineers: 1,
    },
    i18n: {
      uz: {
        title: "Farg'ona plastik idish sexi",
        location: "Farg'ona viloyati",
        tagline: "In'ektsiya molding liniyasi",
        summary: "Plastik idishlar uchun to'liq ishlab chiqarish liniyasi.",
        challenge: "Yangi mahsulot turini tez bozorga chiqarish.",
        solution: "Qoliplar, extruder va avtomatlashtirish tizimini jamlash.",
        equipment: "In'ektsiya presslari, sovitish konveyeri, robot manipulyator.",
        results: "3 ta yangi SKU ishlab chiqarishga chiqarildi.",
      },
      ru: {
        title: "Ферганский цех пластиковой тары",
        location: "Ферганская область",
        tagline: "Линия литья под давлением",
        summary: "Полный производственный цикл пластиковой тары.",
        challenge: "Быстрый вывод новой номенклатуры на рынок.",
        solution: "Подбор пресс-форм, экструдера и автоматизации.",
        equipment: "ТПА, конвейер охлаждения, робот-манипулятор.",
        results: "Запущены 3 новых SKU.",
      },
      en: {
        title: "Fergana Plastic Packaging Plant",
        location: "Fergana region",
        tagline: "Injection molding line",
        summary: "Full production line for plastic containers.",
        challenge: "Launch new SKUs to market quickly.",
        solution: "Integrated molds, extruder, and automation.",
        equipment: "Injection presses, cooling conveyor, robot arm.",
        results: "Three new SKUs brought into production.",
      },
    },
  },
];
