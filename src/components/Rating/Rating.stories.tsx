import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Rating, RatingValueType } from "./Rating";

export default {
  title: "Rating stories",
  component: Rating,
  // argTypes: {
  //     backgroundColor: {
  //         control: "color",
  //     },
  // },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyStars = Template.bind({});

EmptyStars.args = {
  value: 0,
  onClick: (a) => a,
};
