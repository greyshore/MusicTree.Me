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
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Form, Link } from "@remix-run/react";
import { NavLink } from "react-router-dom";

import Logo from "./logo";

const NavMenu = ({ hasUser }: { hasUser: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const menuItems = ["Explore", "About"];

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
          {hasUser ? (
            <Button
              role="button"
              aria-label="Desktop Navigation"
              as={Link}
              to="/logout"
              variant="link"
              colorScheme="black"
            >
              Log out
            </Button>
          ) : (
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
          )}
        </Box>
      </Flex>

      {isOpen && (
        <Drawer
          closeOnOverlayClick
          placement="top"
          onClose={toggleOpen}
          isOpen={isOpen}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <Logo />
            </DrawerHeader>
            <DrawerBody marginBottom={8}>
              <Stack spacing="24px" alignItems="self-start">
                {menuItems.map((item, index) => (
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    key={index}
                    onClick={toggleOpen}
                  >
                    {item}
                  </NavLink>
                ))}
                {hasUser && (
                  <>
                    <Divider orientation="horizontal" />
                    <Box>
                      <Avatar name="firstName lastName" size="xs" /> firstName
                      lastName
                    </Box>
                    <NavLink to="/profile" onClick={toggleOpen}>
                      Profile
                    </NavLink>{" "}
                    <NavLink to="/my-tree" onClick={toggleOpen}>
                      My Tree
                    </NavLink>
                  </>
                )}
                {/* end user menu */}
                <Divider orientation="horizontal" />
                {hasUser && (
                  <Form action="/logout" method="post">
                    <Button
                      type="submit"
                      role="button"
                      color="black"
                      variant="link"
                      mt={0}
                    >
                      Log out
                    </Button>
                  </Form>
                )}
                {!hasUser && (
                  <Button
                    role="button"
                    aria-label="Desktop Navigation"
                    as={Link}
                    to="/"
                    borderRadius="full"
                    variant="solid"
                    backgroundColor="black"
                    color="white"
                    onClick={toggleOpen}
                  >
                    Sign up
                  </Button>
                )}
              </Stack>
              <Spacer />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default NavMenu;
