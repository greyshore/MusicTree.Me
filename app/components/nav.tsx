import { Center, Grid, GridItem, Flex, Button, Box } from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "@remix-run/react";
import type { ReactNode } from "react";

type Item = {
  position: number;
  isButton?: boolean;
  span?: number;
  child: ReactNode;
};
// @todo define route `to` links as constant //
const MTNavLink = ({
  linkTo,
  children,
}: {
  linkTo: string;
  children: string;
}) => {
  const { pathname } = useLocation();
  const isActivePage = linkTo === pathname;
  const activeStyle = {
    fontWeight: "bold",
  };
  return (
    <Center flexDir={"column"}>
      <NavLink
        to={linkTo}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        {children}
      </NavLink>
      {isActivePage && (
        <Box
          height={1.5}
          width={1.5}
          mt={1}
          borderRadius="full"
          background="green"
        />
      )}
    </Center>
  );
};
const navItemList: Item[] = [
  {
    position: 1,
    child: (
      // @todo these styles should be elsewhere, i.e. logo?
      <Link style={{ fontSize: "24px", fontWeight: "bold" }} to="/">
        MusicTree.me
      </Link>
    ),
  },
  {
    position: 4,
    child: <MTNavLink linkTo="/">Home</MTNavLink>,
  },
  {
    position: 5,
    span: 7,
    child: <MTNavLink linkTo="/explore">Explore Trees</MTNavLink>,
  },
  {
    position: 7,
    child: <MTNavLink linkTo="/about">About</MTNavLink>,
  },
  {
    position: 11,
    child: (
      <Button as={Link} to="/login" variant="link" colorScheme="black">
        Log in
      </Button>
    ),
  },
  {
    position: 12,
    isButton: true,
    child: (
      <Button
        as={Link}
        to="/join"
        borderRadius="full"
        variant="solid"
        backgroundColor="black"
        color="white"
      >
        Sign up
      </Button>
    ),
  },
];

const NavItem = (item: Item) => {
  const { position, isButton, span, child } = item;
  return (
    <GridItem
      as="li"
      mt={!isButton ? 2 : undefined}
      colEnd={span ? span : undefined}
      colStart={position}
    >
      {child}
    </GridItem>
  );
};
// @todo margins on flex container
const Nav = () => (
  <Flex as="nav" maxW="6xl" mx={[4, 5]} height={100} align="center">
    <Grid as="ul" templateColumns="repeat(12, 1fr)" gap={6}>
      {navItemList.map((item, index) => (
        <NavItem
          key={`${item.position}-${index}`}
          position={item.position}
          isButton={item.isButton ?? undefined}
          child={item.child}
          span={item.span}
        />
      ))}
    </Grid>
  </Flex>
);

export default Nav;
