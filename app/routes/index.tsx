import { Center, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InstrumentFamilySelect from "~/components/instrument/family-select";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUserId } from "~/session.server";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);

  return json({ userId });
};

export default function Index() {
  const user = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    // we  dont want to onboard if user is logged in
    if (user.userId) {
      navigate("/explore");
    }
  }, [user, navigate]);

  return (
    <Container as="main" maxW="6xl">
      <VStack spacing={8}>
        <Center>
          <Heading as="h1" fontSize="5xl">
            Explore your musical heritage. <br />
            Connect with other musicians.
          </Heading>
        </Center>
        <Center>
          <Text>
            Select an instrument to Sign Up, or Log In to grow your tree:
          </Text>
        </Center>
      </VStack>
      <InstrumentFamilySelect showIcon />
    </Container>
  );
}
