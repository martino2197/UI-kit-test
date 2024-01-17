import TabsMUI, { TabsProps } from "@mui/material/Tabs";
import TabMUI, { TabProps } from "@mui/material/Tab";

export const Tabs = ({ ...props }: TabsProps) => {
  return <TabsMUI {...props}>{props.children}</TabsMUI>;
};

export const Tab = ({ ...props }: TabProps) => {
  return <TabMUI {...props}>{props.children}</TabMUI>;
};

// export { default as BasicTabs } from "./BasicTabs";
