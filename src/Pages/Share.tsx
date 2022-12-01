import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ListModal from "../components/ShareListModal";
import { Box, HStack, Button, useDisclosure } from "@chakra-ui/react";
import UserItem from "../components/UserItems";

const Share = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      color={"white"}
      bg={"#FEDF58"}
      h={"100vh"}
      w={["100%", "100%", "600px"]}
      px={["30px", "30px", "100px"]}
      mx="auto"
      pt={"50px"}
      as="main"
    >
      <Header
        text1="Emmanuel's"
        text2="Promise Card"
        text3="Things I want"
        color={"#000000"}
      />

      <Box mb={"15px"} borderBottom="2px" color={"#000000"}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item: any) => (
          <UserItem key={item} />
        ))}
      </Box>

      <Box
        as="span"
        color="hsla(0, 0%, 100%, 1)"
        bg="hsla(0,0%, 0%, 0.5)"
        py="5px"
        fontSize={"14px"}
        px="10px"
        borderRadius="15px"
      >
        create yours on promisecard.com.ng
      </Box>

      <HStack justify={"space-between"} mt="20px">
        <ListModal isOpen={isOpen} onToggle={onToggle} />
        <Button bg="white" color="blue.500" size="md" onClick={goHome}>
          create new card
        </Button>
      </HStack>
    </Box>
  );
};

export default Share;
