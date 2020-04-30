import React from "react";
import rgbHex from "rgb-hex";
import {
  Code,
  Wrapper,
  SectionHead,
  Paragraph,
  Section,
  Cols,
  H5,
} from "components";
import { COLORS } from "../../constants";
import S from "./PageViewColor.Styled";

type ColorKey = keyof typeof COLORS;
type RgbVal = [string, string, string];

const MAIN: ColorKey[] = ["navy", "sky", "dust", "midnight"];
const GREYS: ColorKey[] = [
  "raincloud",
  "slate",
  "heather",
  "ghost",
  "cloud",
  "porcelain",
];

const ColorPalette = () => {
  return (
    <Wrapper>
      <Section>
        <SectionHead>Color</SectionHead>
        <Paragraph>
          Color is a fundamental element of our visual identity. It subliminally
          reinforces our visual principals while acting as a signifier of the
          brand.
        </Paragraph>
      </Section>
      <Section>
        <Cols>
          <div>
            <H5>Main</H5>
            {MAIN.map((key) => (
              <Color
                key={key}
                name={key}
                rgb={(COLORS[key] as unknown) as RgbVal}
              />
            ))}
          </div>

          <div>
            <H5>Greys</H5>
            {GREYS.map((key, i) => (
              <Color
                key={key}
                name={key}
                rgb={(COLORS[key] as unknown) as RgbVal}
                isDarkText={i > 1}
              />
            ))}
          </div>
        </Cols>
      </Section>
    </Wrapper>
  );
};

const Color: React.FC<{
  isDarkText?: boolean;
  name: string;
  rgb: RgbVal;
}> = ({ name, rgb, isDarkText }) => {
  const [r, g, b] = rgb;
  return (
    <S.ColorBlock colorName={name} isDarkText={isDarkText}>
      <Code>{name}</Code>
      <Code>
        R {r} / G {g} / B {b}
      </Code>
      <Code>#{rgbHex(parseFloat(r), parseFloat(g), parseFloat(b))}</Code>
    </S.ColorBlock>
  );
};

export default ColorPalette;
