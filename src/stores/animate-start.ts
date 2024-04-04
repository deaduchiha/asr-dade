import { TAnimation } from "@/types/animation";
import { create } from "zustand";

export const useAnimateStyleState = create<TAnimation>((set) => ({
  animateStyle: {
    width: "100%",
    height: "80%",
    x: 0,
    y: 0,
    opacity: 1,
    transitionDuration: "1s",
  },
  setAnimateStyle: (update) =>
    set((state) => ({
      animateStyle: { ...state.animateStyle, ...update },
    })),
}));
