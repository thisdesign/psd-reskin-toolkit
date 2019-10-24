import React from "react";
import { TextBlock, Section, Wrap, SideBySide, Button } from "./Styled";

const Example = () => {
  return (
    <div>
      <Section>
        <Wrap>
          <TextBlock center>
            <h1>PS+D is a different type of recruitment team.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum urna felis, egestas pellentesque neque nec, vehicula
              efficitur neque. Aenean malesuada at augue et interdum
            </p>
          </TextBlock>
        </Wrap>
      </Section>

      <Section>
        <img src="/image-1.png" alt="" />
      </Section>

      <Section>
        <Wrap>
          <TextBlock center>
            <h2>
              PS+D is a different type <br /> of recruitment team.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum urna felis, egestas pellentesque neque nec, vehicula
              efficitur neque. Aenean malesuada at augue et interdum
            </p>
          </TextBlock>
        </Wrap>
      </Section>

      <SideBySides />
    </div>
  );
};

const SideBySides = () => (
  <div>
    <SideBySide invert>
      <img src="/image-3.png" alt="" />
      <SideBySide.Wrapper>
        <SideBySide.Text>
          <h3>
            Find a job in your <br />
            dream location.
          </h3>
          <p>
            Weather you're looking for a job in your dream location or you're
            already there.
          </p>
          <Button>Search by location</Button>
        </SideBySide.Text>
      </SideBySide.Wrapper>
    </SideBySide>

    <SideBySide>
      <img src="/image-4.png" alt="" />
      <SideBySide.Wrapper>
        <SideBySide.Text>
          <h3>
            Find a job based on <br />
            what you do
          </h3>
          <p>
            We have job listings for 30+ different professions. Find the one for
            you.
          </p>
          <Button>Search by profession</Button>
        </SideBySide.Text>
      </SideBySide.Wrapper>
    </SideBySide>

    <SideBySide invert>
      <img src="/image-5.png" alt="" />
      <SideBySide.Wrapper>
        <SideBySide.Text>
          <h3>
            Find a job at the <br />
            right place
          </h3>
          <p>
            We know your relationship with your practice partner is important,
            so we can find you a job that puts you in the right place.
          </p>
          <Button>Search by practice partner</Button>
        </SideBySide.Text>
      </SideBySide.Wrapper>
    </SideBySide>
  </div>
);

export default Example;
