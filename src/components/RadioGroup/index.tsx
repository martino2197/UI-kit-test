import RadioMUI, { RadioProps } from "@mui/material/Radio";
import RadioGroupMUI, { RadioGroupProps } from "@mui/material/RadioGroup";

export const Radio = ({ ...props }: RadioProps) => {
  return <RadioMUI {...props} />;
};

export const RadioGroup = ({ ...props }: RadioGroupProps) => {
  return <RadioGroupMUI {...props}>{props.children}</RadioGroupMUI>;
};
