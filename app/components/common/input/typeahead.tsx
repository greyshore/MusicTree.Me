import * as React from "react";

import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";

const Typeahead = () => {
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="foo" ml={1} color="#777E8B">
          Add Your Instruments
        </FormLabel>
        <Box display={"flex"}>
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
              position: "absolute",
              borderColor: "#9DA7B1",
            }}
          />
          <Button
            borderRadius="full"
            background="green"
            color="white"
            left="458px"
            width="100px"
          >
            Add
          </Button>
        </Box>
      </FormControl>
    </>
  );
};

export default Typeahead;
