import React from "react";
import {
  Layout,
  SectionHead,
  Wrapper,
  Paragraph,
  InlineCode,
} from "components";

const PageViewType = () => {
  return (
    <Layout>
      <Wrapper>
        <SectionHead>Typography</SectionHead>
        <Paragraph>
          Typography should support the brand message. Type should never expand
          beyond <InlineCode>25em</InlineCode>. The document font-size grows
          slightly as the viewport grows. Element-level sizing follow the size
          guidelines.
        </Paragraph>
      </Wrapper>
    </Layout>
  );
};

export default PageViewType;
