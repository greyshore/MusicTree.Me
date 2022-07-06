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
  useNavigate,
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
  Stack,
  Divider,
} from "@chakra-ui/react";
import InstrumentBadge from "~/components/instrument/badge";
import { FacebookIcon, GoogleIcon } from "~/components/icons";
import type { Instrument } from "~/models/instrument/server";

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
  const email = formData.get("email");
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const redirectTo = formData.get("redirectTo");

  // Ensure the email is valid
  if (!validateEmail(email)) {
    return json<ActionData>(
      { errors: { email: "Email is invalid." } },
      { status: 400 }
    );
  }

  // A user could potentially already exist within our system
  // and we should communicate that well
  const existingUser = await getProfileByEmail(email);
  if (existingUser) {
    return json<ActionData>(
      { errors: { email: "A user already exists with this email." } },
      { status: 400 }
    );
  }
  const user = await createUser(email, "password");

  return redirectTo;
  // return createUserSession({
  //   request,
  //   userId: user.id,
  //   remember: false,
  //   redirectTo: "/explore",
  // });
};
const Foo = ({ name, label }: { name: string; label: string }) => (
  <FormControl>
    <FormLabel htmlFor={name} ml={1} color="grey">
      {label}
    </FormLabel>
    <Input
      name={name}
      id={name}
      type="input`"
      required
      // aria-invalid={actionData?.errors[name.toString()] ? true : undefined}
      aria-describedby="email-error"
      borderRadius="full"
      variant="outline"
      sx={{
        background: "white",
      }}
    />
    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
  </FormControl>
);

export default function Join() {
  const submit = useSubmit();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const redirectTo = searchParams.get("redirectTo") ?? "/explore";
  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);

  const myInstruments = React.useCallback(() => {
    for (const value of searchParams.values()) {
      return value.split(",");
    }
    return [];
  }, [searchParams]);
  console.log(myInstruments());

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef?.current?.focus();
    }
  }, [actionData]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const myInstruments = () => {
      for (const value of searchParams.values()) {
        return value;
      }
      return [];
    };
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("my-instruments", myInstruments().toString());
    // @todo
    // await submit(formData, { method: "post", action: "/join" });
    navigate("/explore", { replace: true });
  };
  const handleRemoveMyInstrument = React.useCallback(
    (...args: Instrument[]) => {
      const [instrument] = args;
      // @todo rmv instrument from params
      console.log(instrument);
    },
    []
  );
  return (
    <Container as="main" maxW="6xl">
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        p={5}
        padding={0}
        marginTop={8}
        flexWrap="wrap"
        flexShrink={1}
      >
        <div>
          <Heading as="h1" fontSize="5xl">
            Sign up to create your tree and explore.
          </Heading>
          <Text color="grey" as="span">
            Already have an accoung?
          </Text>{" "}
          <Link
            style={{ color: "#2B6CB0" }}
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
              <Foo name="email" label="Email" />
              <InstrumentBadge
                selections={myInstruments() as Instrument[]}
                onClick={handleRemoveMyInstrument}
              />
              <Box w="100%">
                <Button
                  type="submit"
                  colorScheme="green"
                  borderRadius="full"
                  width="100%"
                  my={10}
                >
                  Sign up
                </Button>
              </Box>
            </VStack>
            <Stack direction="row" p={4} alignItems="center">
              <Divider orientation="horizontal" />
              <Text pl={8} pr={8}>
                or
              </Text>
              <Divider orientation="horizontal" />
            </Stack>
            {/* start login btns */}
            <VStack spacing={8} mt={8}>
              <HStack width="100%" spacing={5} justifyContent="space-between">
                <Button
                  borderRadius="full"
                  background="white"
                  variant="outline"
                  leftIcon={<GoogleIcon />}
                  w="50%"
                >
                  Continue with Google
                </Button>
                <Button
                  borderRadius="full"
                  background="white"
                  variant="outline"
                  leftIcon={<FacebookIcon />}
                  w="50%"
                >
                  Continue with Facebook
                </Button>
              </HStack>
            </VStack>
          </Box>
        </div>
      </SimpleGrid>
    </Container>
  );
}
