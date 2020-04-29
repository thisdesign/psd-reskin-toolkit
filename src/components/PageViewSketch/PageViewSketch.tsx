import React from "react";
import { Layout, Wrapper, Section, H1, InlineCode } from "components";
import Link from "next/link";
import S from "./PageViewSketch.Styled";
import { FONT_SIZE_SCALE, SIZES, SCALE, FONT_SIZES } from "../../constants";

const keys = [...Object.keys(FONT_SIZES)].reverse();

type Size = {
  size: number;

  name: string;
  sizeCode: string;
};

const TYPE_SIZES: Size[] = [
  {
    size: 375,
    name: "Mobile",
    sizeCode: "xxs",
  },
  {
    size: 768,
    name: "Tablet",
    sizeCode: "sm",
  },
  {
    size: 1280,
    name: "Desktop",
    sizeCode: "md",
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
          {TYPE_SIZES.map(({ name, size, sizeCode }) => (
            <S.TableCol key={name}>
              <S.TableCell head>{name}</S.TableCell>
              <S.TableCell>
                Artboard: <InlineCode> {size}px</InlineCode>
              </S.TableCell>
              <S.TableCell>
                Base font: <InlineCode>{FONT_SIZES[sizeCode]}px</InlineCode>
              </S.TableCell>
              {Object.keys(FONT_SIZE_SCALE).map((hSize) => {
                const sizeKeys = Object.keys(SIZES);
                const bkptCandidates = [...sizeKeys].slice(
                  sizeKeys.indexOf(sizeCode),
                  sizeKeys.length
                );

                const headingSizeCode = bkptCandidates.reduce((acc, cur) => {
                  const foundSize = FONT_SIZE_SCALE[hSize][cur];

                  return foundSize && acc === -1 ? foundSize : acc;
                }, -1);

                const scaleFactor = SCALE[headingSizeCode];
                const fontSize = scaleFactor * FONT_SIZES[sizeCode];
                const fontSizeRounded = Math.round(fontSize);

                return (
                  <S.TableCell key={hSize}>
                    {hSize}: <InlineCode>{fontSizeRounded}px</InlineCode>
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
