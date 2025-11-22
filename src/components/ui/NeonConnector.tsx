import { motion } from "framer-motion";

interface Props {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

export default function NeonConnector({ start, end }: Props) {
  const cx = (start.x + end.x) / 2;

  const path = `M ${start.x} ${start.y}
                Q ${cx} ${start.y} ${end.x} ${end.y}`;

  return (
    <motion.path
      d={path}
      stroke="url(#neonGradient)"
      strokeWidth={6}
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0.4 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      filter="url(#glow)"
    />
  );
}
