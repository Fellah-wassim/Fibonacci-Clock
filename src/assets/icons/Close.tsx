interface Props {
  color: string;
  width: string;
  height: string;
}

export const Close: React.FC<Props> = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width={width}
      height={height}
      id="close"
    >
      <path d="M17 2C8.716 2 2 8.716 2 17s6.716 15 15 15 15-6.716 15-15S25.284 2 17 2zm6.95 9.464-5.574 5.574 4.932 5.498a1 1 0 0 1-1.414 1.414l-4.932-5.498-5.498 5.498a1 1 0 0 1-1.414-1.414l5.574-5.574-4.932-5.498a1 1 0 0 1 1.414-1.414l4.932 5.498 5.498-5.498a1 1 0 0 1 1.414 1.414z"></path>
    </svg>
  );
};
