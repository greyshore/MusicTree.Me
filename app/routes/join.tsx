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
import type { User } from "~/models/user.server";
import { createUser, getProfileByEmail } from "~/models/user.server";
import { validateEmail } from "~/utils";
import * as React from "react";
import {
  Button,
  SimpleGrid,
  Container,
  Text,
  Heading,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Input from "~/components/common/form/input";
import InstrumentBadge from "~/components/instrument/badge";
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
  const password = formData.get("password");
  const instruments = formData.get("my-instruments");
  const redirectTo = formData.get("redirectTo");

  // Ensure the email is valid
  if (!validateEmail(email)) {
    return json<ActionData>(
      { errors: { email: "Email is invalid." } },
      { status: 400 }
    );
  }

  if (typeof password !== "string") {
    return json(
      { errors: { password: "Valid password is required." } },
      { status: 400 }
    );
  }

  if (password.length < 6) {
    return json(
      { errors: { password: "Password is too short" } },
      { status: 400 }
    );
  }
  const user: User = await createUser(
    email,
    password,
    firstName,
    lastName,
    instruments
  );

  if (!user) {
    return json({ errors: { email: "Something went wrong" } }, { status: 400 });
  }
  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo: "/explore",
  });
};

export default function Join() {
  const submit = useSubmit();
  const [searchParams, setSearchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/explore";
  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);

  const myInstruments = React.useCallback(() => {
    for (const value of searchParams.values()) {
      return value.split(",");
    }
    return [];
  }, [searchParams]);

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
    // @todo action="/profile"
    await submit(formData, { method: "post", action: "/join" });
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
        <Heading as="h1" fontSize="5xl">
          Sign up to create your tree and explore.
        </Heading>
        <Text color="grey" as="span">
          If you're new, we'll send you sign in link by email. Already have an
          account?
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
              <Input name="first-name" label="First Name" />
              <Input name="last-name" label="Last Name" />
            </HStack>
            <Input
              name="email"
              label="Email"
              type="email"
              helperText="We'll never share your email."
            />
            <Input
              name="password"
              label="Password"
              type="password"
              helperText="Must be at least 6 characters long."
            />
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
        </Box>
      </SimpleGrid>
    </Container>
  );
}
