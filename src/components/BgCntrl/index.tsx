import React from "react";
import { Box, HStack } from "@chakra-ui/react";

interface ControlProps {
  yellow: Function;
  pink: Function;
  blue: Function;
}

const Control: React.FC<ControlProps> = ({ yellow, pink, blue }) => {
  return (
    <Box pb={["5px", "5px", "10px"]}>
      <HStack justify={"center"}>
        <Box
          h={"20px"}
          w={"20px"}
          borderRadius={"25px"}
          bg={"#FEDF58"}
          _active={{
            border: "1px",
            borderColor: "black",
          }}
          onClick={() => {
            yellow();
          }}
        ></Box>
        <Box
          h={"20px"}
          w={"20px"}
          borderRadius={"25px"}
          bg={"#FD97E0"}
          _active={{
            border: "1px",
            borderColor: "black",
          }}
          onClick={() => {
            pink();
          }}
        ></Box>
        <Box
          h={"20px"}
          w={"20px"}
          borderRadius={"25px"}
          bg={"#73D0FD"}
          _active={{
            border: "1px",
            borderColor: "black",
          }}
          onClick={() => {
            blue();
          }}
        ></Box>
      </HStack>
    </Box>
  );
};

export default Control;
