import styled, { css } from "styled-components";
import mq from "style/mq";

const GENERICHEAD = css`
  margin-bottom: var(--size-sm);
`;

export const H1 = styled.h1`
  ${GENERICHEAD}
  font-family: var(--font-serif);
  font-size: var(--size-6);

  @media ${mq.sm} {
    font-size: var(--size-7);
  }

  @media ${mq.sm} {
    font-size: var(--size-8);
  }
`;

export const H2 = styled.h2`
  ${GENERICHEAD}
  font-family: var(--font-serif);
  font-size: var(--size-5);

  @media ${mq.sm} {
    font-size: var(--size-6);
  }

  @media ${mq.md} {
    font-size: var(--size-7);
  }
`;

export const H3 = styled.h3`
  ${GENERICHEAD}
  font-size: var(--size-4);
`;

export const H4 = styled.h4`
  ${GENERICHEAD}
  font-size: var(--size-3);
`;

export const H5 = styled.h5`
  ${GENERICHEAD}
  font-size: var(--size-2);
`;

export const H6 = styled.h6`
  ${GENERICHEAD}
  font-size: var(--size-1);
`;
