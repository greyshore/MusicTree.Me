import { Box, Flex, Center, Text, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import {
  WoodWindIcon,
  KeyboardIcon,
  BrassIcon,
  StringsIcon,
} from "~/components/icons";
import InstrumentList from "~/components/instrument/list";
import { INSTRUMENT_TYPES } from "~/models/instrument/client";
import type { InstrumentFamily } from "~/models/instrument/server";

const selections = Object.values(INSTRUMENT_TYPES);
const icon = {
  [INSTRUMENT_TYPES.WOODWINDS]: <WoodWindIcon />,
  [INSTRUMENT_TYPES.KEYBOARD]: <KeyboardIcon />,
  [INSTRUMENT_TYPES.BRASS]: <BrassIcon />,
  [INSTRUMENT_TYPES.STRINGS]: <StringsIcon />,
};
// @todo: keyboard navigation (a11y)
const Tab = ({ isActive, label }: { isActive: boolean; label: string }) => (
  <Center
    as="button"
    width="100%"
    height={"40px"}
    background={isActive ? "green" : "unset"}
    color={isActive ? "white" : "inherit"}
    borderTopLeftRadius={"10px"}
    borderTopRightRadius={"10px"}
    mt={8}
    aria-expanded={isActive}
  >
    <Text>{label}</Text>
  </Center>
);

const InstrumentFamilySelect = () => {
  const [selectedFamily, setSelectedFamily] = useState<InstrumentFamily | null>(
    null
  );

  return (
    <SimpleGrid>
      <SimpleGrid
        p={5}
        background="white"
        borderRadius="lg"
        borderBottom={selectedFamily ? "none" : undefined}
        borderBottomRadius={selectedFamily ? "none" : undefined}
        borderWidth="1px"
        paddingBottom={0}
        marginTop={8}
        flexWrap="wrap"
        flexShrink={1}
        columns={{ sm: 1, md: 4 }}
      >
        {selections.map((type) => {
          return (
            <Center
              key={type}
              flexDir={"column"}
              onClick={() => setSelectedFamily(type)}
            >
              <Box width={48} height={250}>
                {icon[type]}
              </Box>
              <Tab isActive={selectedFamily === type} label={type} />
            </Center>
          );
        })}
      </SimpleGrid>
      <InstrumentList family={selectedFamily} />
    </SimpleGrid>
  );
};

export default InstrumentFamilySelect;
