import type { Meta, StoryObj } from "@storybook/react";
import Button from "src/components/Button";
import { Card, CardActions, CardContent } from "src/components/Card";
import TextField from "src/components/TextField";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Layout/Card",
  component: Card,
  // render: ({ ...args }) => (
  //   <Card>
  //     <CardContent>
  //       <p>nice</p>
  //     </CardContent>
  //     <CardActions>
  //       <Button size="large">Learn More</Button>
  //     </CardActions>
  //   </Card>
  // ),
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

//👇 The ListTemplate construct will be spread to the existing stories.
export const CardBasic: Story = {
  render: ({ ...args }) => {
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
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CardBasicStory: Story = {
  ...CardBasic,
  args: {
    // disabled: false,
    // color: "primary",
    // size: "medium",
    // label: "TextField"
  },
};

export const Outlined: Story = {
  args: {
    // variant: "outlined",
    // children: 'Button',
  },
};

export const Large: Story = {
  args: {
    // children: 'Button',
  },
};
