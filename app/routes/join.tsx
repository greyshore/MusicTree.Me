import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import { createUserSession, getUserId } from "~/session.server";
import { createUser, getProfileByEmail } from "~/models/user.server";
import { validateEmail } from "~/utils";
import * as React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  SimpleGrid,
  Container,
  Text,
  Heading,
  Box,
  VStack,
  HStack,
  Grid,
} from "@chakra-ui/react";
import Typeahead from "~/components/common/input/typeahead";
import { FacebookIcon, GoogleIcon } from "~/components/icons";

export const meta: MetaFunction = () => {
  return {
    title: "Sign Up - MusicTree.me",
  };
};

interface ActionData {
  errors: {
    email?: string;
    password?: string;
  };
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  // const email = formData.get("email");
  // const firstName = formData.get("first-name");
  // const lastName = formData.get("last-name");
  // const redirectTo = formData.get("redirectTo");

  // Ensure the email is valid
  // if (!validateEmail(email)) {
  //   return json<ActionData>(
  //     { errors: { email: "Email is invalid." } },
  //     { status: 400 }
  //   );
  // }

  // A user could potentially already exist within our system
  // and we should communicate that well
  // const existingUser = await getProfileByEmail(email);
  // if (existingUser) {
  //   return json<ActionData>(
  //     { errors: { email: "A user already exists with this email." } },
  //     { status: 400 }
  //   );
  // }

  // const user = await createUser(email, password);

  // return createUserSession({
  //   request,
  //   userId: user.id,
  //   remember: false,
  //   redirectTo: typeof redirectTo === "string" ? redirectTo : "/",
  // });
};
const Foo = ({ name, label }: { name: string; label: string }) => (
  <FormControl>
    <FormLabel htmlFor={name} ml={1} color="#777E8B">
      {label}
    </FormLabel>
    <Input
      name={name}
      id={name}
      type="input`"
      required
      // aria-invalid={actionData?.errors[name.toString()] ? true : undefined}
      aria-describedby="email-error"
      sx={{
        // @todo extract to input styles
        background: "white",
        borderRadius: "50px",
        borderColor: "#9DA7B1",
      }}
    />
    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
  </FormControl>
);

export default function Join() {
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef?.current?.focus();
    }
  }, [actionData]);

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const myInstruments = () => {
      for (const value of searchParams.values()) {
        return value;
      }
      return [];
    };
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("my-instruments", myInstruments().toString());
    // submit(formData, { method: "post", action: "/explore" });
  };
  return (
    <Container as="main" maxW="6xl">
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        p={5}
        borderRadius="lg"
        borderWidth="1px"
        padding={0}
        marginTop={8}
        flexWrap="wrap"
        flexShrink={1}
      >
        <div>
          <Heading as="h1" fontSize="5xl">
            Sign up to create your tree and explore.
          </Heading>
          <Text as="span">Already have an accoung?</Text>{" "}
          <Link
            to={{
              pathname: "/login",
              search: searchParams.toString(),
            }}
          >
            Sign in.
          </Link>
          <Box
            as={Form}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            mt="6"
          >
            <VStack spacing={8}>
              <HStack width="100%" spacing={5}>
                <Foo name="first-name" label="First Name" />
                <Foo name="last-name" label="Last Name" />
              </HStack>
              <Typeahead />
            </VStack>

            <Grid templateColumns="1fr auto 1fr" gap={0} my={8}>
              <hr
                style={{
                  color: "gray",
                  borderStyle: "inset",
                  borderWidth: "1px",
                  margin: "0.5em auto",
                  backgroundColor: "black",
                  marginLeft: 0,
                  marginRight: 0,
                }}
              />
              <Text ml={4} mr={4} pb={1}>
                Continue With
              </Text>
              <hr
                style={{
                  color: "gray",
                  borderStyle: "inset",
                  borderWidth: "1px",
                  margin: "0.5em auto",
                  backgroundColor: "black",
                  marginLeft: 0,
                  marginRight: 0,
                }}
              />
            </Grid>
            {/* start login btns */}
            <VStack spacing={8}>
              <HStack width="100%" spacing={5} justifyContent="space-between">
                <Button
                  borderRadius="full"
                  background="white"
                  leftIcon={<GoogleIcon />}
                >
                  Continue with Google
                </Button>
                <Button
                  borderRadius="full"
                  background="white"
                  leftIcon={<FacebookIcon />}
                >
                  Continue with Facebook
                </Button>
              </HStack>
              <Foo name="email" label="Email" />
              <button type="submit">Save</button>
            </VStack>
          </Box>
        </div>
      </SimpleGrid>
    </Container>
  );
}
