import React from "react";

type propsType = {
  on: boolean;
  onChange: (on: boolean) => void;
};

function OnOff(props: propsType) {
  const onStyle = {
    border: "1px solid black",
    backgroundColor: props.on ? "green" : "white",
    width: "30px",
    height: "20px",
    display: "inline-block",
    padding: "5px",
  };

  const offStyle = {
    border: "1px solid black",
    backgroundColor: props.on ? "white" : "red",
    width: "30px",
    height: "20px",
    display: "inline-block",
    padding: "5px",
    marginLeft: "2px",
  };

  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.on ? "green" : "red",
  };

  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          props.onChange(true);
        }}
      >
        ON
      </div>
      <div style={offStyle} onClick={() => props.onChange(false)}>
        OFF
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
}

export default OnOff;
