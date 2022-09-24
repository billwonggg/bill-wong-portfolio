import { useEffect, useState } from "react";

/**
 * Hook that returns whether the current window width is less than the breakpoint width.
 */
export const useWidthBreakpoint = (breakpoint: number): boolean => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return windowWidth <= breakpoint;
};
