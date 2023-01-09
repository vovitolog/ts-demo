import React, { useEffect, useState } from "react";

export default {
  title: "UseEffect Demo",
};

export const SimpleExample = () => {
  const [counter, setCounter] = useState(1);
  const [fake, setFake] = useState(1);

  console.log("SimpleExample");

  useEffect(() => {
    console.log("Effect every render");
    document.title = counter.toString();
  });

  useEffect(()=>{
      console.log("Effect on component Mount");
  },[])

    useEffect(()=>{
      console.log("Effect on counter change");
  },[counter])

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >Counter</button>

      <button
        onClick={() => {
          setFake(fake + 1);
        }}
      >
        Fake
      </button>
      Hello, {counter} {fake}
    </>
  );
};
