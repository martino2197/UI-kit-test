import ChipMUI, { ChipProps } from "@mui/material/Chip";

/**
 * Primary UI component for user interaction
 */

const Chip = ({ ...props }: ChipProps) => {
  return <ChipMUI {...props} />;
};

export default Chip;
