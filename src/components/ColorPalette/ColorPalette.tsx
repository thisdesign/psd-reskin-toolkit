import React from "react";
import rgbHex from "rgb-hex";
import { COLORS, COLOR_VARS } from "../../constants";
import S from "./ColorPalette.Styled";
import { Code } from "..";

type ColorKey = keyof typeof COLORS;
type RgbVal = [string, string, string];

const MAIN: ColorKey[] = ["navy", "sky", "dust"];
const GREYS: ColorKey[] = ["slate", "heather", "ghost", "cloud", "porcelain"];

const ColorPalette = () => {
  return (
    <div>
      {[MAIN, GREYS].map((colorCollection) => {
        return (
          <div key={colorCollection[0]}>
            {colorCollection.map((key) => (
              <Color
                key={key}
                name={key}
                rgb={(COLORS[key] as unknown) as RgbVal}
              />
            ))}
          </div>
        );
      })}
    </div>
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
