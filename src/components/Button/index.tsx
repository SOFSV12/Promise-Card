import React from "react";
import { Button, Box } from "@chakra-ui/react";

interface Iprops {
  innerText?: string;
  color: string;
  open?: Function;
}

const Rebutton: React.FC<
  Iprops & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ innerText, color, open, ...rest }) => {
  return (
    <Box pt={["20px", "20px", "30px"]}>
      <Button
        {...rest}
        onClick={open ? () => open() : () => {}}
        bg={color}
        fontSize={"md"}
        fontWeight={"normal"}
        textAlign={"center"}
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        {innerText}
      </Button>
    </Box>
  );
};

export default Rebutton;
