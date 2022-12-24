import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,

  // argTypes: {
  //   backgroundColor: {
  //     control: "color",
  //   },
  // },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  titleValue: "Test",
  collapsed: true,
  items: [{ title: "111", value: "111" }],
  //onChange: () => void,
};
