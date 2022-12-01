import React, { useState } from "react";

type propsType = {
  onChange: (on: boolean) => void;
};

function UncontrolledOnOff(props: propsType) {
  const [on, setOn] = useState(true);

  const onStyle = {
    border: "1px solid black",
    backgroundColor: on ? "green" : "white",
    width: "30px",
    height: "20px",
    display: "inline-block",
    padding: "5px",
  };

  const offStyle = {
    border: "1px solid black",
    backgroundColor: on ? "white" : "red",
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
    backgroundColor: on ? "green" : "red",
  };

  const onClicked = () => {
    setOn(true);
    props.onChange(true);
  };

  const offClicked = () => {
    setOn(false);
    props.onChange(false);
  };

  return (
    <div>
      <div style={onStyle} onClick={onClicked}>
        ON
      </div>
      <div style={offStyle} onClick={offClicked}>
        OFF
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
}

export default UncontrolledOnOff;
