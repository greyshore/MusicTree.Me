import { Center, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOptionalUser } from "~/utils";
import InstrumentFamilySelect from "~/components/instrument/family-select";
import { LoaderFunction } from "@remix-run/node";

// export const loader: LoaderFunction = async ({ request }) => {
//   const url = new URL(request.url)
//   console.log('params: ' + url.searchParams)
//   const param = url.searchParams.get('access_token')
//   debugger
//   //if magic link -> createSession
//   return null;
// };

export default function Index() {
  let location = useLocation(); 
  const user = useOptionalUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/explore");
    }
  }, [user, navigate]);

  useEffect(())


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
          <Text>Select an instrument to Sign Up, or Log In to grow your tree:</Text>
        </Center>
      </VStack>
      <InstrumentFamilySelect />
    </Container>
  );
}
