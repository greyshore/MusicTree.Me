import { Flex, Center, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  WoodWindIcon,
  KeyboardIcon,
  BrassIcon,
  StringsIcon,
} from "~/components/icons";
import InstrumentList from "~/components/instrument/list";
import { INSTRUMENT_TYPES } from "~/models/instrument/client";
import type { Instrument } from "~/models/instrument/server";

const selections = Object.values(INSTRUMENT_TYPES);
const icon = {
  [INSTRUMENT_TYPES.WOODWIND]: <WoodWindIcon />,
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
  >
    <Text>{label}</Text>
  </Center>
);

const InstrumentSelect = () => {
  const [selectedInstrument, setSelectedInstrument] =
    useState<Instrument | null>(null);
  return (
    <>
      <Flex
        p={5}
        background="white"
        borderRadius="lg"
        borderBottom={selectedInstrument ? "none" : undefined}
        borderBottomRadius={selectedInstrument ? "none" : undefined}
        borderWidth="1px"
        display="flex"
        justifyContent="space-around"
        paddingBottom={0}
        marginTop={8}
      >
        {selections.map((type) => {
          return (
            <Center
              key={type}
              flexDir={"column"}
              onClick={() => setSelectedInstrument(type)}
            >
              {icon[type]}
              <Tab isActive={selectedInstrument === type} label={type} />
            </Center>
          );
        })}
      </Flex>
      <InstrumentList category={selectedInstrument} />
    </>
  );
};

export default InstrumentSelect;
