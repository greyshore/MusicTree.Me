import React from "react";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { verifyLogin } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { validateEmail } from "~/utils";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Input from "~/components/common/form/input";

export const meta: MetaFunction = () => {
  return {
    title: "Login - MusicTree.me",
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
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json({ errors: { email: "Email is invalid." } }, { status: 400 });
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

  const user = await verifyLogin(email, password);

  if (!user) {
    return json(
      { errors: { email: "Invalid email or password" } },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/my-tree",
  });
};

export default function Login() {
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

  return (
    <Container as="main" maxW="6xl">
      <SimpleGrid
        width={{ sm: "100%", md: "50%" }}
        columns={1}
        p={5}
        padding={0}
        marginTop={8}
        flexWrap="wrap"
        flexShrink={1}
      >
        <Box>
          <Heading as="h1" fontSize="5xl">
            Welcome Back
          </Heading>
          <Text color="grey" as="span">
            Please enter your details
          </Text>
        </Box>
        <Box as={Form} method="post" noValidate>
          <VStack spacing={8} marginTop={16}>
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
            <Box w="100%">
              <Button
                type="submit"
                colorScheme="green"
                borderRadius="full"
                width="100%"
                my={10}
              >
                Sign in
              </Button>
            </Box>
          </VStack>
          <Center>
            <Text>
              Don't have an account?{" "}
              <Link to="/join" style={{ color: "#2B6CB0" }}>
                Sign up for free.
              </Link>
            </Text>
          </Center>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
