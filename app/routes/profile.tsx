import { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Container,
  Heading,
  HStack,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import InstrumentFamilySelect from "~/components/instrument/family-select";
import { useLoaderData } from "@remix-run/react";
import { getUser } from "~/session.server";
import {
  getStudents,
  getTeachers,
  Student,
  Teacher,
} from "~/models/user.server";
import AddRelationship from "~/routes/addRelationship";
import RemoveRelationship from "./removeRelationship";
import {
  getInstruments,
  getInstrumentsByProfileId,
} from "~/models/instrument/server";

export const meta: MetaFunction = () => {
  return {
    title: "Profile - MusicTree.me",
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  const students = await getStudents(user.id);
  const teachers = await getTeachers(user.id);
  const userInstruments = await getInstrumentsByProfileId(user.id);
  const allInstruments = await getInstruments();
  const instrumentListItems = userInstruments.map((i) => i.instrument.name);
  return { user, instrumentListItems, students, teachers, allInstruments };
};

const TwoColumnGrid = (props: {
  column1: React.ReactNode;
  column2: React.ReactNode;
}) => {
  const { column1, column2 } = props;

  return (
    <Grid templateColumns={["100%", "100%", "repeat(2, 1fr)"]} gap={20}>
      <GridItem w="100%">{column1}</GridItem>
      <GridItem w="100%">{column2}</GridItem>
    </Grid>
  );
};

const instrumentList = (instrumentNames: string[]) => {
  return instrumentNames.map((i) => <ListItem key={i}>{i}</ListItem>);
};

const studentList = (students: Student[]) => {
  return students.map((s) => (
    <ListItem key={s.student.id}>
      {s.student.firstName + " " + s.student.lastName}
      <RemoveRelationship
        relationshipId={s.student.id}
        relationshipType={"student"}
      />
    </ListItem>
  ));
};

const teacherList = (teachers: Teacher[]) => {
  return teachers.map((t) => (
    <ListItem key={t.teacher.id}>
      {t.teacher.firstName + " " + t.teacher.lastName}
      <RemoveRelationship
        relationshipId={t.teacher.id}
        relationshipType={"teacher"}
      />
    </ListItem>
  ));
};

export default function Profile() {
  const { user, instrumentListItems, students, teachers, allInstruments } =
    useLoaderData();
  return (
    <Container as="main" maxW="6xl">
      <VStack spacing={8} alignItems="flex-start">
        <Spacer />
        <VStack spacing={20} alignItems="flex-start">
          <Heading>About you</Heading>
          <TwoColumnGrid
            column1={
              <>
                <Heading as="h3" size="md">
                  Professional Info
                </Heading>
                <Text>
                  This will be displayed on your musician profile. This is how
                  someone will search for you.
                </Text>
              </>
            }
            column2={
              <VStack
                alignItems={["center", "center", "flex-start"]}
                spacing={8}
              >
                <HStack alignItems="flex-start" spacing={8}>
                  <Text>{user.firstName}</Text>
                  <Text>{user.lastName}</Text>
                </HStack>
                <HStack>
                  <UnorderedList>
                    {instrumentList(instrumentListItems)}
                  </UnorderedList>
                </HStack>
                <HStack alignItems="center">
                  <InstrumentFamilySelect />
                </HStack>
              </VStack>
            }
          ></TwoColumnGrid>
          <TwoColumnGrid
            column1={
              <>
                <Heading as="h3" size="md">
                  Personal Info
                </Heading>
                <Text>
                  We use this for research purposes and to help connect
                  musicians from diverse groups.
                </Text>
                <Heading as="h3" size="">
                  Your Students
                </Heading>
                <UnorderedList>{studentList(students)}</UnorderedList>
                <AddRelationship instruments={allInstruments} />
                <Heading as="h3" size="">
                  Your Teachers
                </Heading>
                <UnorderedList>{teacherList(teachers)}</UnorderedList>
                <AddRelationship instruments={allInstruments} teacher />
              </>
            }
            column2={null}
          ></TwoColumnGrid>
        </VStack>
      </VStack>
    </Container>
  );
}
