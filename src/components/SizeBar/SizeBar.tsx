import React, { useEffect, useState } from "react";
import S from "./SizeBar.Styled";
import { SIZES, FONT_SIZES } from "../../constants";
import { LATEST_VERSION } from "../../changelog";

const useSize = () => {
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    const setWidth = () => {
      setSize(window.innerWidth);
    };

    setWidth();

    window.addEventListener("resize", setWidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);
  return size;
};
const SizeBar = () => {
  const size = useSize();

  const getBreakpoint = () => {
    const keys = Object.keys(SIZES);
    const sizeVals = keys.map((key) => SIZES[key]);
    const index = sizeVals.map((item) => item <= size).indexOf(true);
    return keys[index];
  };

  const breakpoint = getBreakpoint();

  return (
    <S.Outline>
      <div>Device Width: {size}px</div>
      <div>
        Breakpoint: {breakpoint.toUpperCase()} (&ge;{SIZES[breakpoint]}px)
      </div>
      <div>Base Font Size: {FONT_SIZES[breakpoint]}px</div>
      <div>
        <a href="/changelog">v{LATEST_VERSION.number}</a>
      </div>
    </S.Outline>
  );
};

export default SizeBar;
