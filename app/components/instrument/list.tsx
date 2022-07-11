import {
  Button,
  Center,
  Checkbox,
  Flex,
  SimpleGrid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { useEffect, useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { INSTRUMENT_FAMILIES } from "~/models/instrument/client";
import type { InstrumentFamily } from "~/models/instrument/server";

import { rmv, usePrevious } from "~/utils";

const InstrumentList = ({ family }: { family: InstrumentFamily | null }) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [isSmallScreen] = useMediaQuery("(max-width: 767px)");
  const prevFamily = usePrevious(family);
  const navigate = useNavigate();

  const handleChange = (e: {
    currentTarget: { name: string; checked: boolean };
  }) => {
    const myInstrument = e.currentTarget.name;

    if (e.currentTarget.checked) {
      setChecked([...checked, myInstrument]);
    } else {
      setChecked(rmv(checked, myInstrument) as string[]);
    }
  };

  const instrumentList = family && INSTRUMENT_FAMILIES[family];
  const goToJoin = () =>
    navigate({
      pathname: "/join",
      search: `?instrument=${checked}`,
    });
  return (
    <>
      {family && (
        <>
          <Flex
            py={5}
            px={16}
            mr="px"
            ml="px"
            background="white"
            borderBottomRadius="lg"
            borderTop={isSmallScreen ? "none" : "1px solid green"}
            display="flex"
            cursor="pointer"
          >
            <SimpleGrid
              as={Form}
              method="post"
              action=""
              minH={100}
              width="100%"
              columns={{ sm: 1, md: 3 }}
            >
              {instrumentList?.map((instrument) => (
                <GridItem key={instrument}>
                  <Checkbox
                    checked={checked.includes(instrument)}
                    onChange={handleChange}
                    name={instrument}
                    size="md"
                    colorScheme="green"
                    flexFlow="1"
                  >
                    {instrument}
                  </Checkbox>
                </GridItem>
              ))}
            </SimpleGrid>
          </Flex>
          {Boolean(checked.length) && (
            <Center mt={8}>
              <Button
                borderRadius={"35.5px"}
                onClick={goToJoin}
                background="#0D823C"
                color="white"
                rightIcon={<HiOutlineArrowRight size={18} />}
              >
                Continue
              </Button>
            </Center>
          )}
        </>
      )}
    </>
  );
};

export default InstrumentList;
