# Category image mapping

## Deduplication log

37 duplicate/near-duplicate files removed during audit. **Covers are hosted on Vercel Blob only** — no local copies under `public/categories/`.

Blob base: `https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/{slug}/cover.jpeg`

| Group             | Kept                                         | Removed (summary)                    |
| ----------------- | -------------------------------------------- | ------------------------------------ |
| Tower crane       | `09.16.15 (1).jpeg`                          | `09.16.15.jpeg`                      |
| Laser             | `09.16.16.jpeg`                              | `09.16.17`, `09.16.18`               |
| Water bottling    | `09.16.21.jpeg`                              | `09.16.20`                           |
| Plastic bags      | `09.16.23.jpeg`                              | `09.16.24`, `09.16.25`               |
| Bricks            | `09.16.31.jpeg`                              | `09.16.32`, `09.16.33`               |
| Concrete blocks   | `09.16.38.jpeg`                              | `09.16.35`                           |
| CNC VMC           | `09.16.40.jpeg`                              | `09.16.39`, `09.16.41`               |
| Stretch film      | `09.16.45.jpeg`                              | `09.16.42`, `43`, `46`, `47`         |
| Crushing plant    | `09.16.50.jpeg`                              | `09.16.48`, `51`                     |
| Corrugated sheets | `09.16.52.jpeg`                              | `09.16.53`, `54`                     |
| Solar             | `09.16.55.jpeg`                              | `09.16.57`, `58`                     |
| Carmix 3.5        | `09.17.02` removed; kept `09.16.59` (5.5 XL) | `09.17.00`, `09.17.02`               |
| Med therapy       | `09.19.44.jpeg`                              | `09.19.42`, `43`                     |
| Asphalt plant     | `09.19.45.jpeg`                              | `09.19.45 (1)`                       |
| Sandwich line     | `09.19.46.jpeg`                              | `09.19.49`, `50`, `51`               |
| Food collage      | —                                            | `09.16.30` (dup of processing lines) |
| Trucks (extras)   | `09.17.10` only                              | `09.17.09`, `11`, `13`               |
| Wood extras       | `09.17.03` only                              | `09.17.06`, `07`                     |

PDF `3592bcb80ab41977e3729d9bb868d352748ea7a8.pdf` — not used as catalog cover.

## Slug → cover image

| ID  | Slug                      | Source file                          | Confidence | Rationale                                                  |
| --- | ------------------------- | ------------------------------------ | ---------- | ---------------------------------------------------------- |
| 1   | `oziq-ovqat-uskunalari`   | `photo_2026-05-26 09.16.29.jpeg`     | high       | Ready-meal / food packaging line                           |
| 2   | `kran-uskunalari`         | `photo_2026-05-26 09.16.15 (1).jpeg` | high       | Tower crane product shot                                   |
| 3   | `qogoz-qayta-ishlash`     | `photo_2026-05-26 09.16.27.jpeg`     | medium     | Tissue/paper machinery collage                             |
| 4   | `strech-klyonka`          | `photo_2026-05-26 09.16.45.jpeg`     | high       | Stretch wrap rolls + dispensers                            |
| 5   | `drabilni-zavod`          | `photo_2026-05-26 09.16.50.jpeg`     | high       | Crushing & screening plant                                 |
| 6   | `laser-stanoki`           | `photo_2026-05-26 09.16.16.jpeg`     | high       | Fiber laser cutting machine                                |
| 7   | `generatorlar`            | `photo_2026-05-26 09.16.26.jpeg`     | high       | Diesel generator set                                       |
| 8   | `gisht-zavodlari`         | `photo_2026-05-26 09.16.31.jpeg`     | high       | Perforated clay bricks                                     |
| 9   | `beton-zavodlari`         | `photo_2026-05-26 09.16.38.jpeg`     | medium     | Concrete hollow blocks (no HZS plant photo)                |
| 10  | `carmixlar`               | `photo_2026-05-26 09.16.59.jpeg`     | high       | Carmix 5.5 XL self-loading mixer                           |
| 11  | `salafan-polietilen`      | `photo_2026-05-26 09.16.23.jpeg`     | high       | T-shirt / polyethylene bag making machine                  |
| 12  | `plastik-idishlar`        | `photo_2026-05-26 09.16.22.jpeg`     | high       | PET bottle blow-molding line                               |
| 13  | `suv-liniyalari`          | `photo_2026-05-26 09.16.21.jpeg`     | high       | Water bottling conveyor line                               |
| 14  | `asfalt-zavod`            | `photo_2026-05-26 09.19.45.jpeg`     | high       | AIMIX asphalt mixing plant render                          |
| 15  | `metalga-ishlov-berish`   | `photo_2026-05-26 09.16.40.jpeg`     | high       | CNC vertical machining center                              |
| 16  | `yogoch-liniyalari`       | `photo_2026-05-26 09.17.03.jpeg`     | high       | Portable sawmill / log cutter                              |
| 17  | `maxsus-texnikalar`       | `photo_2026-05-26 09.17.10.jpeg`     | high       | Bridge inspection / aerial work truck                      |
| 18  | `med-texnikalar`          | `photo_2026-05-26 09.19.44.jpeg`     | high       | Multi-therapy medical device kit                           |
| 19  | `quyosh-panel`            | `photo_2026-05-26 09.16.55.jpeg`     | high       | Solar panels + inverter + batteries kit                    |
| 20  | `sanwich-pannellar`       | `photo_2026-05-26 09.19.46.jpeg`     | high       | Sandwich-panel production line                             |
| 21  | `kraska-zavod`            | `photo_2026-05-26 09.16.52.jpeg`     | low        | Corrugated colored sheets (no dedicated paint plant photo) |
| 22  | `shifr-zavod`             | `photo_2026-05-26 09.19.48.jpeg`     | medium     | Profiled metal / roofing sheet catalog                     |
| 23  | `upakovka-liniyalari`     | `photo_2026-05-26 09.16.29.jpeg`     | medium     | Shared food packaging line imagery                         |
| 24  | `kraska-idish-liniyalari` | `photo_2026-05-26 09.16.45.jpeg`     | low        | Stretch-wrap / packaging materials                         |
| 25  | `tuxum-fleyka-liniyalari` | `photo_2026-05-26 09.16.27.jpeg`     | medium     | Pulp/paper machinery (egg trays)                           |
| 26  | `tualet-qogoz-liniyalari` | `photo_2026-05-26 09.16.27.jpeg`     | high       | Tissue/toilet paper machinery collage                      |
| 27  | `oyinchoqlar`             | `photo_2026-05-26 09.17.08.jpeg`     | high       | Plush toys assortment                                      |

**Note:** IDs 3, 25, and 26 share the same source image (paper/tissue lines). IDs 1 and 23 share `09.16.29`. IDs 4 and 24 share `09.16.45`. Replace when dedicated photos are available.
