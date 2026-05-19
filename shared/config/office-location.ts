/**
 * Verikore office — Yunusobod, Billur MFY, 4-mavze.
 * Coordinates from OpenStreetMap (Yunusobod 4-mavze area, ~41.360°N 69.278°E).
 */
export const OFFICE_LOCATION = {
  lat: 41.3601,
  lng: 69.2785,
  postalCode: "100000",
  /** For Google Maps search / embed */
  mapsQuery: "Toshkent, Yunusobod tumani, Billur MFY, 4-mavze, 87-uy, O'zbekiston",
  address: {
    uz: "Toshkent shahri, Yunusobod tumani, Billur MFY, 4-mavze, 87-uy",
    ru: "г. Ташкент, Юнусабадский район, Биллур МФЙ, 4-мавзе, дом 87",
    en: "Tashkent, Yunusabad district, Billur MFY, 4th microdistrict, house 87",
  },
} as const;
