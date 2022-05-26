import { Flex } from "@chakra-ui/react";

const InstrumentList = ({ category }: { category: string | null }) => (
  <>
    {category && (
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
        {category}
      </Flex>
    )}
  </>
);

export default InstrumentList;
