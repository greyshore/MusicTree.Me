import { FormControl, FormLabel, Input as ChakraInput } from "@chakra-ui/react";
// @todo: errors, helper text
type InputProps = {
  name: string;
  label: string;
  type?: string;
};
export default function Input({ name, label, type = "input" }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={name} ml={1} color="grey">
        {label}
      </FormLabel>
      <ChakraInput
        name={name}
        id={name}
        type={type}
        required
        // aria-invalid={actionData?.errors[name.toString()] ? true : undefined}
        aria-describedby="email-error"
        borderRadius="full"
        variant="outline"
        sx={{
          background: "white",
        }}
      />
      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
    </FormControl>
  );
}
