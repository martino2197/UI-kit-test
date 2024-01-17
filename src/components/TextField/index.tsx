import TextFieldMUI, { TextFieldProps } from "@mui/material/TextField";

/**
 * Primary UI component for user interaction
 */
const TextField = ({ ...props }: TextFieldProps) => {
  return <TextFieldMUI {...props}>{props.children}</TextFieldMUI>;
};

export default TextField;
