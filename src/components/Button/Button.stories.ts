import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  // tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default"
  }
};

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary"
  }
};
