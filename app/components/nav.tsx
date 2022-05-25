import { Center, Grid, GridItem, Flex, Button } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import type { ReactNode } from "react";

type Item = {
  position: number;
  isButton?: boolean;
  span?: number;
  child: ReactNode;
};
const navItemList: Item[] = [
  {
    position: 1,
    child: (
      <Link style={{ fontSize: "24px", fontWeight: "bold" }} to="/">
        MusicTree.me
      </Link>
    ),
  },
  {
    position: 4,
    child: (
      <Center>
        <Link to="/">Home</Link>
      </Center>
    ),
  },
  {
    position: 5,
    span: 7,
    child: (
      <Center>
        <Link to="/explore">Explore Trees</Link>
      </Center>
    ),
  },
  {
    position: 7,
    child: <Link to="/about">About</Link>,
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
  console.log(navItemList);
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

const Nav = () => (
  <Flex as="nav" maxW="6xl" mx="auto" height={100} align="center">
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
