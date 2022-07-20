import {
  Center,
  Grid,
  GridItem,
  Button,
  Box,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import { Form, Link, NavLink, useLocation } from "@remix-run/react";
import type { ReactNode } from "react";
import Logo from "./logo";
import NavMenu from "./menu";

type Item = {
  position: number;
  notLink?: boolean;
  span?: number;
  child: ReactNode;
};
const MTNavLink = ({
  linkTo,
  children,
}: {
  linkTo: string;
  children: string;
}) => {
  const [isMedScreen] = useMediaQuery("(min-width: 767px)");
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
        role="link"
        aria-label="Desktop Navigation"
      >
        {children}
        <Box as="span" className="visuallyhidden">
          (current section)
        </Box>
      </NavLink>
      {isActivePage && isMedScreen && (
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
export const getNavItemList = (hasUser: boolean) => [
  {
    position: 1,
    notLink: true,
    child: <Logo />,
  },
  {
    position: 4,
    child: <MTNavLink linkTo="/">Home</MTNavLink>,
  },
  {
    position: 5,
    span: 7,
    child: <MTNavLink linkTo="/explore">Explore</MTNavLink>,
  },
  {
    position: 7,
    child: <MTNavLink linkTo="/about">About</MTNavLink>,
  },
  {
    position: !hasUser ? 11 : 12,
    child: {
      ...(hasUser ? (
        <Form action="/logout" method="post">
          <Button
            type="submit"
            role="button"
            aria-label="Desktop Navigation"
            borderRadius="full"
            variant="solid"
            backgroundColor="black"
            color="white"
            mt={0}
          >
            Log out
          </Button>
        </Form>
      ) : (
        <Button
          role="button"
          variant="link"
          color="black"
          aria-label="Desktop Navigation"
          as={Link}
          to="/login"
          mt={0}
        >
          Log in
        </Button>
      )),
    },
  },
  {
    // has user ? my profile : sign up
    ...(!hasUser && {
      position: 12,
      notLink: true,
      child: (
        <Button
          role="button"
          aria-label="Desktop Navigation"
          as={Link}
          to="/"
          borderRadius="full"
          variant="solid"
          backgroundColor="black"
          color="white"
        >
          Sign up
        </Button>
      ),
    }),
  },
];

const NavItem = (item: Item) => {
  const { position, span, child } = item;
  return (
    <GridItem as="li" colEnd={span ? span : undefined} colStart={position}>
      {child}
    </GridItem>
  );
};

const Nav = ({ hasUser }: { hasUser: boolean }) => {
  const [isMedScreen] = useMediaQuery("(min-width: 767px)");

  return (
    <Container mt={5} as="nav" maxW="6xl" height={100}>
      <>
        {isMedScreen ? (
          <Grid
            as="ul"
            templateColumns="repeat(12, 1fr)"
            gap={6}
            alignItems="baseline"
          >
            {(getNavItemList(hasUser) as Item[]).map((item, index) => {
              return (
                <NavItem
                  key={`${item.position}-${index}`}
                  position={item.position}
                  notLink={item.notLink ?? undefined}
                  child={item.child}
                  span={item.span}
                />
              );
            })}
          </Grid>
        ) : (
          <NavMenu hasUser={hasUser} />
        )}
      </>
    </Container>
  );
};

export default Nav;
