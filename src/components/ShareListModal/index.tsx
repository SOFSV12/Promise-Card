import { Button, Slide, Box, Text, Icon, HStack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface ListProps {
  onToggle: Function;
  isOpen: boolean;
}

const ListModal: React.FC<ListProps> = ({ onToggle, isOpen }) => {
  return (
    <>
      <Button
        onClick={() => {
          onToggle();
        }}
        bg="blue.500"
        color="white"
        size="md"
      >
        share with friends
      </Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 1 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="white"
          rounded="md"
          shadow="md"
          px={"10px"}
        >
          <HStack align={"center"} justify={"end"} pr={"20px"}>
            <Icon
              as={CloseIcon}
              h="20px"
              w="20px"
              onClick={() => {
                onToggle();
              }}
            />
          </HStack>

          <Text
            fontFamily={"Inter"}
            fontSize={"28px"}
            fontWeight={"normal"}
            lineHeight={"38.73px"}
            color="#000000"
          >
            Share with friends
          </Text>
          <Text
            fontFamily={"Inter"}
            fontSize={"16px"}
            fontWeight={"normal"}
            lineHeight={"19.36px"}
            color="#000000"
          >
            Download a screenshot and share across social media
          </Text>
        </Box>
      </Slide>
    </>
  );
};

export default ListModal;
