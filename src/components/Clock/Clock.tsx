import React, { useEffect, useState } from "react";
import { clearInterval } from "timers";

type PropsType = {};

function convertTimeToTwoDigits(number: number) {
  return number < 10 ? "0" + number : number;
}

export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date());

  const secondsString = convertTimeToTwoDigits(date.getSeconds());
  const minutesString = convertTimeToTwoDigits(date.getMinutes());
  const hoursString = convertTimeToTwoDigits(date.getHours());

  useEffect(() => {

    const intervalId = setInterval(() => {
           setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <span>{hoursString}</span>:<span>{minutesString}</span>:
      <span>{secondsString}</span>
    </div>
  );
};
