import React from "react";
import {
  ScaleMarker,
  Layout,
  Paragraph,
  Wrapper,
  Section,
  SectionHead,
} from "components";
import { SCALE } from "../../constants";

const PageViewSize = () => {
  return (
    <Layout>
      <Wrapper>
        <Section>
          <SectionHead>Size Scale</SectionHead>
          <Paragraph>
            To enforce consistency and reduce pixel-pushing decision making, we
            have created a size palette to reference. This will inform how
            layout and typography are sized.
          </Paragraph>
        </Section>
        <Section>
          <SectionHead>Typography application</SectionHead>
          {SCALE.map((size, i) => (
            <ScaleMarker size={size} index={i}>
              Committed to care.
            </ScaleMarker>
          ))}
        </Section>
      </Wrapper>
    </Layout>
  );
};

export default PageViewSize;
