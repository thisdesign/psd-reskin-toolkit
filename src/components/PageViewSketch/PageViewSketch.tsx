import React, { useState } from "react";
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
        <Section>
          <S.TableWrapper>
            {TYPE_SIZES.map(({ name, size, sizeCode }) => (
              <div>
                <S.TableCol key={name}>
                  <S.TableCell head>{name}</S.TableCell>
                  <S.TableCell>
                    Artboard: <InlineCode> {size}px</InlineCode>
                  </S.TableCell>
                  <S.TableCell>
                    Base font: <InlineCode>{FONT_SIZES[sizeCode]}px</InlineCode>
                  </S.TableCell>

                  <FontSizes sizeCode={sizeCode} />
                  <ScaleSizes sizeCode={sizeCode} />
                </S.TableCol>
              </div>
            ))}
          </S.TableWrapper>
        </Section>
      </Wrapper>
    </Layout>
  );
};

const FontSizes: React.FC<{ sizeCode: string }> = ({ sizeCode }) => {
  return (
    <>
      <S.TableCell head>Font Sizing</S.TableCell>

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
    </>
  );
};

const ScaleSizes: React.FC<{ sizeCode: string }> = ({ sizeCode }) => {
  const [isScaleShown, setScaleShown] = useState<boolean>(false);
  const scales = Object.keys(SCALE).map((key) => ({
    key,
    size: Math.round(SCALE[key] * FONT_SIZES[sizeCode]),
  }));
  return (
    <div>
      <S.TableCell head onClick={() => setScaleShown(!isScaleShown)}>
        {isScaleShown ? "Hide" : "Show"} full scale
      </S.TableCell>
      {isScaleShown && (
        <>
          {[...scales].slice(0, 15).map(({ key, size }) => (
            <S.TableCell>
              S{key}: <InlineCode>{size}px</InlineCode>
            </S.TableCell>
          ))}
        </>
      )}
    </div>
  );
};

export default PageViewTypeSize;
