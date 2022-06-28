import * as React from "react";
import type { Instrument } from "~/models/instrument/server";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  InputGroup,
  InputRightElement,
  HStack,
  Tag,
  TagLabel,
  TagRightIcon,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";

const Typeahead = () => {
  const [searchParams] = useSearchParams();
  const myInstruments = () => {
    for (const value of searchParams.values()) {
      return value.split(",");
    }
    return [];
  };
  const [instrumentSelections, setInstrumentSelections] =
    React.useState(myInstruments);
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="foo" ml={1} color="#777E8B">
          Add Your Instruments
        </FormLabel>
        <InputGroup>
          <Input
            id="foo"
            type="foo"
            required
            //   aria-invalid={actionData?.errors?.email ? true : undefined}
            //   aria-describedby="email-error"
            sx={{
              // @todo extract to input styles
              background: "white",
              borderRadius: "50px",
              borderColor: "#9DA7B1",
            }}
          />
          <InputRightElement width="100px">
            <Button
              width="100px"
              borderRadius="full"
              background="green"
              color="white"
            >
              Add
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Flex wrap="wrap" justifyContent="left" width="100%">
        {instrumentSelections?.map((selection, idx) => (
          <Box key={idx} mt={2} mr={2}>
            <Tag
              size="lg"
              variant="outline"
              background="white"
              color="black"
              borderRadius="full"
            >
              <TagLabel>{selection}</TagLabel>
              <TagRightIcon as={CloseIcon} />
            </Tag>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Typeahead;
