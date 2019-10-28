import React from "react";
import rgbHex from "rgb-hex";
import styled from "styled-components";
import { TextBlock, Section, Wrap, Button, Code } from "../Styled";
import VisualButton from "../VisualButton";

const HEADING_MSG = "Practice Potential";

export default () => {
  return (
    <Wrap>
      <Section>
        <SectionHead>Type styles</SectionHead>
        <TextBlock>
          <h1>{HEADING_MSG}</h1>
          <h2>{HEADING_MSG}</h2>
          <h3>{HEADING_MSG}</h3>
          <h4>{HEADING_MSG}</h4>
          <h5>{HEADING_MSG}</h5>
          <h6>{HEADING_MSG}</h6>
        </TextBlock>
      </Section>
      <Section>
        <Grid>
          <div>
            <p>Color: Primary</p>
            <ColorBlock rgb={[0, 30, 65]} name="Navy" ltText />
            <ColorBlock rgb={[56, 180, 248]} name="Sky" ltText />
            <ColorBlock rgb={[181, 173, 165]} name="Dust" ltText />
          </div>
          <div>
            <p>Color: Greys</p>
            <ColorBlock rgb={[123, 132, 147]} name="Slate" ltText />
            <ColorBlock rgb={[186, 192, 201]} name="Heather" ltText />
            <ColorBlock rgb={[217, 221, 227]} name="Ghost" />
            <ColorBlock rgb={[236, 238, 241]} name="Cloud" />
            <ColorBlock rgb={[249, 250, 251]} name="Porcelain" />
          </div>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <div>
            <SectionHead>Visual Button</SectionHead>
            <Code>NOTES: 600ms / cubic-bezier(0.36, 0.97, 0.47, 0.99);</Code>
            <VisualButton />
          </div>

          <div>
            <SectionHead>Button Style</SectionHead>
            <Button>Button</Button>
            {/* <Button>Button</Button> */}
          </div>
        </Grid>
      </Section>
    </Wrap>
  );
};

const ColorBlock = ({ rgb, ltText, name }) => {
  if (rgb && rgb.length === 3) {
    const r = rgb[0];
    const g = rgb[1];
    const b = rgb[2];

    const hex = rgbHex(r, g, b);
    return (
      <StyledBlock color={hex} light={ltText}>
        <code>{name.toUpperCase()}</code>
        <code>#{hex}</code>
        <code>
          R {r} / G {g} / B {b}
        </code>
      </StyledBlock>
    );
  }
  console.error("please insert rgb values");
  return null;
};

const StyledBlock = styled.div`
  background-color: #${props => props.color};
  color: ${props =>
    props.light ? "rgba(255,2655,255, 0.8)" : "rgba(0,0,0, 0.5)"};
  padding: 2rem;
`;

const SectionHead = styled.p`
  border-bottom: 1px solid #eceef1;
`;

const Grid = styled.div`
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;
