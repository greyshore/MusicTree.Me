import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { createStudent } from "~/models/user.server";
import { getUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request);
  const formData = await request.formData();
  const studentEmail = formData.get("email");
  if (studentEmail) await createStudent(userId, studentEmail.toString());
  return redirect("/profile");
};

export default function AddStudent() {
  return (
    <Form method="post" action="/addStudent">
      <VStack spacing={8}>
        <HStack width="100%" spacing={5}>
          <label>
            email:
            <input name="email" type="text" />
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
            Add Student
          </Button>
        </Box>
      </VStack>
    </Form>
  );
}
