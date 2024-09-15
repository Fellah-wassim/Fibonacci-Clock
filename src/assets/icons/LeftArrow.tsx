interface Props {
  color: string;
  width: string;
  height: string;
}

export const LeftArrow: React.FC<Props> = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="left-arrow"
      fill={color}
      width={width}
      height={height}
    >
      <g>
        <g>
          <rect width="24" height="24" opacity="0"></rect>
          <path d="M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26 1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59 2.23 2.23 0 0 1-.91.2z"></path>
        </g>
      </g>
    </svg>
  );
};
