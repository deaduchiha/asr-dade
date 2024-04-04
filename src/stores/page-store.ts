import { TPage, TPageStore } from "@/types/pages";
import { createStore } from "zustand";

/**
 * The default initial state for the page store.
 */
export const defaultInitState: TPage = { page: 0 };

/**
 * Creates a Zustand store for managing page state.
 *
 * @param initPage - The initial state of the page store. Defaults to `defaultInitState`.
 * @returns A Zustand store with the following properties:
 *   - page: The current page number.
 *   - nextPage: A function that increments the page number.
 *   - prevPage: A function that decrements the page number.
 */
export const createPageStore = (initPage: TPage = defaultInitState) => {
  return createStore<TPageStore>()((set) => ({
    ...initPage,
    /**
     * Increments the page number.
     */
    nextPage: () => set((state) => ({ page: state.page + 1 })),
    /**
     * Decrements the page number.
     */
    prevPage: () => set((state) => ({ page: state.page - 1 })),
  }));
};
