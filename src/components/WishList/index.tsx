import React, { FC } from "react";
import _ from "lodash";
import { Box } from "@chakra-ui/react";
import InputText from "../Input/index";
import Rebutton from "../Button";

interface WishlistProps {
  open: Function;
}

const WishList: FC<WishlistProps> = ({ open }) => {
  return (
    <Box>
      <Box as="section">
        <Box
          bg={"white"}
          p={"5px"}
          pl={"20px"}
          textAlign={"left"}
          border="2px"
          borderColor="black"
        >
          ITEM
        </Box>
        <Box>
          <form action="">
            {_.range(8).map((item: any) => (
              <InputText
                key={item}
                Text={"Add Item"}
                bColor="black"
                name={`item${item}`}
              />
            ))}
            <Rebutton
              open={open}
              innerText="GENERATE PROMISE CARD"
              color="#FFFFFF"
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default WishList;
