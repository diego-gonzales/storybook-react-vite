import { Meta, StoryObj } from "@storybook/react";
import { Card as CardComponent } from "./Card";
import * as ButtonStories from "../Button/Button.stories";
import { Button } from "../Button/Button";

const meta = {
  title: "Components/Card",
  component: CardComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    imgSrc:
      "https://static.overlay-tech.com/assets/ebef6707-1b9a-4b2b-902b-5495631db30c.png",
    title: "Superman",
    description:
      "Es un superheroe ficticio que aparecio por primera vez en los comics estadounidenses publicados por DC Comics.",
    children: <Button {...ButtonStories.Primary.args} />
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: { language: 'tsx' }
    }
  }
};
