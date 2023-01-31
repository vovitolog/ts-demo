import React, { useEffect, useState } from "react";
import {clearTimeout} from "timers";

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
      Hello, counter: {counter} fake: {fake} TIME: {hours}:{minutes}:{seconds}
    </>
  );
};

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1);
  console.log("Component Rendered with " + counter);
  useEffect(() => {
    console.log("Effect occurred " + counter);

    return () => {
      console.log("Reset Effect " + counter);
    };
  }, [counter]);
  return (
    <>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};

export const KeysTrackExample = () => {
  const [text, setText] = useState("");

  console.log("Component Rendered with " + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setText(text + e.key);
    };
    window.addEventListener("keypress", handler);
    return () => {
      console.log("effect cleared");
      window.removeEventListener("keypress", handler);
    };
  }, [text]);
  return <>Typed Text: {text}</>;
};

export const SetTimeoutExample2 = () => {
  const [text, setText] = useState("");

  console.log("Component Rendered with " + text);

  useEffect(() => {
   const timeoutId =  setTimeout(() => {
      console.log('Timeout Expired')
      setText("3 seconds passed");
    }, 3000);

    return () => {
      console.log('Clear timeout')
     clearTimeout(timeoutId)
    };
  }, [text]);
  return <>Typed Text: {text}</>;
};
