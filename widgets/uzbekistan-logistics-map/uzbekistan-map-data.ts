/** Marker positions in the shared SVG viewBox (500 × 360). */
export const UZBEKISTAN_MAP_VIEWBOX = { width: 500, height: 360 } as const;

export const UZBEKISTAN_OUTLINE_PATH =
  "M 52 92 C 78 48 128 34 182 40 L 262 46 C 318 50 368 66 408 96 L 438 136 C 456 176 450 218 424 258 L 382 300 C 338 328 278 342 218 338 L 152 318 C 98 292 62 248 50 198 L 38 148 C 34 108 40 92 52 92 Z";

export type UzbekistanMapMarkerId =
  | "karakalpakstan"
  | "khorezm"
  | "navoiy"
  | "bukhara"
  | "samarkand"
  | "kashkadarya"
  | "surkhandarya"
  | "syrdarya"
  | "jizzakh"
  | "tashkent-city"
  | "tashkent-region"
  | "namangan"
  | "fergana"
  | "andijan";

export interface UzbekistanMapMarker {
  id: UzbekistanMapMarkerId;
  /** Matches `Region.slug` in mock data */
  regionSlug: string;
  x: number;
  y: number;
  /** HQ / capital — larger marker */
  isPrimary?: boolean;
}

/** Approximate geographic centroids on a stylized Uzbekistan silhouette. */
export const UZBEKISTAN_MAP_MARKERS: UzbekistanMapMarker[] = [
  { id: "karakalpakstan", regionSlug: "karakalpakstan", x: 88, y: 78 },
  { id: "khorezm", regionSlug: "khorezm", x: 72, y: 118 },
  { id: "navoiy", regionSlug: "navoiy", x: 148, y: 132 },
  { id: "bukhara", regionSlug: "bukhara", x: 128, y: 178 },
  { id: "samarkand", regionSlug: "samarkand", x: 192, y: 168 },
  { id: "kashkadarya", regionSlug: "kashkadarya", x: 172, y: 218 },
  { id: "surkhandarya", regionSlug: "surkhandarya", x: 212, y: 262 },
  { id: "syrdarya", regionSlug: "syrdarya", x: 232, y: 142 },
  { id: "jizzakh", regionSlug: "jizzakh", x: 252, y: 128 },
  { id: "tashkent-city", regionSlug: "tashkent-city", x: 272, y: 112, isPrimary: true },
  { id: "tashkent-region", regionSlug: "tashkent-region", x: 288, y: 128 },
  { id: "namangan", regionSlug: "namangan", x: 318, y: 96 },
  { id: "fergana", regionSlug: "fergana", x: 332, y: 108 },
  { id: "andijan", regionSlug: "andijan", x: 348, y: 94 },
];
