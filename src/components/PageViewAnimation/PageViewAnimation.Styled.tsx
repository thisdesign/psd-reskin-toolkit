import styled from "styled-components";

const Svg = styled.svg`
  display: block;
  border-bottom: 1px solid var(--color-slate);
  border-left: 1px solid var(--color-slate);
  margin-right: var(--size-1);

  path {
    stroke: var(--color-sky);
  }
`;

const BezierWrapper = styled.div`
  margin: var(--size-8) 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--size-5);

  svg {
    margin-bottom: var(--size-sm);
  }
`;

export default {
  BezierWrapper,
  Svg,
};
