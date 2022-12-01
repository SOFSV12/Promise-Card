import React from "react";

import { Box, Text } from "@chakra-ui/react";

interface HeaderProps {
  text1: string;
  text2?: string;
  color: string;
  text3?: string;
  itc?: boolean;
}

const Header: React.FC<HeaderProps> = ({ text1, text2, text3, color, itc }) => {
  return (
    <Box
      as="header"
      pt={["10px", "10px", "40px"]}
      textAlign={"center"}
      color={color}
    >
      <Text
        fontFamily={"Inter"}
        fontSize={"32px"}
        fontWeight={"normal"}
        lineHeight={"38.73px"}
        fontStyle={`${itc && "italic"}`}
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

      <Text
        fontWeight={"normal"}
        fontSize={"md"}
        pt={["8px", "8px", "10px"]}
        pb={["5px", "5px", "10px"]}
      >
        {text3}
      </Text>
    </Box>
  );
};

export default Header;
