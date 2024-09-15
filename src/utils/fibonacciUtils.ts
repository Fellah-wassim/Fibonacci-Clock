export const FIBONACCI_SERIES = [5, 3, 2, 1, 1];

export const getRandomFibonacciRepresentation = (
  number: number,
  fibNumbers: number[]
): number[] => {
  const representations: number[][] = [];

  const findRepresentations = (
    num: number,
    start: number = 0,
    currentRepresentation: number[] = []
  ) => {
    if (num === 0) {
      representations.push([...currentRepresentation]);
      return;
    }

    for (let i = start; i < fibNumbers.length; i++) {
      const fib = fibNumbers[i];
      if (fib <= num) {
        findRepresentations(num - fib, i + 1, [...currentRepresentation, fib]);
      }
    }
  };

  findRepresentations(number);

  if (representations.length === 0) return [];
  return representations[Math.floor(Math.random() * representations.length)];
};

export const assignColors = (
  commonNumbers: number[],
  minuteOnlyNumbers: number[],
  hourOnlyNumbers: number[]
): Record<string, string> => {
  const COLOR_MAP: Record<string, string> = {
    boxOfOneA: "white",
    boxOfOneB: "white",
    boxOfTwo: "white",
    boxOfThree: "white",
    boxOfFive: "white",
  };

  const assignColor = (numbers: number[], color: string) => {
    numbers.forEach((num) => {
      switch (num) {
        case 1:
          if (COLOR_MAP.boxOfOneA === "white") {
            COLOR_MAP.boxOfOneA = color;
          } else if (COLOR_MAP.boxOfOneB === "white") {
            COLOR_MAP.boxOfOneB = color;
          }
          break;
        case 2:
          COLOR_MAP.boxOfTwo = color;
          break;
        case 3:
          COLOR_MAP.boxOfThree = color;
          break;
        case 5:
          COLOR_MAP.boxOfFive = color;
          break;
      }
    });
  };

  assignColor(commonNumbers, "#448df2");
  assignColor(minuteOnlyNumbers, "#60cf9b");
  assignColor(hourOnlyNumbers, "#f36960");

  return COLOR_MAP;
};
