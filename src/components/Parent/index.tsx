import { useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import Header from "../Header/index";
import Control from "../BgCntrl/index";
import WishList from "../WishList/index";
import Rebutton from "../Button/index";
import Foooter from "../Footer";
import UiModal from "../Modal";
const Parent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backGround, setBackGround] = useState("yellow");

  const bgYellowHandler = () => {
    setBackGround("yellow");
  };
  const bgBlueHandler = () => {
    setBackGround("blue");
  };
  const bgPinkHandler = () => {
    setBackGround("pink");
  };
  return (
    <Box
      bg={`${
        backGround === "yellow"
          ? "#FEDF58"
          : backGround === "pink"
          ? "#FD97E0"
          : backGround === "blue" && "#73D0FD"
      }`}
      h={"100vh"}
      w={["100%", "100%", "600px"]}
      px={["30px", "30px", "60px"]}
      mx="auto"
    >
      <Header text1="Create your" text2="Promisecard" text3 color="#000000" />
      <Control
        yellow={bgYellowHandler}
        pink={bgPinkHandler}
        blue={bgBlueHandler}
      />
      <WishList />

      <Rebutton
        innerText="GENERATE PROMISE CARD"
        color="#FFFFFF"
        open={onOpen}
      />
      <UiModal close={onClose} open={isOpen} />
      <Foooter />
    </Box>
  );
};

export default Parent;
