import { useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import Header from "../Header/index";
import Control from "../BgCntrl/index";
import WishList from "../WishList/index";
import Foooter from "../Footer";
import UiModal from "../Modal";

const Parent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backGround, setBackGround] = useState("#FEDF58");

  const bgYellowHandler = () => {
    setBackGround("#FEDF58");
  };
  const bgBlueHandler = () => {
    setBackGround("#73D0FD");
  };
  const bgPinkHandler = () => {
    setBackGround("#FD97E0");
  };
  return (
    <Box
      bg={`${
        backGround === "#FEDF58"
          ? "#FEDF58"
          : backGround === "#FD97E0"
          ? "#FD97E0"
          : backGround === "#73D0FD" && "#73D0FD"
      }`}
      h={"100vh"}
      w={["100%", "100%", "600px"]}
      px={["30px", "30px", "60px"]}
      mx="auto"
    >
      <Header
        text1="Create your"
        text2="Promisecard"
        text3="choose a color"
        color="#000000"
      />
      <Control
        yellow={bgYellowHandler}
        pink={bgPinkHandler}
        blue={bgBlueHandler}
        current={backGround}
      />
      <WishList open={onOpen} />
      <UiModal close={onClose} open={isOpen} />
      <Foooter />
    </Box>
  );
};

export default Parent;
