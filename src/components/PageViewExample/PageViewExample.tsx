import React from "react";
import {
  Layout,
  Section,
  H3,
  H2,
  H1,
  Wrapper,
  Paragraph,
  ScrollAnim,
} from "components";
import { Diptych, Hero, TextOverColor } from "./ExampleComponent";

const Example = () => {
  return (
    <Layout>
      <Hero />
      <Section>
        <Wrapper>
          <ScrollAnim>
            <H2>
              Tell us you why, <br />
              we&rsquo;ll find your where
            </H2>

            <Paragraph>
              We don’t love the transactional sales mentality in this industry.
              We have a thing for helping people, so we made our service
              personal
            </Paragraph>
          </ScrollAnim>
        </Wrapper>
      </Section>
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

        <Diptych.Wrapper smallWrap>
          <Diptych.Image src="/image-5.png" />
          <Diptych.Text>
            <H3>Standard-Wrap Diptych.</H3>
            <Paragraph>
              This diptych follows the standard wrap size (1200px) wheras the
              others exend past it. This is especially helpful when showing
              less-important imagery.
            </Paragraph>
          </Diptych.Text>
        </Diptych.Wrapper>
      </Section>
      <TextOverColor>
        <Wrapper>
          <ScrollAnim>
            <H1>Text Inside Color</H1>
          </ScrollAnim>
          <ScrollAnim>
            <Paragraph>
              To keep the page feeling grounded, elements inside of color block
              should always animate, rather than the entire color block itself.
            </Paragraph>
          </ScrollAnim>
        </Wrapper>
      </TextOverColor>
    </Layout>
  );
};

export default Example;
