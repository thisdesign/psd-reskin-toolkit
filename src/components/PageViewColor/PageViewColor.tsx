import React from "react";
import rgbHex from "rgb-hex";
import {
  Code,
  Wrapper,
  SectionHead,
  Paragraph,
  Section,
  Cols,
} from "components";
import { COLORS } from "../../constants";
import S from "./PageViewColor.Styled";

type ColorKey = keyof typeof COLORS;
type RgbVal = [string, string, string];

const MAIN: ColorKey[] = ["navy", "sky", "dust"];
const GREYS: ColorKey[] = ["slate", "heather", "ghost", "cloud", "porcelain"];

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
            Main
            {MAIN.map((key) => (
              <Color
                key={key}
                name={key}
                rgb={(COLORS[key] as unknown) as RgbVal}
              />
            ))}
          </div>

          <div>
            Greys
            {GREYS.map((key) => (
              <Color
                key={key}
                name={key}
                rgb={(COLORS[key] as unknown) as RgbVal}
              />
            ))}
          </div>
        </Cols>
      </Section>
    </Wrapper>
  );
};

const Color: React.FC<{ name: string; rgb: RgbVal }> = ({ name, rgb }) => {
  const [r, g, b] = rgb;
  return (
    <S.ColorBlock colorName={name}>
      <Code>{name}</Code>
      <Code>
        R {r} / G {g} / B {b}
      </Code>
      <Code>#{rgbHex(parseFloat(r), parseFloat(g), parseFloat(b))}</Code>
    </S.ColorBlock>
  );
};

export default ColorPalette;
