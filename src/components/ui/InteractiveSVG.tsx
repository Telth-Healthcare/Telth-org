import { useRef, useState } from "react";
import NeonConnector from "./NeonConnector";
import NeonDefs from "./NeonDefs";
import { useNodePosition } from "./useNodePosition";

export default function InteractiveSVG() {
  const getPos = useNodePosition();

  const nodeA = useRef<SVGGElement>(null);
  const nodeB = useRef<SVGGElement>(null);
  const nodeC = useRef<SVGGElement>(null);

  const [connection, setConnection] =
    useState<{ from: string; to: string } | null>(null);

  const handleClick = (id: string) => {
    if (!connection) {
      setConnection({ from: id, to: "" });
    } else if (connection.from && !connection.to) {
      setConnection({ ...connection, to: id });
    } else {
      setConnection({ from: id, to: "" });
    }
  };

  const getNodeById = (id: string) => {
    switch (id) {
      case "A": return nodeA;
      case "B": return nodeB;
      case "C": return nodeC;
      default: return null;
    }
  };

  const startRef = connection?.from ? getNodeById(connection.from) : null;
  const endRef = connection?.to ? getNodeById(connection.to) : null;

  const startPos = startRef ? getPos(startRef) : null;
  const endPos = endRef ? getPos(endRef) : null;

  return (
    <svg width="100%" height="500" style={{ background: "#00111f" }}>
      <NeonDefs />

      {/* Nodes */}
      <g ref={nodeA} onClick={() => handleClick("A")} style={{ cursor: "pointer" }}>
        <circle cx={100} cy={100} r={20} fill="#00eaff" />
      </g>

      <g ref={nodeB} onClick={() => handleClick("B")} style={{ cursor: "pointer" }}>
        <circle cx={300} cy={200} r={20} fill="#00eaff" />
      </g>

      <g ref={nodeC} onClick={() => handleClick("C")} style={{ cursor: "pointer" }}>
        <circle cx={150} cy={350} r={20} fill="#00eaff" />
      </g>

      {/* Path when both selected */}
      {startPos && endPos && <NeonConnector start={startPos} end={endPos} />}
    </svg>
  );
}
