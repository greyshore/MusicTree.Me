import { Button } from "@chakra-ui/react";
import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { deleteStudent, deleteTeacher } from "~/models/user.server";
import { getUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request);
  const formData = await request.formData();
  const relationshipId = formData.get("relationshipId");
  const relationshipType = formData.get("type");
  if (relationshipType === "student" && relationshipId)
    await deleteStudent(userId, relationshipId.toString());
  if (relationshipType === "teacher" && relationshipId)
    await deleteTeacher(userId, relationshipId.toString());
  return redirect("/profile");
};

export default function RemoveRelationship({ ...props }) {
  return (
    <Form
      method="post"
      action="/removeRelationship"
      style={{ display: "inline", margin: "20px" }}
    >
      <input type="hidden" name="relationshipId" value={props.relationshipId} />
      <input type="hidden" name="type" value={props.relationshipType} />
      <Button type="submit" colorScheme="red" borderRadius="full" my={10}>
        Remove
      </Button>
    </Form>
  );
}
