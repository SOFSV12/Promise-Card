import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  // FormHelperText,
  Button,
  // HStack,
} from "@chakra-ui/react";
import Header from "../Header/index";
import Input from "../Input/index";

interface UiProps {
  open: boolean;
  close: () => void;
}

const UiModal: React.FC<UiProps> = ({ open, close }) => {
  return (
    <>
      <Modal
        isOpen={open}
        onClose={close}
        size={["sm", "sm", "xl"]}
        motionPreset={"slideInBottom"}
        variant="Modal"
      >
        <ModalOverlay />
        <ModalContent w={["350px", "350px", "600px"]}>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <form
              id="new-form"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <FormControl>
                <Header
                  text1="Your Promise Card is"
                  text2="Almost Ready"
                  color="#FFFFFF"
                />
                <FormLabel
                  pt={"70px"}
                  color="#FFFFFF"
                  fontSize={"12px"}
                  fontWeight={"normal"}
                  lineHeight={"15px"}
                >
                  Give your card a title
                </FormLabel>
                <Input Text={"Ezekiel Turaki"} fill="filled" />
                <FormLabel
                  pt={"15px"}
                  color="#FFFFFF"
                  fontSize={"12px"}
                  fontWeight={"normal"}
                  lineHeight={"15px"}
                >
                  Full Name
                </FormLabel>
                <Input Text={"E.g Christmas, December"} fill="filled" />
                <FormLabel
                  pt={"15px"}
                  color="#FFFFFF"
                  fontSize={"12px"}
                  fontWeight={"normal"}
                  lineHeight={"15px"}
                >
                  Email address
                </FormLabel>
                <Input Text={"turaki@gmail.com"} fill="filled" />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter m={"auto"} pt={"45px"}>
            <Button
              type="submit"
              size={"lg"}
              bg={"#1065C0"}
              color="#FFFFFF"
              form="new-form"
            >
              See My Promise Card
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UiModal;
