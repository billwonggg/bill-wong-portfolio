import { useEffect } from "react";

export const useAppHeight = () => {
  useEffect(() => {
    const appHeight = () => document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
    appHeight();
    window.addEventListener("resize", appHeight);
    return () => window.removeEventListener("resize", appHeight);
  }, []);
};
