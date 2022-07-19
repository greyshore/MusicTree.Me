import { Box, Center, Text, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import {
  WoodWindIcon,
  KeyboardIcon,
  BrassIcon,
  StringsIcon,
  PercussionIcon,
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
  [INSTRUMENT_TYPES.PERCUSSION]: <PercussionIcon />,
};
// @todo: keyboard navigation (a11y)
const Tab = ({ isActive, label }: { isActive: boolean; label: string }) => (
  <Center
    as="button"
    width="100%"
    height={"60px"}
    background={isActive ? "#005122" : "unset"}
    color={isActive ? "white" : "inherit"}
    borderTopLeftRadius={"32px"}
    borderTopRightRadius={"32px"}
    borderBottom={!isActive ? "1px solid #E9E9EE" : "none"}
    mt={8}
    aria-expanded={isActive}
  >
    <Text>{label}</Text>
  </Center>
);

const InstrumentFamilySelect = (props: { showIcon?: boolean }) => {
  const { showIcon } = props;
  const [selectedFamily, setSelectedFamily] = useState<InstrumentFamily | null>(
    null
  );
  const [isSmallScreen] = useMediaQuery("(max-width: 767px)");

  return (
    <SimpleGrid>
      <SimpleGrid
        background="white"
        borderRadius="lg"
        borderBottom={selectedFamily ? "none" : undefined}
        borderBottomRadius={selectedFamily ? "none" : undefined}
        borderWidth="1px"
        padding={0}
        pt={"32px"}
        pl={"10px"}
        pr={"36px"}
        marginTop={8}
        flexWrap="wrap"
        flexShrink={1}
        columns={{ sm: 1, md: 5 }}
        gridGap={8}
      >
        {selections.map((type) => {
          return (
            <Center
              key={type}
              flexDir={"column"}
              _hover={{ cursor: "pointer" }}
              onClick={() => setSelectedFamily(type)}
            >
              {showIcon && (
                <Box width={48} height={180}>
                  {icon[type]}
                </Box>
              )}
              <Tab isActive={selectedFamily === type} label={type} />
              {isSmallScreen &&
                Boolean(selectedFamily) &&
                type === selectedFamily && (
                  <InstrumentList family={selectedFamily} />
                )}
            </Center>
          );
        })}
      </SimpleGrid>
      {!isSmallScreen && <InstrumentList family={selectedFamily} />}
    </SimpleGrid>
  );
};

export default InstrumentFamilySelect;
