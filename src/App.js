import React from "react";
import GlobalStyle, { SCALE } from "./style/GlobalStyle";
import { ScaleMarker } from "./components";

function App() {
  return (
    <div>
      <GlobalStyle />
      {SCALE.map((size, i) => (
        <ScaleMarker size={size} index={i}>
          Practice Partners
        </ScaleMarker>
      ))}
      Hello World
    </div>
  );
}

export default App;
