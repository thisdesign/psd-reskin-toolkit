import React from "react";
import { ScaleMarker, Layout, Paragraph, Wrapper } from "components";
import { SCALE } from "../../constants";

const PageViewSize = () => {
  return (
    <Layout>
      <Wrapper>
        <Paragraph>
          To enforce consistency and reduce pixel-pushing decision making, we
          have created a size palette to reference. This will inform how layout
          and typography are sized.
        </Paragraph>
        {SCALE.map((size, i) => (
          <ScaleMarker size={size} index={i}>
            Committed to care.
          </ScaleMarker>
        ))}
      </Wrapper>
    </Layout>
  );
};

export default PageViewSize;
