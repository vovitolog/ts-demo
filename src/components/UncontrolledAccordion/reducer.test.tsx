import React from "react";
import { reducer, StateType, TOGGLE_CONSTANT } from "./reducer";

test("reducer should change value to true", () => {
  const state: StateType = {
    collapsed: false,
  };

  const newState = reducer(state, { type: TOGGLE_CONSTANT });

  expect(newState.collapsed).toBe(true);
});

test("reducer should throw error to fake state", () => {
  const state: StateType = {
    collapsed: false,
  };

  expect(() => {
    reducer(state, { type: "FAKE" });
  }).toThrowError();
});
