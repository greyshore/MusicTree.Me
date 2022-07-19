import type { MetaFunction } from "@remix-run/node";
import { Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Input from "~/components/common/form/input";
import InstrumentList from "~/components/instrument/list";
import InstrumentFamilySelect from "~/components/instrument/family-select";

export const meta: MetaFunction = () => {
  return {
    title: "Profile - MusicTree.me",
  };
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
export default function Profile() {
  return (
    <Container as="main" maxW="6xl">
      <VStack spacing={8} alignItems="flex-start">
        <Text>Leave space for section headers</Text>
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
                  <Input name="firstName" label="First Name" />
                  <Input name="lastName" label="Last Name" />
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
              </>
            }
            column2={null}
          ></TwoColumnGrid>
        </VStack>
      </VStack>
    </Container>
  );
}
