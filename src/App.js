import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { ScaleMarker } from "./components";
import { SCALE } from "./constants";

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
