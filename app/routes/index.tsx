import { Center, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOptionalUser } from "~/utils";
import InstrumentSelect from "~/components/instrument/select";

export default function Index() {
  const user = useOptionalUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/explore");
    }
  }, [user, navigate]);

  return (
    <Container as="main" maxW="6xl">
      <VStack spacing={8}>
        <Center>
          <Heading as="h1" fontSize="5xl">
            Explore your musical heritage <br />
            Connect with other musicians.
          </Heading>
        </Center>
        <Center>
          <Text>Select an instrument to start</Text>
        </Center>
        <InstrumentSelect />
      </VStack>
    </Container>
  );
}
