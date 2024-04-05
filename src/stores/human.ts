import { THumanBodyState } from "@/types/human-body";
import { create } from "zustand";

export const useHumanBodyData = create<THumanBodyState>((set) => ({
  bodyData: {},
  setBodyData: (add) =>
    set((state) => ({
      bodyData: { ...state.bodyData, ...add },
    })),
}));
