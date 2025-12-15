import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function AutoScroll() {
  const { pathname } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    // scroll only when route changes
    if (prevPath.current !== pathname) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // optional
      });
      prevPath.current = pathname;
    }
  }, [pathname]);

  return null;
}
