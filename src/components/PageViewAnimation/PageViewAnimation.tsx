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
              <H3>Fade-in</H3>
              <Paragraph>
                objects that fade in should invite the user to interact with it.
                To achieve this, the element animates its&apos;{" "}
                <InlineCode>opacity</InlineCode> and{" "}
                <InlineCode>translate-y</InlineCode> values for{" "}
                <InlineCode>{FADE_IN_TIMING}ms</InlineCode>, with a{" "}
                <InlineCode>--ease-decel</InlineCode> cubic bezier.
              </Paragraph>

              <br />
              <H3>Hero Build</H3>
              <Paragraph>
                To give the site some visual flair on first impression, we use a
                build animation on the hero moment. This animation takes the
                background image from a zoomed in state (
                <InlineCode>105%</InlineCode>) and subtly zooms to normal (
                <InlineCode>100%</InlineCode>). It does this for a total
                duration of <InlineCode>1600ms</InlineCode> with an{" "}
                <InlineCode>--ease-decel</InlineCode> bezier curve.
                <br />
                <br />
                Internal elemenmts like lines of text are brought in with the
                Fade-In effect. For added enhancement, we stagger them in by
                modifying their delay times.
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
    `c${e[0]},-${e[1]}`,
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
