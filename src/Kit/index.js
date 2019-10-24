import React from "react";
import hexRgb from "hex-rgb";
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
            <ColorBlock hex="081E3F" name="Navy" ltText />
            <ColorBlock hex="38B4F8" name="Sky" ltText />
            <ColorBlock hex="C4BFB7" name="Dust" ltText />
          </div>
          <div>
            <p>Color: Greys</p>
            <ColorBlock hex="7B8493" name="Slate" ltText />
            <ColorBlock hex="BAC0C9" name="Heather" ltText />
            <ColorBlock hex="D9DDE3" name="Ghost" />
            <ColorBlock hex="ECEEF1" name="Cloud" />
            <ColorBlock hex="F9FAFB" name="Porcelain" />
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

const ColorBlock = ({ hex, ltText, name }) => {
  const { red, green, blue } = hexRgb(hex);

  return (
    <StyledBlock color={hex} light={ltText}>
      <code>{name.toUpperCase()}</code>

      <code>#{hex}</code>
      <code>
        R {red} / G {green} / B {blue}
      </code>
    </StyledBlock>
  );
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
