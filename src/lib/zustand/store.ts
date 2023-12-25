import { create } from "zustand";
import type { Product } from "@/types";

interface BearState {
  card: { product: Product; qnt: number }[];
  addProductToCard: (product: Product) => void;
  RemoveProductToCard: (product_id: string) => void;
  addQuantity: (product_id: string) => void;
  reduceQuantity: (product_id: string) => void;
  clearCard: () => void;
}

export const useStore = create<BearState>((set, get) => ({
  card: [],
  addProductToCard: (product) =>
    set(() => {
      if (get().card.find((item) => item.product.id === product.id)) {
        get().addQuantity(product.id);
        return { card: [...get().card] };
      }

      return { card: [...get().card, { product, qnt: 1 }] };
    }),
  RemoveProductToCard: (product_id) =>
    set({
      card: get().card.filter((item) => item.product.id !== product_id),
    }),
  addQuantity: (product_id: string) =>
    set({
      card: get().card.map((item) => {
        if (item.product.id === product_id) {
          item.qnt += 1;
        }
        return item;
      }),
    }),
  reduceQuantity: (product_id: string) =>
    set({
      card: get().card.map((item) => {
        if (item.product.id === product_id && item.qnt > 1) {
          item.qnt -= 1;
        }
        return item;
      }),
    }),

  clearCard: () => set({ card: [] }),
}));