import React from "react";
import { Layout, Wrapper, Section, H1, InlineCode } from "components";
import Link from "next/link";
import S from "./PageViewSketch.Styled";
import { SCALE, SIZES, FONT_SIZES } from "../../constants";

const keys = [...Object.keys(FONT_SIZES)].reverse();

type Size = {
  size: number;
  base: number;
  name: string;
  headings: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
  };
};

const TYPE_SIZES: Size[] = [
  {
    size: 375,
    base: FONT_SIZES.xxs,
    name: "Mobile",
    headings: {
      h1: 6,
      h2: 5,
      h3: 4,
      h4: 3,
      h5: 2,
      h6: 1,
    },
  },
  {
    size: 768,
    base: FONT_SIZES.sm,
    name: "Tablet",
    headings: {
      h1: 8,
      h2: 6,
      h3: 4,
      h4: 3,
      h5: 2,
      h6: 1,
    },
  },
  {
    size: 1280,
    base: FONT_SIZES.md,
    name: "Desktop",
    headings: {
      h1: 8,
      h2: 6,
      h3: 4,
      h4: 3,
      h5: 2,
      h6: 1,
    },
  },
];

const PageViewTypeSize: React.FC<{ browserSize?: string }> = ({
  browserSize = keys[0],
}) => {
  const currentSize = SIZES[browserSize];
  const nextSize = SIZES[keys[keys.indexOf(browserSize) + 1]];
  const range = `${currentSize}px${nextSize ? ` - ${nextSize}px` : " beoynd"}`;

  return (
    <Layout>
      <Wrapper>
        <Section>
          <H1>Sketch Guidelines</H1>
        </Section>
        <S.TableWrapper>
          {TYPE_SIZES.map((item) => (
            <S.TableCol>
              <S.TableCell head>{item.name}</S.TableCell>
              <S.TableCell>
                Artboard: <InlineCode> {item.size}px</InlineCode>
              </S.TableCell>
              <S.TableCell>
                Base font: <InlineCode>{item.base}px</InlineCode>
              </S.TableCell>
              {Object.keys(item.headings).map((key) => {
                const scaleIndex = item.headings[key];
                const scaleFactor = SCALE[scaleIndex];
                const fontSize = scaleFactor * item.base;
                const fontSizeRounded = Math.round(fontSize);

                return (
                  <S.TableCell>
                    {key.toUpperCase()}:{" "}
                    <InlineCode>{fontSizeRounded}px</InlineCode>
                  </S.TableCell>
                );
              })}
            </S.TableCol>
          ))}
        </S.TableWrapper>
      </Wrapper>
    </Layout>
  );
};

const ScaleItem: React.FC<{
  i: number;
  browserSize: string;
  scaleSize: number;
}> = ({ browserSize, scaleSize, i }) => {
  const pxVal = FONT_SIZES[browserSize] * scaleSize;
  const ptVal = pxVal / (1 / 3 + 1);

  const pxRounded = Math.round(pxVal);
  const ptRounded = Math.round(ptVal);

  return (
    <S.ItemWrapper>
      <div>
        <S.ExampleText px={pxVal}>Committed to care.</S.ExampleText>
      </div>
      {pxRounded}px • (S{i} - x{scaleSize})
    </S.ItemWrapper>
  );
};

export default PageViewTypeSize;
