import React, {
  ChangeEvent,
  ChangeEventHandler,
  useRef,
  useState,
} from "react";

export default {
  title: "input",
};

export const uncontrolledInput = () => {
  return <input />;
};

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");
  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  return (
    <>
      <input onChange={changeValue} />
      value {value}
    </>
  );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const set = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={set}>Set</button>
      actual value - {value}
    </>
  );
};
