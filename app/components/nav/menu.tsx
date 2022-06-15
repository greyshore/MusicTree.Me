import { useState } from "react";
import {
  Flex,
  Button,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Spacer,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@remix-run/react";
import Logo from "./logo";
import { navItemList } from "./index";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const menuItems = navItemList.slice(1, 4);
  return (
    <>
      <Flex alignItems="center">
        <Box>
          <IconButton
            aria-label="Open navigatin menu"
            bg="transparent"
            icon={<HamburgerIcon />}
            onClick={toggleOpen}
          />
        </Box>
        <Spacer />
        <Box>
          <Logo />
        </Box>
        <Spacer />
        <Box>
          <Button
            role="button"
            aria-label="Desktop Navigation"
            as={Link}
            to="/login"
            variant="link"
            colorScheme="black"
          >
            Log in
          </Button>
        </Box>
      </Flex>

      {isOpen && (
        <Drawer
          closeOnOverlayClick
          placement="left"
          onClose={toggleOpen}
          isOpen={isOpen}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <Logo />
            </DrawerHeader>
            <DrawerBody>
              <Stack alignItems="self-start">
                {menuItems.map((item, index) => (
                  <p key={index} onClick={toggleOpen}>
                    {item.child}
                  </p>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default NavMenu;
