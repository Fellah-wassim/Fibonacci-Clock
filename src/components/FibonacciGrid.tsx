import Box from "./Box";
import "./FibonacciGrid.css";

interface FibonacciGridProps {
  boxColors: Record<string, string>;
}

export const FibonacciGrid: React.FC<FibonacciGridProps> = ({ boxColors }) => {
  return (
    <div className="fibonacci-clock-grid">
      <Box className={"boxOfOneA"} color={boxColors.boxOfOneA} label="1" />
      <Box className={"boxOfOneB"} color={boxColors.boxOfOneB} label="1" />
      <Box className={"boxOfTwo"} color={boxColors.boxOfTwo} label="2" />
      <Box className={"boxOfThree"} color={boxColors.boxOfThree} label="3" />
      <Box className={"boxOfFive"} color={boxColors.boxOfFive} label="5" />
    </div>
  );
};
