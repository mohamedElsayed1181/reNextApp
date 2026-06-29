import { create } from "zustand";
import { getAllProducts } from "../http/products/products.http";
interface Metadata {
  currentPage: number;

  numberOfPages: number;

  limit: number;

  nextPage: number;
}
interface ProductStore {
  products: any[];

  loading: boolean;

  error: string | null;
  metadata: Metadata | null;

  fetchProducts: (page: number) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],

  loading: false,

  error: null,

  metadata: null,

  fetchProducts: async (page) => {
    try {
      set({
        loading: true,
      });

      const data = await getAllProducts(page);

      set({
        products: data.data,
        metadata: data.metadata,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
}));
