import useLocalStorage from "./hook";
import { useState, useEffect } from "react";

const useColor = () => {
  const [colorMode, SetColorMode] = useLocalStorage("colorMode", "dark");

  useEffect(() => {
    if (colorMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorMode]);

  return [colorMode, SetColorMode];
};

export default useColor;
