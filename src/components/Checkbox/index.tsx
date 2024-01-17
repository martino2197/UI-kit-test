import CheckboxMUI, { CheckboxProps } from "@mui/material/Checkbox";

/**
 * Primary UI component for user interaction
 */

const Checkbox = ({ ...props }: CheckboxProps) => {
  return <CheckboxMUI {...props} />;
};

export default Checkbox;
