import { Center, Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

const Nav = () => (
  <Flex ml={100} mr={100} height={100} align="center">
    <Grid templateColumns="repeat(12, 1fr)" gap={6}>
      <GridItem colStart={1}>
        <Center>
          <Link to="/">MusicTree.me</Link>
        </Center>
      </GridItem>
      <GridItem colStart={5}>
        <Center>
          <Link to="/">Home</Link>
        </Center>
      </GridItem>
      <GridItem colSpan={2} colStart={6}>
        <Center>
          <Link to="/explore">Explore Trees</Link>
        </Center>
      </GridItem>
      <GridItem colStart={8}>
        <Center>
          <Link to="/about">About</Link>
        </Center>
      </GridItem>
      <GridItem colStart={11}>
        <Center>
          <Link to="/login">Log in</Link>
        </Center>
      </GridItem>
      <GridItem colStart={12}>
        <Center>
          <Link to="/join">Sign up</Link>
        </Center>
      </GridItem>
    </Grid>
  </Flex>
);

export default Nav;
