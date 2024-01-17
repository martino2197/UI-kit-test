import type { Meta,  StoryObj } from '@storybook/react';
import { Chip } from 'src/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/DataDisplay/Chip',
  component: Chip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // disabled: { control: 'boolean', type:'boolean' },
    // variant:  { control: 'radio', options: ['filled', 'standard', 'outlined'] },
    color:  { control: 'select', options: [ "default", "primary", "secondary", "success", "error", "info", "warning" ] },
    size:  { control: 'select', options: ['small', 'medium', 'large'] },
    variant:  { control: 'select', options: [ "filled", "outlined" ] },
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    disabled: false,
    color: "default",
    size: "medium",
    label: "Default"
  },
};

export const Primary: Story = {
    args: {
        disabled: false,
        color: "primary",
        size: "medium",
        label: "Primary",
        // variant: "outlined"
    },
  };

export const Secondary: Story = {
    args: {
      disabled: false,
      color: "secondary",
      size: "medium",
      label: "Secondary",
    //   variant: "outlined"
    },
  };

  export const Error: Story = {
    args: {
      disabled: false,
      color: "error",
      size: "medium",
      label: "Error",
    //   variant: "outlined"
    },
  };

  export const Info: Story = {
    args: {
      disabled: false,
      color: "info",
      size: "medium",
      label: "Info",
    //   variant: "outlined"
    },
  };

  export const Success: Story = {
    args: {
      disabled: false,
      color: "success",
      size: "medium",
      label: "Success",
    //   variant: "outlined"
    },
  };

  export const Warning: Story = {
    args: {
      disabled: false,
      color: "warning",
      size: "medium",
      label: "Warning",
    //   variant: "outlined"
    },
  };



