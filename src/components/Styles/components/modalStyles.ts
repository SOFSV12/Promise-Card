import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: "hsla(0, 0%, 0%, 0.8)", //change the background
  },
  dialog: {
    borderRadius: "md",
    bg: "hsla(0, 0%, 0%, 0)",
  },
  closeButton: {
    color: "#ffffff",
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
