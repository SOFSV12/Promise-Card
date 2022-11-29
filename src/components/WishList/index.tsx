import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import InputText from "../Input/index";
import Rebutton from "../Button";
import { FormikFormInput } from "../Input/index";
import { FormikProvider, useFormik } from "formik";
import { userItemsSchema } from "../utils/validationSchema";

interface WishlistProps {
  open: Function;
}

const WishList: FC<WishlistProps> = ({ open }) => {
  const formik = useFormik({
    initialValues: {},
    validationSchema: userItemsSchema,
    onSubmit: (values) => {
      console.log(values);
      open();
    },
  });
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
          <FormikProvider value={formik}>
            <form autoComplete="off" onSubmit={formik.handleSubmit} noValidate>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item: any) => (
                <FormikFormInput
                  key={item}
                  Text={"Add Item"}
                  bColor="black"
                  name={`item${item}`}
                />
              ))}
              <Rebutton
                innerText="GENERATE PROMISE CARD"
                color="#FFFFFF"
                type="submit"
              />
            </form>
          </FormikProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default WishList;
