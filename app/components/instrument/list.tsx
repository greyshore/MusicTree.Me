import { Flex } from "@chakra-ui/react";

const InstrumentList = ({ category }: { category: string | null }) => (
  <>
    {category && (
      <Flex
        background="white"
        borderBottomRadius="lg"
        borderTop="1px solid green"
        display="flex"
        paddingBottom={0}
        cursor="pointer"
      >
        {category}
      </Flex>
    )}
  </>
);

export default InstrumentList;
