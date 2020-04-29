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

const SizeKey = styled.div<{ current: boolean }>`
  border: 1px solid var(--color-heather);
  color: var(--color-heather);
  width: var(--size-6);
  height: var(--size-6);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: var(--size-xs);
  margin-bottom: var(--size-sm);

  ${(props) =>
    props.current &&
    css`
      background: var(--color-navy);
      border: 1px solid var(--color-navy);
      color: var(--color-porcelain);
    `};
`;

export default {
  ItemWrapper,
  SizeKey,
  ExampleText,
};
