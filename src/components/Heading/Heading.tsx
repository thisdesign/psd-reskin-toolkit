import styled, { css } from "styled-components";
import mq from "style/mq";
import { SIZES, FONT_SIZE_SCALE } from "../../constants";

const getSizeCss = (size: string) => {
  const sizes = FONT_SIZE_SCALE[size];
  const sizeArr = Object.keys(sizes).map((key) => ({
    pxVal: `${SIZES[key]}px`,
    sizeKey: sizes[key],
  }));

  return css`
    ${sizeArr.map(
      ({ pxVal, sizeKey }) => `
        @media (min-width:${pxVal}){
          font-size: var(--size-${sizeKey});
        }
      `
    )};
  `;
};

const GENERICHEAD = css`
  margin-bottom: var(--size-sm);
  line-height: 1.2;
`;

export const H1 = styled.h1`
  ${GENERICHEAD}
  font-family: var(--font-serif);
  ${getSizeCss("h1")}
`;

export const H2 = styled.h2`
  ${GENERICHEAD}
  font-family: var(--font-serif);
  ${getSizeCss("h2")};
`;

export const H3 = styled.h3`
  ${GENERICHEAD}
  ${getSizeCss("h3")};
`;

export const H4 = styled.h4`
  ${GENERICHEAD}
  ${getSizeCss("h4")};
`;

export const H5 = styled.h5`
  ${GENERICHEAD}
  ${getSizeCss("h5")};
`;

export const H6 = styled.h6`
  ${GENERICHEAD}
  ${getSizeCss("h6")};
`;
