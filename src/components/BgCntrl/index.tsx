import React from "react";
import { Box, HStack } from "@chakra-ui/react";

interface ControlProps {
  yellow: Function;
  pink: Function;
  blue: Function;
  current: string;
}

const Control: React.FC<ControlProps> = ({ yellow, pink, blue, current }) => {
  return (
    <Box pb={["5px", "5px", "10px"]}>
      <HStack justify={"center"}>
        <Box
          h={"20px"}
          w={"20px"}
          borderRadius={"25px"}
          bg={"#FEDF58"}
          onClick={() => {
            yellow();
          }}
          border={`${current === "yellow" ? "1px" : ""}`}
          borderColor="#000000"
        ></Box>
        <Box
          h={"20px"}
          w={"20px"}
          borderRadius={"25px"}
          bg={"#FD97E0"}
          onClick={() => {
            pink();
          }}
          border={`${current === "pink" ? "1px" : ""}`}
          borderColor="#000000"
        ></Box>
        <Box
          h={"20px"}
          w={"20px"}
          borderRadius={"25px"}
          bg={"#73D0FD"}
          onClick={() => {
            blue();
          }}
          border={`${current === "blue" ? "1px" : ""}`}
          borderColor="#000000"
        ></Box>
      </HStack>
    </Box>
  );
};

export default Control;
