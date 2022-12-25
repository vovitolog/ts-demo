import React, { useState } from "react";

import UncontrolledAccordion from "./UncontrolledAccordion";

import { ComponentMeta } from "@storybook/react";

export default {
  title: "UncontrolledAccordion",
  component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;

export const DefaultItem = () => {
  return <UncontrolledAccordion titleValue={"DefaultItem"} />;
};
