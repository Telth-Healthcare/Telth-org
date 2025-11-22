import { useCallback } from "react";

export const useNodePosition = () => {
  return useCallback((ref: React.RefObject<SVGGElement>) => {
    if (!ref.current) return null;

    const bbox = ref.current.getBBox();
    return {
      x: bbox.x + bbox.width / 2,
      y: bbox.y + bbox.height / 2,
    };
  }, []);
};
