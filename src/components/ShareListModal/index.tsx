import { Button, Slide, Box, Text, Icon, HStack } from "@chakra-ui/react";
import { CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import { WhatsAppIcon, FaceBookIcon, TwitterIcon } from "../../assets/svg/icon";

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
        bg="black"
        color="white"
        size="md"
        p="24px"
        borderRadius={"32px"}
      >
        share with friends
      </Button>
      <HStack justify={"center"}>
        <Box
          as={Slide}
          direction="bottom"
          in={isOpen}
          style={{ zIndex: 1 }}
          p={"20px"}
          px="20px"
          color="white"
          mt="4"
          bg="white"
          rounded="md"
          shadow="md"
          borderTopRadius="25px"
          w={["100%", "100%", "630px"]}
          m="auto"
        >
          <HStack align={"center"} justify={"end"} pr={"5px"}>
            <Icon
              as={CloseIcon}
              h="20px"
              w="20px"
              color={"black"}
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
            mb="15px"
          >
            Download a screenshot and share across social media
          </Text>
          <HStack align={"center"} justify={"space-around"} pr={"20px"}>
            <Box>
              <Box
                h={"56px"}
                w={"56px"}
                borderRadius={"50px"}
                bg={"hsla(0, 0%, 0%, 1)"}
                borderColor="#000000"
                py="12px"
              >
                <Icon
                  as={DownloadIcon}
                  h="20px"
                  w="20px"
                  color={"white"}
                  onClick={() => {
                    onToggle();
                  }}
                />
              </Box>
              <Text fontSize={"12px"} color={"#000000"} pt="20px">
                Save image
              </Text>
            </Box>
            <Box>
              <Box
                h={"56px"}
                w={"56px"}
                borderRadius={"50px"}
                bg={"hsla(217, 81%, 56%, 1)"}
                borderColor="#000000"
                py="18px"
                px="20px"
              >
                <Icon
                  as={FaceBookIcon}
                  h="20px"
                  w="20px"
                  color={"tomato"}
                  onClick={() => {
                    onToggle();
                  }}
                />
              </Box>
              <Text fontSize={"12px"} color={"#000000"} pt="20px">
                Facebook
              </Text>
            </Box>
            <Box>
              <Box
                h={"56px"}
                w={"56px"}
                borderRadius={"50px"}
                bg={"hsla(115, 39%, 51%, 1)"}
                borderColor="#000000"
                py="15px"
                px="16px"
              >
                <Icon
                  as={WhatsAppIcon}
                  h="20px"
                  w="20px"
                  color={"tomato"}
                  onClick={() => {
                    onToggle();
                  }}
                />
              </Box>
              <Text fontSize={"12px"} color={"#000000"} pt="20px">
                Whatsapp
              </Text>
            </Box>
            <Box>
              <Box
                h={"56px"}
                w={"56px"}
                borderRadius={"50px"}
                bg={"hsla(207, 80%, 60%, 1)"}
                borderColor="#000000"
                py="18px"
                px="15px"
              >
                <Icon
                  as={TwitterIcon}
                  h="20px"
                  w="20px"
                  color={"tomato"}
                  onClick={() => {
                    onToggle();
                  }}
                />
              </Box>
              <Text fontSize={"12px"} color={"#000000"} pt="20px">
                Twitter
              </Text>
            </Box>
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default ListModal;
