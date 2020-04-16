import React from "react";
import { Layout, Section, H3, Paragraph } from "components";
import { Diptych } from "./ExampleComponent";

const Example = () => {
  return (
    <Layout>
      <Section>
        <Diptych.Wrapper>
          <Diptych.Image src="/image-2.png" />
          <Diptych.Text>
            <H3>
              We do job matching.
              <br /> Really well.
            </H3>
            <Paragraph>
              We have hundreds of open positions. We narrow it down by listening
              to you and finding jobs that will make your career better and your
              life richer.
            </Paragraph>
          </Diptych.Text>
        </Diptych.Wrapper>

        <Diptych.Wrapper>
          <Diptych.Text>
            <H3>What you want, not what others want.</H3>
            <Paragraph>
              What you want, not what others want. We’ve built a model that is
              personal, not transactional. We start by listening to who you are
              and what matters in your world before finding you the best fit.
            </Paragraph>
          </Diptych.Text>
          <Diptych.Image src="/image-3.png" />
        </Diptych.Wrapper>
      </Section>
    </Layout>
  );
};

export default Example;
