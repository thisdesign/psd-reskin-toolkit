import styled from "styled-components";

const Cell = styled.div<{ size: number }>`
  font-size: var(--size-sm);
  color: var(--color-heather);
  height: ${(props) => props.size}rem;
  border: 1px solid var(--color-ghost);

  &:not(:last-child) {
    border-bottom: 0;
  }
`;

export default { Cell };
