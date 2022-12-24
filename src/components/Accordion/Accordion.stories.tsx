import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // primary: true,
  // label: "Accordion",
  titleValue: "Test",
  collapsed: true,
  //onChange: () => void,
};
