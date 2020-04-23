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
            will use a size palette, based on mathematical scale.
          </Paragraph>
          <Paragraph>
            This mathematical harmony will inform how layout and typography are
            sized. Rather than hard-coding pixel values, use the scale at all
            possible opportunities.
          </Paragraph>
        </Section>
      </Wrapper>
      <Section>
        <S.InUse>
          <Wrapper>
            <S.Cell size={10}>S10</S.Cell>
            <H1>
              We’re natural helpers
              <br /> driven by empathy
            </H1>

            <Paragraph>
              <S.Cell size={2}>S2</S.Cell>
              It’s why we all work here—we found like-minded colleagues who
              enjoy solving problems for people. Ultimately, we like
              contributing to the growth of stronger healthcare.
            </Paragraph>
            <S.Cell size={8}>S8</S.Cell>
            <H3>What you want, not what others want.</H3>
            <Paragraph>
              <S.Cell size={2}>S2</S.Cell>
              We’ve built a model that is personal, not transactional. We start
              by listening to who you are and what matters in your world before
              finding you the best fit.
              <S.Cell size={2}>S2</S.Cell>
            </Paragraph>
            <Paragraph>
              We&apos;re not focused on quotas, and we don&apos;t work on
              commission. We&apos;ve reinvented recruitment, offering holistic,
              personal career coaching that puts providers&apos; needs first.
            </Paragraph>
            <S.Cell size={10}>S10</S.Cell>
          </Wrapper>
        </S.InUse>
      </Section>
      <Wrapper>
        <Section>
          <Cols>
            <div>
              <H3>Size Palette</H3>
              <Paragraph>A visual breakdown of the sizes in use</Paragraph>
              {SCALE.map(
                (size, i) =>
                  i < 16 && (
                    <S.Cell key={size} size={i}>
                      S{i}
                    </S.Cell>
                  )
              )}
            </div>
            <div>
              <H3>CSS Variables</H3>
              <Paragraph>Scale sizes as CSS variables</Paragraph>
              <CodeBlock>
                {SCALE_VARS.map((item) => (
                  <div key={item}>{item}</div>
                ))}
                <br />
                /* Extra small */
                <br />
                --size-xs: 0.25rem; <br />
                --size-sm: 0.5rem; <br />
                <br />
                /* Custom */ <br />
                --size-section: var(--size-10) <br />
                --size-gutter: var(--size-4) <br />
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
