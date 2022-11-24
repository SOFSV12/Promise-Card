import { extendTheme } from "@chakra-ui/react";
import { modalTheme } from "./components/modalStyles";

export const myNewTheme = extendTheme({
  components: { Modal: modalTheme },
});
