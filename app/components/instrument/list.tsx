import {
  Button,
  Center,
  Checkbox,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { useState } from "react";
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
            paddingLeft={8}
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
            <Grid
              as={Form}
              method="post"
              action=""
              minH={200}
              width="100%"
              templateColumns="repeat(3, 1fr)"
            >
              {instrumentList?.map((i) => (
                <GridItem key={i}>
                  <Checkbox
                    checked={checked.includes(i)}
                    onChange={handleChange}
                    name={i}
                    size="sm"
                    colorScheme="green"
                    flexFlow="1"
                  >
                    {i}
                  </Checkbox>
                </GridItem>
              ))}
            </Grid>
          </Flex>
          {!!checked.length && (
            <Center mt={8}>
              <Button onClick={() => console.log(checked)}>Continue</Button>
            </Center>
          )}
        </>
      )}
    </>
  );
};

export default InstrumentList;
