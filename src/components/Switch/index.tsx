import SwitchMUI, { SwitchProps } from "@mui/material/Switch";

/**
 * Primary UI component for user interaction
 */
const Switch = ({ ...props }: SwitchProps) => {
  return <SwitchMUI {...props} />;
};

export default Switch;
