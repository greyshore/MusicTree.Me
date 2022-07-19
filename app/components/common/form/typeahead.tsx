import * as React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const Typeahead = () => {
  const [searchParams] = useSearchParams();
  const myInstruments = () => {
    for (const value of searchParams.values()) {
      return value.split(",");
    }
    return [];
  };
  return (
    <>
      <FormControl>
        <FormLabel ml={1} color="#777E8B">
          Add Your Instruments
        </FormLabel>
        <InputGroup>
          ]
          <Input
            type="input"
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
