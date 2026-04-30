export {
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
  getFeaturedProducts,
  getPopularProducts,
  getRelatedProducts,
} from "./api/get-products";
export type {
  Product,
  ProductSpec,
  ProductConfigItem,
  ProductCommercial,
  ProductWarranty,
} from "@shared/mock-data";
