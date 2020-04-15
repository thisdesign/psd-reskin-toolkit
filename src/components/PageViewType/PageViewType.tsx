import React from "react";
import {
  Layout,
  SectionHead,
  Wrapper,
  Paragraph,
  Section,
  InlineCode,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "components";

const PageViewType = () => {
  return (
    <Layout>
      <Wrapper>
        <Section>
          <SectionHead>Typography</SectionHead>
          <Paragraph>
            Typography should support the brand message. Type should never
            expand beyond <InlineCode>25em</InlineCode>. The document font-size
            grows slightly as the viewport grows. Element-level sizing follow
            the size guidelines.
          </Paragraph>
        </Section>
        <Section>
          <H1>Practice Potential </H1>
          <H2>Practice Potential</H2>
          <H3> Practice Potential</H3>
          <H4>Practice Potential</H4>
          <H5>Practice Potential</H5>
          <H6>Practice Potential</H6>
        </Section>
      </Wrapper>
    </Layout>
  );
};

export default PageViewType;
