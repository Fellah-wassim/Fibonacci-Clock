interface Props {
  color: string;
  width: string;
  height: string;
}

export const RightArrow: React.FC<Props> = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="right-arrow"
      fill={color}
      width={width}
      height={height}
    >
      <g>
        <g>
          <rect
            width="24"
            height="24"
            opacity="0"
            transform="rotate(180 12 12)"
          ></rect>
          <path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z"></path>
        </g>
      </g>
    </svg>
  );
};
