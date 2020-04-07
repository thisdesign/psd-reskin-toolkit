import React from "react";
import GlobalStyle, { SCALE } from "./style/GlobalStyle";
import { ScaleMarker } from "./components";

function App() {
  return (
    <div>
      <GlobalStyle />
      {SCALE.map((size, i) => (
        <ScaleMarker size={size} index={i}>
          Committed to care.
        </ScaleMarker>
      ))}
    </div>
  );
}

export default App;
