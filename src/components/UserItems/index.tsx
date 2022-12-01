import React from "react";
import { Box } from "@chakra-ui/react";

const UserItem = () => {
  return (
    <Box>
      <Box
        border={"2px"}
        borderColor={"#000000"}
        color={"black"}
        borderBottom="0px"
        textAlign={"left"}
        p={"5px"}
        paddingLeft={"20px"}
        mx="auto"
      >
        Item 1
      </Box>
    </Box>
  );
};

export default UserItem;
