import { Flex } from "@chakra-ui/react";
import type { InstrumentFamily } from "~/models/instrument/server";

const InstrumentList = ({ family }: { family: InstrumentFamily | null }) => (
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
        {family}
      </Flex>
    )}
  </>
);

export default InstrumentList;
