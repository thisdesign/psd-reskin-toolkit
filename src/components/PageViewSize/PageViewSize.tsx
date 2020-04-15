import React from "react";
import { ScaleMarker, Layout } from "components";
import { SCALE } from "../../constants";

const PageViewSize = () => {
  return (
    <Layout>
      {SCALE.map((size, i) => (
        <ScaleMarker size={size} index={i}>
          Committed to care.
        </ScaleMarker>
      ))}
    </Layout>
  );
};

export default PageViewSize;
