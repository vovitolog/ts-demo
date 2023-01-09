import React, { useState } from "react";

export default {
  title: "UseState Demo",
};

export const Example1 = () => {
  const [counter, setCounter] = useState(generateData);
  console.log("Example1");

  function generateData() {
    console.log("Generate");
    return 1;
  }

  const changer = (state: number) => {
    return state + 1;
  };

  return (
    <>
      <button
        onClick={() => {
          setCounter(changer);
        }}
      >
        +
      </button>
      {counter}
    </>
  );
};
