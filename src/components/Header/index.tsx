import React from "react";

import { Box, Text } from "@chakra-ui/react";

interface HeaderProps {
  text1: string;
  text2: string;
  color: string;
  text3?: boolean;
}

const Header: React.FC<HeaderProps> = ({ text1, text2, text3, color }) => {
  return (
    <Box
      as="header"
      pt={["15px", "15px", "60px"]}
      textAlign={"center"}
      color={color}
    >
      <Text
        fontFamily={"Inter"}
        fontSize={"32px"}
        fontWeight={"normal"}
        lineHeight={"38.73px"}
      >
        {text1}
      </Text>
      <Text
        fontFamily={"Inter"}
        fontSize={"32px"}
        fontWeight={"normal"}
        lineHeight={"38.73px"}
      >
        {text2}
      </Text>
      {text3 && (
        <Text
          fontWeight={"normal"}
          fontSize={"md"}
          pt={["8px", "8px", "10px"]}
          pb={["5px", "5px", "10px"]}
        >
          choose a color
        </Text>
      )}
    </Box>
  );
};

export default Header;
