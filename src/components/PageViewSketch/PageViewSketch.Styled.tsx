import styled, { css } from "styled-components";

const ItemWrapper = styled.div`
  padding: var(--size-2) 0;

  width: 100%;
  overflow: hidden;

  font-size: var(--size-1);
  color: var(--color-slate);
`;

const ExampleText = styled.div<{ px: number }>`
  font-size: ${(props) => `${props.px}px`};
  color: var(--color-navy);
`;

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const TableCol = styled.div`
  border: 1px solid var(--color-ghost);
  border-bottom: 0;

  &:not(:last-child) {
    border-right: 0;
  }
`;

const TableCell = styled.div<{ head?: boolean }>`
  border-bottom: 1px solid var(--color-ghost);
  padding: var(--size-sm);
  font-size: var(--size-1);

  ${(props) =>
    props.head &&
    css`
      background: var(--color-porcelain);
    `}
`;

export default {
  ItemWrapper,
  ExampleText,
  TableWrapper,
  TableCol,
  TableCell,
};
