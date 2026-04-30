export interface BlogPost {
  slug: string;
  publishedAt: string;
  readMinutes: number;
  category: "guide" | "case-study" | "calculator";
  hero: string;
  i18n: {
    uz: { title: string; excerpt: string; body: string };
    ru: { title: string; excerpt: string; body: string };
    en: { title: string; excerpt: string; body: string };
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "beton-zavodini-qanday-ochish",
    publishedAt: "2026-04-01",
    readMinutes: 8,
    category: "guide",
    hero: "/images/hero-concrete-plant.png",
    i18n: {
      uz: {
        title: "Beton zavodini qanday ochish kerak?",
        excerpt:
          "Bizneszga nimadan boshlash kerak, qancha investitsiya qilish kerak va qaysi modelni tanlash haqida amaliy qo'llanma.",
        body: "Investitsiya hisob-kitobi, joy tanlash, ruxsat olish va ishchi kuchini yollash bo'yicha to'liq qo'llanma.",
      },
      ru: {
        title: "Как открыть бетонный завод?",
        excerpt:
          "С чего начать бизнес, сколько инвестировать и какую модель выбрать — практическое руководство.",
        body: "Расчёт инвестиций, выбор площадки, получение разрешений и набор персонала — полное руководство.",
      },
      en: {
        title: "How to start a concrete plant business?",
        excerpt: "Where to start, how much to invest, which model to pick — a practical guide.",
        body: "Investment calculation, site selection, permits and hiring — full playbook.",
      },
    },
  },
  {
    slug: "roi-hisob-kitobi",
    publishedAt: "2026-03-20",
    readMinutes: 5,
    category: "calculator",
    hero: "/images/installation-engineers.png",
    i18n: {
      uz: {
        title: "ROI hisob-kitobi: 12 oyda investitsiya qaytariladimi?",
        excerpt:
          "HZS35 modelida hisob-kitob: kunlik 200 m³ ishlab chiqarish va 11 oyda foyda olish.",
        body: "Aniq raqamlar bilan ROI hisobini ko'ring.",
      },
      ru: {
        title: "Расчёт ROI: окупится ли за 12 месяцев?",
        excerpt: "Расчёт на HZS35: 200 м³/день и прибыль за 11 месяцев.",
        body: "Конкретные цифры расчёта окупаемости.",
      },
      en: {
        title: "ROI calculation: 12-month payback?",
        excerpt: "Sample run on HZS35: 200 m³/day and 11-month payback.",
        body: "Concrete payback numbers walked through.",
      },
    },
  },
  {
    slug: "xitoydan-import-qoidalari",
    publishedAt: "2026-03-05",
    readMinutes: 6,
    category: "guide",
    hero: "/images/logistics-container.png",
    i18n: {
      uz: {
        title: "Xitoydan import: bojxona, hujjatlar va xatolar",
        excerpt: "Yangi sotib oluvchilar uchun import jarayoni bo'yicha tezkor qo'llanma.",
        body: "Bojxona deklaratsiyasi, sertifikatlar va shartnoma shartlari.",
      },
      ru: {
        title: "Импорт из Китая: таможня, документы и ошибки",
        excerpt: "Гайд для новых импортёров.",
        body: "Таможенные декларации, сертификаты и условия контракта.",
      },
      en: {
        title: "Importing from China: customs, paperwork & pitfalls",
        excerpt: "Quick playbook for first-time buyers.",
        body: "Customs declarations, certificates and contract terms.",
      },
    },
  },
  {
    slug: "case-fergana-hzs50",
    publishedAt: "2026-02-15",
    readMinutes: 7,
    category: "case-study",
    hero: "/images/category-brick-factory.png",
    i18n: {
      uz: {
        title: "Case: Farg'onada HZS50 — investitsiya 11 oyda qaytdi",
        excerpt: "Real biznes case: 42 ming dollarlik zavod 11 oyda qanday foyda berdi.",
        body: "Mijozimizning haqiqiy raqamlari va o'rganishlari.",
      },
      ru: {
        title: "Кейс: HZS50 в Фергане — окупился за 11 месяцев",
        excerpt: "Реальный кейс: завод за $42k вернул инвестиции за 11 месяцев.",
        body: "Реальные цифры и уроки клиента.",
      },
      en: {
        title: "Case study: HZS50 in Fergana — 11-month payback",
        excerpt: "A real customer's $42k plant paid back in 11 months.",
        body: "Real numbers and lessons learned.",
      },
    },
  },
  {
    slug: "kafel-vs-aac",
    publishedAt: "2026-02-01",
    readMinutes: 4,
    category: "guide",
    hero: "/images/category-tile-line.png",
    i18n: {
      uz: {
        title: "Kafel yoki gazobeton — qaysi biri ko'proq foyda keltiradi?",
        excerpt: "Bozor talabi va investitsiya bo'yicha taqqoslash.",
        body: "Qaysi yo'nalish sizning hududingiz uchun ma'qulroq.",
      },
      ru: {
        title: "Плитка или газобетон — что прибыльнее?",
        excerpt: "Сравнение по спросу и инвестициям.",
        body: "Какое направление выгоднее в вашем регионе.",
      },
      en: {
        title: "Tile vs. AAC — which is more profitable?",
        excerpt: "Demand and investment comparison.",
        body: "Which vertical fits your region best.",
      },
    },
  },
  {
    slug: "kafolat-va-servis",
    publishedAt: "2026-01-20",
    readMinutes: 3,
    category: "guide",
    hero: "/images/installation-engineers.png",
    i18n: {
      uz: {
        title: "Kafolat va servis: 15 oydan keyin nima bo'ladi?",
        excerpt: "Ehtiyot qismlar, servis xizmati va uzoq muddatli qo'llab-quvvatlash.",
        body: "VeriCore servis siyosati to'liq batafsil.",
      },
      ru: {
        title: "Гарантия и сервис: что после 15 месяцев?",
        excerpt: "Запчасти, сервис и долгосрочная поддержка.",
        body: "Сервисная политика VeriCore во всех деталях.",
      },
      en: {
        title: "Warranty & service: what happens after 15 months?",
        excerpt: "Spare parts, service and long-term support.",
        body: "VeriCore's full service policy explained.",
      },
    },
  },
];
