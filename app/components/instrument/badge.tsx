import { CloseIcon } from "@chakra-ui/icons";
import { Flex, Box, Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import type { Instrument } from "~/models/instrument/server";

const InstrumentBadge = ({
  selections,
  onClick,
}: {
  selections: Instrument[];
  onClick: (selection: Instrument) => void;
}) => {
  const handleClick = (selection: Instrument) => {
    onClick(selection);
  };
  return (
    <Flex wrap="wrap" justifyContent="left" width="100%">
      {selections?.map((selection: Instrument, idx: number) => (
        <Box key={idx} mt={2} mr={2}>
          <Tag
            size="lg"
            variant="outline"
            background="white"
            borderRadius="full"
            justifyContent="space-between"
            minW={40}
            maxW={80}
          >
            <TagLabel>{selection}</TagLabel>
            <TagRightIcon
              as={CloseIcon}
              onClick={() => handleClick(selection)}
            />
          </Tag>
        </Box>
      ))}
    </Flex>
  );
};

export default InstrumentBadge;
