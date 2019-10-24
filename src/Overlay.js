import React from "react";
import { useState, useEffect } from "react";
import { Overlay as OverlayStyle } from "./Styled";

const BREAKPOINTS = [
  { bpt: 1440, name: "Desktop", fontSize: 22 },
  { bpt: 1024, name: "Laptop", fontSize: 20 },
  { bpt: 768, name: "Tablet", fontSize: 19 },
  { bpt: 576, name: "SM Tablet", fontSize: 18 },
  { bpt: 0, name: "Mobile", fontSize: 17 }
];

const getBreakpoint = w => {
  return BREAKPOINTS.find(({ bpt }) => bpt < w);
};

const Overlay = () => {
  const [windowWidth, setWith] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState(
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setWith(w);
      setBreakpoint(getBreakpoint(w));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return (
    <OverlayStyle>
      <div>Breakpoint: {breakpoint.name}</div>
      <div>Current width: {windowWidth}px</div>
      <div> Base Font Size: {breakpoint.fontSize}px</div>
    </OverlayStyle>
  );
};

export default Overlay;
