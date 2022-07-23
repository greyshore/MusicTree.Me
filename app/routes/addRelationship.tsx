import { Box, Button, HStack, Select, VStack } from "@chakra-ui/react";
import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { InstrumentRecord } from "~/models/instrument/server";
import { createStudent, createTeacher } from "~/models/user.server";
import { getUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request);
  const formData = await request.formData();
  const type = formData.get("type");
  if (type === "student") {
    await createStudent(userId, formData);
  }
  if (type === "teacher") {
    await createTeacher(userId, formData);
  }
  return redirect("/profile");
};

export default function AddRelationship({ ...props }) {
  const isTeacher = props.teacher;
  const type = isTeacher ? "teacher" : "student";

  const options = props.instruments.map((i: InstrumentRecord) => {
    return (
      <option key={i.name + i.id} value={i.id}>
        {i.name}
      </option>
    );
  });
  return (
    <Form method="post" action="/addRelationship">
      <VStack spacing={8}>
        <HStack width="100%" spacing={5}>
          <label>
            First Name:
            <input name="firstName" type="text" />
            Middle Name:
            <input name="middleName" type="text" />
            Last Name:
            <input name="lastName" type="text" />
            Instrument:
            <select name="instrument" placeholder="instrument">
              {options}
            </select>
            Start Year:
            <input name="startYear" type="number" />
            End Year:
            <input name="endYear" type="number" />
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
