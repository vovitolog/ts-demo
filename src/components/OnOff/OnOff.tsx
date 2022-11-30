import React, { useState } from "react";

// type propsType = {
//   on: boolean;
// };

function OnOff() {
  const [on, setOn] = useState(true);
  console.log(on);

  const onStyle = {
    border: "1px solid black",
    backgroundColor: on ? "green" : "white",
    width: "30px",
    height: "20px",
    display: "inline-block",
    padding: "5px",
  };

  const ofStyle = {
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

  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          setOn(true);
        }}
      >
        ON
      </div>
      <div style={ofStyle} onClick={() => setOn(false)}>
        OFF
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
}

export default OnOff;
