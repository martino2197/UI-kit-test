import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tab, Tabs } from "src/components/Tabs";
import Box from "@mui/material/Box";
import { Card, CardActions, CardContent } from "src/components/Card";
import TextField from "src/components/TextField";
import Button from "src/components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Tabs> = {
  title: "Components/Layout/Tabs",
  component: Tabs,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // disabled: { control: 'boolean', type:'boolean' },
    // variant:  { control: 'radio', options: ['filled', 'standard', 'outlined'] },
    color: {
      control: "select",
      options: [
        "inherit",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
      ],
    },

    // backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const BasicTabs = ({ ...props }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab label="Item One" value="1" />
      <Tab label="Item Two" value="2" />
      <Tab label="Item Three" value="3" />
    </Tabs>
  );
};

const CardBasic = ({ ...args }) => {
  return (
    <Card className="p-4">
      <CardContent className="grid grid-cols-2 gap-6">
        <TextField label="Nombre" />
        <TextField label="Apellido" />
        <TextField label="Nombre" />
        <TextField label="Nombre" />
        <TextField label="Nombre" />
        <TextField label="Nombre" />
      </CardContent>
      <CardActions className="flex justify-center">
        <Button size="large">Learn More</Button>
      </CardActions>
    </Card>
  );
};

//👇 The ListTemplate construct will be spread to the existing stories.
export const Primary: Story = {
  // render: ({ args }) => (
  //   <BasicTabs {...args}>
  //     <Tab label="Item One" value="1" />
  //     <Tab label="Item Two" value="2" />
  //     <Tab label="Item Three" value="3" />
  //   </BasicTabs>
  // ),
  render: ({ ...props }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" value={0} />
            <Tab label="Item Two" value={1} />
            <Tab label="Item Three" value={2} />
          </Tabs>
        </Box>
        {value === 0 && <div>Item One {value}</div>}
        {value === 1 && (
          <>
            <CardBasic />
          </>
        )}
        {value === 2 && <div>Item Three {value}</div>}
      </Box>
    );
  },
};

// export const TabsBasic: Story = {
//   render: ({ args }) => (
//     <BasicTabs>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         aria-label="basic tabs example"
//       >
//         <Tab label="Item One" value="1" />
//         <Tab label="Item Two" value="2" />
//         <Tab label="Item Three" value="3" />
//       </Tabs>
//     </BasicTabs>
//   ),
// };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Contained: Story = { ...Primary };
