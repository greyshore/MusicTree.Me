import {
  Button,
  Center,
  Checkbox,
  Flex,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { INSTRUMENT_FAMILIES } from "~/models/instrument/client";
import type { InstrumentFamily } from "~/models/instrument/server";

import { rmv } from "~/utils";

const InstrumentList = ({ family }: { family: InstrumentFamily | null }) => {
  const [checked, setChecked] = useState<string[]>([]);

  const handleChange = (e: {
    currentTarget: { name: string; checked: boolean };
  }) => {
    let selections;
    const myInstrument = e.currentTarget.name;

    if (e.currentTarget.checked) {
      selections = [...checked, myInstrument];
      setChecked(selections);
    } else {
      selections = rmv(checked, myInstrument);
      if (selections) setChecked(selections);
    }
  };

  const instrumentList = family && INSTRUMENT_FAMILIES[family];

  return (
    <>
      {family && (
        <>
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
          >
            <SimpleGrid
              as={Form}
              method="post"
              action=""
              minH={100}
              width="100%"
              columns={{ sm: 1, md: 3 }}
            >
              {instrumentList?.map((intrument) => (
                <GridItem key={intrument}>
                  <Checkbox
                    checked={checked.includes(intrument)}
                    onChange={handleChange}
                    name={intrument}
                    size="md"
                    colorScheme="green"
                    flexFlow="1"
                  >
                    {intrument}
                  </Checkbox>
                </GridItem>
              ))}
            </SimpleGrid>
          </Flex>
          {!!checked.length && (
            <Center mt={8}>
              <Button
                colorScheme="green"
                rightIcon={<HiOutlineArrowRight size={18} />}
                onClick={() => console.log("go to next step")}
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
