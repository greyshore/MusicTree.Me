import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { createStudent, createTeacher } from "~/models/user.server";
import { getUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request);
  const formData = await request.formData();
  const type = formData.get("type");
  const email = formData.get("email");
  if (type === "student" && email) {
    await createStudent(userId, email.toString());
  }
  if (type === "teacher" && email) {
    await createTeacher(userId, email.toString());
  }
  return redirect("/profile");
};

export default function AddRelationship({ ...props }) {
  const isTeacher = props.teacher;
  const type = isTeacher ? "teacher" : "student";
  return (
    <Form method="post" action="/addRelationship">
      <VStack spacing={8}>
        <HStack width="100%" spacing={5}>
          <label>
            email:
            <input name="email" type="text" />
            <input name="type" hidden value={type} readOnly />
          </label>
        </HStack>
        <Box w="100%">
          <Button
            type="submit"
            colorScheme="green"
            borderRadius="full"
            width="100%"
            my={10}
          >
            Add {type.toLocaleUpperCase()}
          </Button>
        </Box>
      </VStack>
    </Form>
  );
}
