import React, { useState } from "react";

import { Select } from "./Select";

import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;

export const WithValue = () => {
  const [value, setValue] = useState("2");
  return (
    <Select
      onChange={setValue}
      value={value}
      items={[
        { title: "Moscow", value: "1" },
        { title: "Khimki", value: "2" },
        { title: "Piter", value: "3" },
      ]}
      // value={"2"}
    />
  );
};

export const WithoutValue = () => {
  const [value, setValue] = useState("null");
  return (
    <Select
      onChange={setValue}
      value={value}
      items={[
        { title: "Moscow", value: "1" },
        { title: "Khimki", value: "2" },
        { title: "Piter", value: "3" },
      ]}
    />
  );
};
