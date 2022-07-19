import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
} from "@chakra-ui/react";
// @todo: errors, helper text
type InputProps = {
  name: string;
  label: string;
  type?: string;
  helperText?: string;
};
export default function Input({
  name,
  label,
  type = "input",
  helperText,
}: InputProps) {
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
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
