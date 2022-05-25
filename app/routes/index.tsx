import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOptionalUser } from "~/utils";
import {
  WoodWindIcon,
  KeyboardIcon,
  BrassIcon,
  StringsIcon,
} from "~/components/icons";

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
        <Container maxW="full">
          <Flex
            p={5}
            shadow="md"
            background="white"
            borderRadius="lg"
            borderWidth="1px"
            display="flex"
            justifyContent="space-around"
          >
            <Center flexDir={"column"}>
              <VStack spacing={10}>
                <WoodWindIcon />
                <Text>Woodwinds</Text>
              </VStack>
            </Center>
            <Center flexDir={"column"}>
              <VStack spacing={10}>
                <KeyboardIcon />
                <Text>Keyboard</Text>
              </VStack>
            </Center>
            <Center flexDir={"column"}>
              <VStack spacing={10}>
                <BrassIcon />
                <Text>Brass</Text>
              </VStack>
            </Center>
            <Center flexDir={"column"}>
              <VStack spacing={10}>
                <StringsIcon />
                <Text>Strings</Text>
              </VStack>
            </Center>
          </Flex>
        </Container>
      </VStack>
    </Container>
  );
}
