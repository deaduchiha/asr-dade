import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./theme/button";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  components: {
    Button: buttonTheme,
  },
});
