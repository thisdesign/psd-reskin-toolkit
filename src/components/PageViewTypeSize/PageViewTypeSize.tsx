import React from "react";
import { Layout, Wrapper, Section, H1 } from "components";
import Link from "next/link";
import S from "./PageViewTypeSize.Styled";
import { SCALE, SIZES, FONT_SIZES } from "../../constants";

const keys = [...Object.keys(FONT_SIZES)].reverse();

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
          <H1>Sketch Type sizing</H1>
        </Section>
        <Section>
          {keys.map((key) => (
            <S.SizeKey current={key === browserSize}>
              <Link scroll={false} href={`/type-size?size=${key}`}>
                <a>{key}</a>
              </Link>
            </S.SizeKey>
          ))}
          <div>
            {range}
            <br />
            <br />
          </div>
          {SCALE.map(
            (scaleSize, i) =>
              i < 15 && (
                <ScaleItem
                  browserSize={browserSize}
                  scaleSize={scaleSize}
                  i={i}
                />
              )
          )}
        </Section>
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
