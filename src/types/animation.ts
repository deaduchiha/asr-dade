import { MotionStyle } from "framer-motion";

export type TAnimation = {
  animateStyle: MotionStyle;
  setAnimateStyle: (update: Partial<MotionStyle>) => void;
};
