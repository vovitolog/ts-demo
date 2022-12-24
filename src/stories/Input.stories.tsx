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

export const ContolledInput = () => {
  const [parentValue, setParentValue] = useState("");

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setParentValue(event.currentTarget.value);
  }

  return (
    <>
      <input value={parentValue} onChange={onChangeHandler} />- value -{" "}
      {parentValue}
    </>
  );
};

export const ContolledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false);
  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setParentValue(event.currentTarget.checked);
  }

  return (
    <>
      <input
        type={"checkbox"}
        checked={parentValue}
        onChange={onChangeHandler}
      />
      - value - {parentValue.valueOf()}
    </>
  );
};

export const ContolledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("2");
  function onChangeHandler(event: ChangeEvent<HTMLSelectElement>) {
    setParentValue(event.currentTarget.value);
  }

  return (
    <>
      <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={"1"}>Moscow</option>
        <option value={"2"}>Minsk</option>
        <option value={"3"}>Astana</option>
      </select>
    </>
  );
};
