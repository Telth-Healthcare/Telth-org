export default function NeonDefs() {
  return (
    <defs>
      <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00eaff" />
        <stop offset="100%" stopColor="#007bff" />
      </linearGradient>

      <filter id="glow" height="300%" width="300%" x="-75%" y="-75%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}
