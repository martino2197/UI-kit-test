import ButtonMUI, { ButtonProps } from "@mui/material/Button";

/**
 * Primary UI component for user interaction
 */
const Button = ({ ...props }: ButtonProps) => {
  return <ButtonMUI {...props}>{props.children}</ButtonMUI>;
};

export default Button;
