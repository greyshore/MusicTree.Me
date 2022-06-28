import * as React from "react";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const Typeahead = () => {
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
    </>
  );
};

export default Typeahead;
