import React from "react";
import {
  Layout,
  Section,
  Wrapper,
  H1,
  H2,
  H3,
  H5,
  Paragraph,
  CodeBlock,
  Cols,
  InlineCode,
} from "..";
import { EASE, EASE_VARS, FADE_IN_TIMING } from "../../constants";
import S from "./PageViewAnimation.Styled";

const Animation = () => {
  return (
    <Layout>
      <Section>
        <Wrapper>
          <H1>Animation</H1>
          <Paragraph>
            We want to take the opportunity to add a bit of visual flare to the
            site that can engage the user.
          </Paragraph>
          <br />

          <Cols>
            <div>
              <br />
              <H3>Fade-in</H3>
              <Paragraph>
                objects that fade in should invite the user to interact with it.
                To achieve this, the element animates its&apos;{" "}
                <InlineCode>opacity</InlineCode> and{" "}
                <InlineCode>translate-y</InlineCode> values for{" "}
                <InlineCode>{FADE_IN_TIMING}ms</InlineCode>, with a{" "}
                <InlineCode>--ease-decel</InlineCode> cubic bezier.
              </Paragraph>
            </div>
            <div>
              <H3>Easing curves</H3>
              <Paragraph>
                Use one of the following easing curves when animating.
              </Paragraph>

              <S.BezierWrapper>
                {Object.keys(EASE).map((key) => (
                  <div>
                    <Curve bezier={(EASE[key] as unknown) as number[]} />

                    <InlineCode>{key}</InlineCode>
                  </div>
                ))}
              </S.BezierWrapper>
              <CodeBlock>{EASE_VARS.map((str) => str).join(";\n")}</CodeBlock>
            </div>
          </Cols>
        </Wrapper>
      </Section>
    </Layout>
  );
};

const Curve: React.FC<{ bezier: number[] }> = ({ bezier }) => {
  const e = bezier.map((c) => c * 100);

  const d = [
    "M0,100", // starting point
    `c${e[0]},${e[1]}`,
    `${e[2]},-${e[3]}`,
    "100,-100", // ending point
  ].join(" ");

  return (
    <S.Svg width="100%" viewBox="0 0 100 100" version="1.1">
      <path d={d} stroke="#979797" strokeWidth="1px" fill="none" />
    </S.Svg>
  );
};

export default Animation;
