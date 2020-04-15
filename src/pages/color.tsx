import React from "react";
import { ScaleMarker, ColorPalette, Layout } from "../components";
import { SCALE } from "../constants";

function App() {
  return (
    <Layout>
      <ColorPalette />
      {/* {SCALE.map((size, i) => (
        <ScaleMarker size={size} index={i}>
          Committed to care.
        </ScaleMarker>
      ))} */}
    </Layout>
  );
}

export default App;
