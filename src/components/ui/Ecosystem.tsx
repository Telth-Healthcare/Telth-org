import { useState, useRef, useEffect } from "react";
import TelthEco from "../SVG/TelthEcosystem.svg?react";
import ecosystem from "../SVG/TelthEco.png"

export default function Ecosystem() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [startNode, setStartNode] = useState<string | null>(null);
  const [endNode, setEndNode] = useState<string | null>(null);
  const [path, setPath] = useState<string>("");

  // Handle clicking a node
  const handleNodeClick = (id: string) => {
    if (!startNode) {
      setStartNode(id);
    } else {
      setEndNode(id);
    }
  };

  // Calculate connector path when both nodes selected
  useEffect(() => {
    if (!startNode || !endNode || !svgRef.current) return;

    const startEl = svgRef.current.querySelector(`#${startNode}`) as SVGGElement;
    const endEl = svgRef.current.querySelector(`#${endNode}`) as SVGGElement;

    if (!startEl || !endEl) return;

    const a = startEl.getBBox();
    const b = endEl.getBBox();

    const x1 = a.x + a.width / 2;
    const y1 = a.y + a.height / 2;
    const x2 = b.x + b.width / 2;
    const y2 = b.y + b.height / 2;

    const p = `M${x1},${y1} L${x2},${y2}`;
    setPath(p);

  }, [startNode, endNode]);

  return (
    <div className="relative w-[90%] mx-auto flex justify-center items-center">
      <h1 className="text-center">Telth Ecosystem</h1>
       <img src={ecosystem} alt="ecosytem" />  
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
}
