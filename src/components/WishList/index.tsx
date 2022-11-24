import React from "react";
import _ from "lodash";
import { Box } from "@chakra-ui/react";
import InputText from "../Input/index";

const WishList = () => {
  return (
    <Box
      as="section"
      border="2px"
      borderBottom={"0px"}
      borderColor="black"
      m={"auto"}
    >
      <Box
        bg={"white"}
        p={"5px"}
        pl={"20px"}
        textAlign={"left"}
        borderBottom="2px"
        borderColor="black"
      >
        ITEM
      </Box>
      <Box>
        {_.range(8).map((items: any, index: number) => (
          <InputText key={index} Text={"Add Item"} bColor="black" />
        ))}
      </Box>
    </Box>
  );
};

export default WishList;
