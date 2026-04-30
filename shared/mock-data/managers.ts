export interface Manager {
  id: string;
  name: string;
  role: string;
  photo: string;
  phone: string;
  telegram: string;
  whatsapp: string;
  yearsAtCompany: number;
  specialties: string[];
}

export const MANAGERS: Manager[] = [
  {
    id: "akmal-karimov",
    name: "Akmal Karimov",
    role: "Senior project consultant",
    photo: "/images/manager-portrait.png",
    phone: "+998 99 491 28 30",
    telegram: "@vericoreglobal",
    whatsapp: "+998994912830",
    yearsAtCompany: 9,
    specialties: ["concrete plants", "cement", "logistics"],
  },
  {
    id: "shaxnoza-tursunova",
    name: "Shaxnoza Tursunova",
    role: "Tile & ceramics specialist",
    photo: "/images/manager-portrait.png",
    phone: "+998 99 491 28 30",
    telegram: "@vericoreglobal",
    whatsapp: "+998994912830",
    yearsAtCompany: 4,
    specialties: ["ceramic tile", "AAC", "brick"],
  },
  {
    id: "rustam-saidov",
    name: "Rustam Saidov",
    role: "Logistics manager",
    photo: "/images/manager-portrait.png",
    phone: "+998 99 491 28 30",
    telegram: "@vericoreglobal",
    whatsapp: "+998994912830",
    yearsAtCompany: 6,
    specialties: ["customs", "regional delivery", "installation"],
  },
];

export const DEFAULT_MANAGER = MANAGERS[0]!;
