import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./Pages/Home";
import Share from "./Pages/Share";

export const App = () => {
  return (
    <Box bg={"blackAlpha.800"} h="100vh" w="100vw" textAlign="center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share" element={<Share />} />
      </Routes>
    </Box>
  );
};
