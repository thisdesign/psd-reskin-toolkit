import styled, { css } from "styled-components";

const ItemWrap = styled.li<{ isPatch: boolean }>`
  margin: var(--size-5) 0;
  font-size: var(--size-3);
  max-width: 20em;

  ${(props) =>
    props.isPatch &&
    css`
      color: grey;
      padding-left: var(--size-1);
      border-left: 1px solid var(--color-cloud);
      font-size: var(--size-2);

      > div {
        font-size: var(--size-1);
        color: var(--color-heather);
      }
    `};
`;

const Date = styled.span`
  color: var(--color-heather);
  font-size: var(--size-2);
`;

const Desc = styled.div`
  padding-top: var(--size-xs);
  color: var(--color-slate);
  font-size: var(--size-2);
`;

export default {
  Desc,
  Date,
  ItemWrap,
};
