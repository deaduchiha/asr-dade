import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const nextButton = defineStyle({
  background: "#2d6a4f",
  color: "white",
  pos: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  w: "fit-content",
  m: "auto",
  borderRadius: "20px",
  _hover: {
    bg: "#407d62",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { nextButton },
});
