import React from "react";
import "./Box.css";

interface BoxProps {
  className: string;
  color: string;
  label: string;
}

const Box: React.FC<BoxProps> = ({ className, color, label }) => {
  return (
    <div className={`box ${className}`} style={{ backgroundColor: color }}>
      <span className="box-label">{label}</span>
    </div>
  );
};

export default Box;
