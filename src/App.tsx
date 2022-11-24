import * as React from "react";
import { Box } from "@chakra-ui/react";
import Parent from "./components/Parent/index";

export const App = () => {
  return (
    <Box bg={"blackAlpha.800"} h="100vh" w="100vw" textAlign="center">
      <Parent />
    </Box>
  );
};
