import { useState, useRef, useEffect, forwardRef } from "react";
import ecosystem from "../SVG/TelthEco.png";

const Ecosystem = forwardRef<HTMLDivElement>((props, ref) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [startNode, setStartNode] = useState<string | null>(null);
  const [endNode, setEndNode] = useState<string | null>(null);
  const [path, setPath] = useState<string>("");

  return (
    <div
      ref={ref}
      className="relative w-[90%] mx-auto flex justify-center items-center"
    >
      <img src={ecosystem} alt="ecosystem" />

      {path && (
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <path
            d={path}
            stroke="#6A00FF"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: "500",
              strokeDashoffset: "500",
              animation: "draw 1s ease forwards",
            }}
          />
        </svg>
      )}
    </div>
  );
});

export default Ecosystem;
