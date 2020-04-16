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
            have created a size palette to reference. This is based on a
            mathematical scale.
          </Paragraph>
          <Paragraph>
            This mathematical harmony will inform how layout and typography are
            sized. Rather than hard-coding pixel values, use the scale at all
            possible opportunities.
          </Paragraph>
        </Section>
        <Section>
          <Cols>
            <div>
              {SCALE.map(
                (size, i) =>
                  i < 16 && (
                    <S.Cell key={size} size={size}>
                      S{i}
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
                <br />
                /* Extra small */
                <br />
                --size-xs: 0.25rem; <br />
                --size-sm: 0.5rem;
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
