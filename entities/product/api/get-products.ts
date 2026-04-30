import { PRODUCTS, type Product } from "@shared/mock-data";

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(limit = 3): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured).slice(0, limit);
}

export function getPopularProducts(limit = 5): Product[] {
  return PRODUCTS.filter((p) => p.isPopular).slice(0, limit);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const target = getProductBySlug(slug);
  if (!target) return [];
  return PRODUCTS.filter((p) => p.categorySlug === target.categorySlug && p.slug !== slug).slice(
    0,
    limit,
  );
}
