import { Flex } from "@chakra-ui/react";
import { INSTRUMENT_FAMILIES } from "~/models/instrument/client";
import type { InstrumentFamily } from "~/models/instrument/server";

const InstrumentList = ({ family }: { family: InstrumentFamily | null }) => {
  const instrumentList = family && INSTRUMENT_FAMILIES[family];

  return (
    <>
      {family && (
        <Flex
          padding={5}
          paddingLeft={16}
          paddingRight={16}
          mr="px"
          ml="px"
          background="white"
          borderBottomRadius="lg"
          borderTop="1px solid green"
          display="flex"
          paddingBottom={0}
          cursor="pointer"
          height={40}
        >
          {instrumentList}
        </Flex>
      )}
    </>
  );
};

export default InstrumentList;
