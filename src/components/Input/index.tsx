import React from "react";
import { Box, Input, FormControl } from "@chakra-ui/react";

interface InputProps {
  Text?: string;
  fill?: string;
  bColor?: string;
  name?: string;
}

const InputText: React.FC<InputProps> = ({ Text, fill, bColor, name }) => {
  return (
    <Box
      borderBottom="2px"
      borderColor={bColor}
      border="2px"
      borderTop={"0px"}
      m={"auto"}
    >
      <form action="">
        <FormControl>
          <Input
            placeholder={Text}
            size="md"
            focusBorderColor="white"
            border={"0px"}
            type="text"
            variant={fill}
            name={name}
          />
        </FormControl>
      </form>
    </Box>
  );
};

export default InputText;
