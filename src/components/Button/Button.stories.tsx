import { StoryFn, Meta } from "@storybook/react";

import ButtonComponent from ".";

const meta: Meta<typeof ButtonComponent> = {
  title: "Button",
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"]
    },
    as: {
      control: "radio",
      options: ["button", "anchor"]
    },
    disabled: {
      control: "boolean",
    },
    icon: {
      control: "boolean",
    },
  },
};

export default meta;

const Template: StoryFn<typeof ButtonComponent> = (args) => (
  <div className="m-3">
    <ButtonComponent {...args} />
  </div>
);

const bindTemplate = (): typeof Template => Template.bind({});

const defaultArgs = {
  outline: false,
  icon: false,
  disabled: false,
  loading: false,
}

export const Primary = bindTemplate();
Primary.args = {
  ...defaultArgs,
  children: "Primary button",
  variant: "primary",
};

export const PrimaryIcon = bindTemplate();
PrimaryIcon.args = {
  ...defaultArgs,
  children: "Primary icon",
  variant: "primary",
  icon: true
};

export const PrimaryOutline = bindTemplate();
PrimaryOutline.args = {
  ...defaultArgs,
  children: "Primary outline",
  variant: "primary",
  outline: true,
};

export const PrimaryOutlineIcon = bindTemplate();
PrimaryOutlineIcon.args = {
  ...defaultArgs,
  children: "Primary outline icon",
  variant: "primary",
  outline: true,
  icon: true,
};

export const Secondary = bindTemplate();
Secondary.args = {
  ...defaultArgs,
  children: "Secondary button",
  variant: "secondary",
};

export const SecondaryIcon = bindTemplate();
SecondaryIcon.args = {
  ...defaultArgs,
  children: "Secondary icon",
  variant: "secondary",
  icon: true
};

export const SecondaryOutline = bindTemplate();
SecondaryOutline.args = {
  ...defaultArgs,
  children: "Secondary outline",
  variant: "secondary",
  outline: true,
};

export const SecondaryOutlineIcon = bindTemplate();
SecondaryOutlineIcon.args = {
  ...defaultArgs,
  children: "Secondary outline icon",
  variant: "secondary",
  outline: true,
  icon: true,
};
