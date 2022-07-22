import { Center, Container, Text } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: "Explore Trees - MusicTree.me",
  };
};
export default function Explore() {
  return (
    <Container as="main" maxW="6xl">
        <Center>
          <Text fontSize='5xl'>
            Coming Soon
          </Text>
        </Center>
    </Container>
  );
}
