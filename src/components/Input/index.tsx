import React, { FC } from "react";
import { useFormikContext } from "formik";
import { Box, Input, FormControl } from "@chakra-ui/react";

interface InputProps {
  Text?: string;
  fill?: string;
  bColor?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputText: React.FC<InputProps> = ({
  Text,
  fill,
  bColor,
  name,
  onChange,
  value,
}) => {
  return (
    <Box
      borderBottom="2px"
      borderColor={bColor}
      border="2px"
      borderTop={"0px"}
      m={"auto"}
    >
      <FormControl>
        <Input
          placeholder={Text}
          size="md"
          focusBorderColor="white"
          border={"0px"}
          type="text"
          variant={fill}
          name={name}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    </Box>
  );
};

export const FormikFormInput: FC<
  InputProps & {
    name: string;
    value?: any;
  }
> = ({ name, value, ...rest }) => {
  const { handleChange, values } = useFormikContext<any>();

  return (
    <InputText
      {...rest}
      name={name}
      onChange={handleChange}
      value={(values as any)[name as any] || value}
    />
  );
};

export default InputText;
