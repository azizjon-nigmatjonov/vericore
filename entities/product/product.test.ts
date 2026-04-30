import { describe, expect, it } from "vitest";
import {
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
  getFeaturedProducts,
  getRelatedProducts,
} from "./api/get-products";

describe("product entity helpers", () => {
  it("returns all products", () => {
    expect(getAllProducts().length).toBeGreaterThan(0);
  });

  it("finds HZS35 by slug with full PDF specs", () => {
    const hzs35 = getProductBySlug("hzs35");
    expect(hzs35).toBeDefined();
    expect(hzs35?.modelCode).toBe("HZS35");
    expect(hzs35?.spec.productivity.value).toBe(35);
    expect(hzs35?.spec.cycleTimeSeconds).toBe(72);
    expect(hzs35?.spec.powerKw).toBe(80);
    expect(hzs35?.spec.mixerModel).toBe("JS750");
    expect(hzs35?.spec.batcherModel).toBe("PLD1200");
    expect(hzs35?.warranty.months).toBe(15);
  });

  it("returns products in a category", () => {
    const concretePlants = getProductsByCategory("beton-zavodlari");
    expect(concretePlants.length).toBeGreaterThan(0);
    expect(concretePlants.every((p) => p.categorySlug === "beton-zavodlari")).toBe(true);
  });

  it("returns featured products", () => {
    expect(getFeaturedProducts().every((p) => p.isFeatured)).toBe(true);
  });

  it("excludes the current product from related", () => {
    const related = getRelatedProducts("hzs35");
    expect(related.every((p) => p.slug !== "hzs35")).toBe(true);
  });
});
