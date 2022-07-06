import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Center, Container, Heading, Text, VStack } from "@chakra-ui/react";

export const meta: MetaFunction = () => {
  return {
    title: "About - MusicTree.me",
  };
};
export default function About() {

  return (
    <Container as="main" maxW="6xl">
      <VStack spacing={8}>
        <Center>
          <Text>
          <Heading>A musical family tree and resource</Heading>

          At MusicTree.me, we provide an opportunity for musicians to explore their connections to the generations of musicians from which they are pedagogically descended.
          Discover intersecting paths and common roots to understand your musical heritage. Explore the landscape of constellation teachers and their impact on the global music community.
          <Text>
          Check back frequently – your musical family tree is shaped by data shared by other users, so it will grow and change as more users share information.
          </Text>
          This is a project for our beloved musical community. We are committed to providing accurate information and your privacy. We will never sell/share your personal information. 
          <Text>
          <Link to="https://www.sashabassoon.com/">Dr. Sasha Enegren</Link>
          </Text>
          <Text>
          For the digitally inclined, <Link to="https://github.com/greyshore/MusicTree.Me/">contribute our project on Github!</Link>
          </Text>
          </Text>
        </Center>
      </VStack>
    </Container>
  )
}
