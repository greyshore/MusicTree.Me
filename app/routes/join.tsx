import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { createUserSession, getUserId } from "~/session.server";
import { createUser, getProfileByEmail } from "~/models/user.server";
import { validateEmail } from "~/utils";
import * as React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  SimpleGrid,
  Container,
  Text,
  Heading,
  Box,
  VStack,
} from "@chakra-ui/react";
import signupImg from "../images/signup.jpeg";

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
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");

  // Ensure the email is valid
  if (!validateEmail(email)) {
    return json<ActionData>(
      { errors: { email: "Email is invalid." } },
      { status: 400 }
    );
  }

  // What if a user sends us a password through other means than our form?
  if (typeof password !== "string") {
    return json(
      { errors: { password: "Valid password is required." } },
      { status: 400 }
    );
  }

  // Enforce minimum password length
  if (password.length < 6) {
    return json<ActionData>(
      { errors: { password: "Password is too short." } },
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

  const user = await createUser(email, password);

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/",
  });
};

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;

  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef?.current?.focus();
    }

    if (actionData?.errors?.password) {
      passwordRef?.current?.focus();
    }
  }, [actionData]);

  const Foo = ({ name, label }: { name: string; label: string }) => (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        id={name}
        type={name}
        required
        aria-invalid={actionData?.errors?.email ? true : undefined}
        aria-describedby="email-error"
      />
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  );
  return (
    <Container as="main" maxW="6xl">
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        background="white"
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
          <Text as="span">Already have an account?</Text>{" "}
          <Link
            to={{
              pathname: "/login",
              search: searchParams.toString(),
            }}
          >
            Sign in.
          </Link>
          <Box as={Form} method="post" noValidate p="12" mt="6">
            <VStack spacing="20">
              <Foo name="first-name" label="First name" />
              <Foo name="last-name" label="Last name" />
              <Button type="submit">Next</Button>
            </VStack>
          </Box>
        </div>
        <Box>
          <img
            src="https://via.placeholder.com/150"
            style={{ width: "100%" }}
            alt="Nice music illustration"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
