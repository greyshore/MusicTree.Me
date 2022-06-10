import {
  Flex,
  Button,
  Box,
  Center,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useState } from "react";
import Logo from "./logo";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <Flex>
        <Button colorScheme="blue" onClick={toggleOpen}>
          Open
        </Button>
        <Box w="100%">
          <Center>
            <Logo />
          </Center>
        </Box>
      </Flex>
      {isOpen && (
        <Drawer placement={"left"} onClose={toggleOpen} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default NavMenu;
