import React from "react";
import {
  ScaleMarker,
  Layout,
  Paragraph,
  Wrapper,
  Section,
  SectionHead,
  H1,
  H3,
  Cols,
  CodeBlock,
} from "components";
import { SCALE, SCALE_VARS } from "../../constants";
import S from "./PageViewSize.Styled";

const PageViewSize = () => {
  return (
    <Layout>
      <Wrapper>
        <Section>
          <H1>Size Scale</H1>
          <Paragraph>
            To enforce consistency and reduce pixel-pushing decision making, we
            have created a size palette to reference. This will inform how
            layout and typography are sized.
          </Paragraph>
        </Section>
        <Section>
          <Cols>
            <div>
              {SCALE.map(
                (size, i) =>
                  i < 16 && (
                    <S.Cell>
                      <S.Marker size={size} />
                      (S{i}): {size}rem
                    </S.Cell>
                  )
              )}
            </div>
            <div>
              <H3>CSS Variables</H3>
              <Paragraph>Here are the scale sizes in css variables</Paragraph>
              <CodeBlock>
                {SCALE_VARS.map((item) => (
                  <div>{item}</div>
                ))}
              </CodeBlock>
            </div>
          </Cols>
        </Section>
        <Section>
          <SectionHead>Typography application</SectionHead>
          <Paragraph>An example of the scale applied to typography</Paragraph>
          <br />
          {SCALE.map(
            (size, i) =>
              i < 11 && (
                <ScaleMarker size={size} index={i}>
                  Committed to care.
                </ScaleMarker>
              )
          )}
        </Section>
      </Wrapper>
    </Layout>
  );
};

export default PageViewSize;
