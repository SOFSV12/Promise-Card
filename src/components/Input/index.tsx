import React from "react";
import { Box, Input, FormControl } from "@chakra-ui/react";

interface InputProps {
  Text: string;
  fill?: string;
  bColor?: string;
}

const InputText: React.FC<InputProps> = ({ Text, fill, bColor }) => {
  return (
    <Box borderBottom="2px" borderColor={bColor}>
      <form action="">
        <FormControl>
          <Input
            placeholder={Text}
            size="md"
            focusBorderColor="white"
            border={"0px"}
            type="text"
            variant={fill}
          />
        </FormControl>
      </form>
    </Box>
  );
};

export default InputText;
