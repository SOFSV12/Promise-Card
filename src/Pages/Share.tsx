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

      <Box
        m="auto"
        mb={"40px"}
        color={"#000000"}
        borderBottom="2px"
        w={["300px", "300px", "400px"]}
      >
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
      <Box
        bg={"white"}
        borderTopRadius={"25px"}
        h={["150px", "150px", "200px"]}
        w={"full"}
        mt="20px"
        px={"20px"}
        pt={"10px"}
      >
        <HStack justify={"space-between"} mt="40px">
          <ListModal isOpen={isOpen} onToggle={onToggle} />
          <Button
            bg="white"
            size="md"
            onClick={goHome}
            p="24px"
            borderRadius={"32px"}
            color="black"
            border={"1px"}
          >
            create new card
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Share;
