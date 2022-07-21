import { Button } from "@chakra-ui/react";
import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { deleteStudent } from "~/models/user.server";
import { getUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request);
  const formData = await request.formData();
  const studentId = formData.get("studentId");
  if (studentId) await deleteStudent(userId, studentId.toString());
  return redirect("/profile");
};

export default function RemoveStudent({ ...props }) {
  return (
    <Form
      method="post"
      action="/removeStudent"
      style={{ display: "inline", margin: "20px" }}
    >
      <input type="hidden" name="studentId" value={props.studentId} />
      <Button type="submit" colorScheme="red" borderRadius="full" my={10}>
        Remove
      </Button>
    </Form>
  );
}
