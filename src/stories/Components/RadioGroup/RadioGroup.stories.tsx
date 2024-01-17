import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "src/components/RadioGroup";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Inputs/RadioGroup",
  component: RadioGroup,
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
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

//👇 The ListTemplate construct will be spread to the existing stories.
const CardBasic: Story = {
  render: ({ ...args }) => {
    return (
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Contained: Story = {
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
