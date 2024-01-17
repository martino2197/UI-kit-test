import CardMUI, { CardProps } from "@mui/material/Card";
import CardContentMUI, { CardContentProps } from "@mui/material/CardContent";
import CardActionsMUI, { CardActionsProps } from "@mui/material/CardActions";

export const Card = ({ ...props }: CardProps) => {
  return <CardMUI {...props}>{props.children}</CardMUI>;
};

export const CardContent = ({ ...props }: CardContentProps) => {
  return <CardContentMUI {...props}>{props.children}</CardContentMUI>;
};

export const CardActions = ({ ...props }: CardActionsProps) => {
  return <CardActionsMUI {...props}>{props.children}</CardActionsMUI>;
};
