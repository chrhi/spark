import { create } from "zustand";
import type { Product } from "@/types";

interface BearState {
  card: Product[];
  addProductToCard: (product: Product) => void;
  RemoveProductToCard: (by: number) => void;
}

export const useStore = create<BearState>((set, get) => ({
  card: [],
  addProductToCard: (product) => set({ card: [...get().card, product] }),
  RemoveProductToCard: () => set({}),
}));
