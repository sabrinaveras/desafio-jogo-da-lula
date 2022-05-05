import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Design System/Buttons",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Test text button",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: "Test text",
  width: '100px',
  height: '30px',
};

export const BigButton = Template.bind({});
BigButton.args = {
  children: "Test text",
  width: '200px',
  height: '50px',
};
