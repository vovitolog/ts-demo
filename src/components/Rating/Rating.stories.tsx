import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Rating, RatingValueType } from "./Rating";
import { func } from "prop-types";

export default {
  title: "Rating stories",
  component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyStars = Template.bind({});

EmptyStars.args = {
  value: 0,
  // onClick: (a) => a,
};

export const ChangedRating = Template.bind({});

ChangedRating.args = {
  value: 5,
  onClick: function (value) {
    return value;
  },
};

export const ChangeRating = () => {
  const [rating, setRating] = useState<RatingValueType>(1);
};
