import React, { useEffect, useState } from "react";
import Box from "./components/Box";
import {
  FIBONACCI_SERIES,
  getRandomFibonacciRepresentation,
  assignColors,
} from "./utils/fibonacciUtils";
import "./App.css";
import Clock from "./components/Clock";
import Navbar from "./components/Navbar";
import BackNextButtons from "./components/BackNextButtons";

const FibonacciClockApp: React.FC = () => {
  const [time, setTime] = useState({ hour: 1, minute: 30 });
  const [boxColors, setBoxColors] = useState<Record<string, string>>({
    boxOfOneA: "white",
    boxOfOneB: "white",
    boxOfTwo: "white",
    boxOfThree: "white",
    boxOfFive: "white",
  });

  const adjustTime = (minutes: number) => {
    setTime((prevTime) => {
      const totalMinutes = prevTime.hour * 60 + prevTime.minute + minutes;
      const newMinutes = ((totalMinutes % 60) + 60) % 60;
      const newHours =
        ((((Math.floor(totalMinutes / 60) - 1) % 12) + 12) % 12) + 1;
      return { hour: newHours, minute: newMinutes };
    });
  };

  const getColorDivision = () => {
    const hourRepresentation = getRandomFibonacciRepresentation(
      time.hour,
      FIBONACCI_SERIES
    );
    const minuteRepresentation = getRandomFibonacciRepresentation(
      Math.floor(time.minute / 5),
      FIBONACCI_SERIES
    );

    const minuteCopy = [...minuteRepresentation];

    const commonNumbers: number[] = [];
    const hourOnlyNumbers: number[] = [];
    const minuteOnlyNumbers: number[] = [];

    hourRepresentation.forEach((num) => {
      const index = minuteCopy.indexOf(num);
      if (index !== -1) {
        commonNumbers.push(num);
        minuteCopy.splice(index, 1);
      } else {
        hourOnlyNumbers.push(num);
      }
    });

    minuteCopy.forEach((num) => {
      minuteOnlyNumbers.push(num);
    });

    const newBoxColors = assignColors(
      commonNumbers,
      minuteOnlyNumbers,
      hourOnlyNumbers
    );
    setBoxColors(newBoxColors);
  };

  useEffect(() => {
    getColorDivision();
  }, [time]);

  return (
    <div className="container">
      <Navbar />
      <Clock time={time} />
      <div className="fibonacci-clock-grid">
        <Box className={"boxOfOneA"} color={boxColors.boxOfOneA} label="1" />
        <Box className={"boxOfOneB"} color={boxColors.boxOfOneB} label="1" />
        <Box className={"boxOfTwo"} color={boxColors.boxOfTwo} label="2" />
        <Box className={"boxOfThree"} color={boxColors.boxOfThree} label="3" />
        <Box className={"boxOfFive"} color={boxColors.boxOfFive} label="5" />
      </div>
      <BackNextButtons adjustTime={adjustTime} />
    </div>
  );
};

export default FibonacciClockApp;
