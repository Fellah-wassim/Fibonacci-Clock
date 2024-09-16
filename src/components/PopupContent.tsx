import React from "react";
import "./PopupContent.css";

const PopupContent: React.FC = () => {
  return (
    <div className="popup-content">
      <h1 className="popup-title">Task Fibonacci - Clock</h1>
      <p className="popup-description">
        Imagine a clock on which the time is represented by the first five
        elements of the Fibonacci sequence. Five squares, whose side length
        corresponds to the first five numbers of the Fibonacci sequence (1, 1,
        2, 3, 5), represent the dial of our Fibonacci clock. The layout of the
        clock face is described below:
      </p>

      <ul className="popup-list">
        <li className="popup-list-item">
          <strong>Red squares</strong> represent the hours.
        </li>
        <li className="popup-list-item">
          <strong>Green squares</strong> represent the minutes.
        </li>
        <li className="popup-list-item">
          <strong>White squares</strong> are ignored for the calculation.
        </li>
        <li className="popup-list-item">
          The hours are calculated by summing the values of all red and blue
          squares.
        </li>
        <li className="popup-list-item">
          The minutes are calculated by summing the values of all green and blue
          squares.
        </li>
        <li className="popup-list-item">
          Multiply the result of the minutes by 5 to get the correct time.
        </li>
      </ul>

      <h2 className="popup-subtitle">The Task:</h2>
      <p className="popup-task-description">
        Please create an SPA (Single Page App) that displays a simple version of
        the Fibonacci clock. It should have "Next" and "Back" buttons to move
        the displayed time forward or backward by 5 minutes. The application
        should display the time both as text and in the form of a Fibonacci
        clock. The clock should also support multiple display variants for
        certain times.
      </p>

      <div className="popup-note">
        <h3>Note:</h3>
        <p>
          For some times, multiple display variants are possible, which should
          be handled randomly. For example, the time 6:30 can be represented in
          16 different ways.
        </p>
      </div>
    </div>
  );
};

export default PopupContent;
