import { Flex } from "@chakra-ui/react";

const InstrumentList = ({ category }: { category: string | null }) => (
  <>
    {category && (
      <Flex
        p={5}
        background="white"
        borderRadius="lg"
        borderWidth="1px"
        display="flex"
        paddingBottom={0}
        cursor="pointer"
        width="100%"
      >
        {category}
      </Flex>
    )}
  </>
);

export default InstrumentList;
