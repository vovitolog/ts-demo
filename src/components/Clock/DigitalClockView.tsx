import React from "react";
import {ClockViewPropsType} from "./Clock";

function convertTimeToTwoDigits(number: number) {
    return number < 10 ? "0" + number : number;
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <>
            <span>{convertTimeToTwoDigits(date.getHours())}</span>:
            <span>{convertTimeToTwoDigits(date.getMinutes())}</span>:
            <span>{convertTimeToTwoDigits(date.getSeconds())}</span>
        </>
    );
};