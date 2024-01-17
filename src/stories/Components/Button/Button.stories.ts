import type { Meta,  StoryObj } from '@storybook/react';
import { Button } from 'src/components';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Inputs/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // disabled: { control: 'boolean', type:'boolean' },
    variant:  { control: 'radio', options: ['text', 'contained', 'outlined'] },
    color:  { control: 'select', options: [ "inherit", "primary", "secondary", "success", "error", "info", "warning" ] },
    size:  { control: 'select', options: ['small', 'medium', 'large'] },

    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Contained: Story = {
  args: {
    disabled: false,
    variant: "contained",
    color: "primary",
    size: "medium",
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    variant: "text",
    children: 'Button',
  },
};