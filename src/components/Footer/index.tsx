import React from "react";
import { Text, Icon, Box, Flex } from "@chakra-ui/react";
import Sponsor from "../../assets/svg/icon";

const Foooter = () => {
  return (
    <Box as="footer" textAlign={"center"} pt={["10px", "10px", "30px"]}>
      <Flex alignItems={"center"} justify={"center"}>
        <Text
          mr="5px"
          fontFamily={"Inter"}
          fontWeight={"normal"}
          fontSize={"xs"}
        >
          powered by
        </Text>
        <Icon as={Sponsor} h="35px" w="35px" />
      </Flex>
    </Box>
  );
};

export default Foooter;
