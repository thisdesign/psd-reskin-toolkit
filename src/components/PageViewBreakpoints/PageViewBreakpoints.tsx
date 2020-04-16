import React from "react";
import {
  Layout,
  Section,
  Wrapper,
  H1,
  Paragraph,
  H3,
  CodeBlock,
} from "components";
import { SIZES, FONT_SIZES } from "../../constants";
import S from "./PageViewBreakpoints.Styled";

const PageBreakpoints = () => {
  const breakpointArr = Object.keys(SIZES).map((bkptKey) => ({
    key: bkptKey,
    size: SIZES[bkptKey],
  }));

  return (
    <Layout>
      <Section>
        <Wrapper>
          <H1>Breakpoints</H1>
          <Paragraph>
            Use the following breakpoints when considering responsive design.
          </Paragraph>
          <CodeBlock>
            {breakpointArr.map(({ key, size }) => (
              <div>
                {key}: {size}px
              </div>
            ))}
          </CodeBlock>
        </Wrapper>
      </Section>
      <S.BreakpointWrapper>
        {breakpointArr.map(({ key, size }) => (
          <S.Breakpoint width={size} key={size}>
            <S.BreakpointInner>
              <div>
                {key.toUpperCase()} &gt;{size}px
              </div>
            </S.BreakpointInner>
          </S.Breakpoint>
        ))}
      </S.BreakpointWrapper>
      <Section>
        <Wrapper>
          <H3>Type Collapsing</H3>
          <Paragraph>
            Type should get gradually larger as the page scales up. Use the
            following guide to set font-size per breakpoints
          </Paragraph>
          <CodeBlock>
            {[...Object.keys(FONT_SIZES)].reverse().map((item) => (
              <div>
                {item}: {FONT_SIZES[item]}px
              </div>
            ))}
          </CodeBlock>
        </Wrapper>
      </Section>
    </Layout>
  );
};

export default PageBreakpoints;
