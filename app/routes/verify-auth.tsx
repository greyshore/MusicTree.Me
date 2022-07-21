import { Container, SimpleGrid, Heading, Text } from "@chakra-ui/react";

export default function VerifyAuth() {
  return (
    <Container as="main" maxW="6xl">
      <SimpleGrid
        width={{ sm: "100%", md: "50%" }}
        columns={1}
        p={5}
        padding={0}
        marginTop={24}
        flexWrap="wrap"
        flexShrink={1}
      >
        <Heading as="h1" fontSize="5xl" mb={12}>
          We sent you an email verification!
        </Heading>
        <Text color="grey" fontSize="lg">
          Log back in from the link in your email to finish creating
          <br /> your account.
        </Text>
      </SimpleGrid>
    </Container>
  );
}
