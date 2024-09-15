import React, { useEffect, useState } from "react";
import "./Clock.css";

interface Time {
  hour: number;
  minute: number;
}

const Clock: React.FC<{ time: Time }> = ({ time }) => {
  const [minuteAngle, setMinuteAngle] = useState(0);
  const [hourAngle, setHourAngle] = useState(0);

  useEffect(() => {
    const newMinuteAngle = time.minute * 6;
    const newHourAngle = (time.hour % 12) * 30 + time.minute * 0.5;
    setMinuteAngle(newMinuteAngle);
    setHourAngle(newHourAngle);
  }, [time]);

  return (
    <div className="clock-container">
      <div className="clock">
        <div
          className="hour-hand"
          style={{ transform: `rotate(${hourAngle}deg)` }}
        ></div>
        <div
          className="minute-hand"
          style={{ transform: `rotate(${minuteAngle}deg)` }}
        ></div>
        <div className="center-dot"></div>
      </div>
      <div className="time">
        {`${time.hour.toString().padStart(2, "0")}:${time.minute
          .toString()
          .padStart(2, "0")}`}
      </div>
    </div>
  );
};

export default Clock;
