import { TPage, TPageStore } from "@/types/pages";
import { createStore } from "zustand";

export const defaultInitState: TPage = { page: 0 };

export const createPageStore = (initPage: TPage = defaultInitState) => {
  return createStore<TPageStore>()((set) => ({
    ...initPage,
    nextPage: () => set((state) => ({ page: state.page + 1 })),
    prevPage: () => set((state) => ({ page: state.page - 1 })),
  }));
};
