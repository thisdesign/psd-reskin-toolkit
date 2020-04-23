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
            </div>
            <div>
              <H3>Ease timings</H3>
              <CodeBlock>{EASE_VARS.map((str) => str).join(";\n")}</CodeBlock>
            </div>
          </Cols>
        </Wrapper>
      </Section>
    </Layout>
  );
};

export default Animation;
