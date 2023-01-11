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

  useEffect(() => {
    console.log("Effect on component Mount");
  }, []);

  useEffect(() => {
    console.log("Effect on counter change");
  }, [counter]);

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter
      </button>
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

export const SetTimeoutExample = () => {
  const [counter, setCounter] = useState(1);
  const [fake, setFake] = useState(1);
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  console.log("SetTimeoutExample");

  useEffect(() => {
    setInterval(() => {
      //console.log("tick");
      setCounter((state) => state + 1);
      setSeconds((state) => new Date().getSeconds());
      setMinutes((state) => new Date().getMinutes());
      setHours((state) => new Date().getHours());
     // console.log(new Date().getHours());
    }, 1000);
  }, []);

  return (
    <>
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    setCounter(counter + 1);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Counter*/}
      {/*</button>*/}
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    setFake(fake + 1);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Fake*/}
      {/*</button>*/}
      Hello, counter: {counter} fake: {fake} TIME: {hours}:{minutes}:{seconds}
    </>
  );
};
