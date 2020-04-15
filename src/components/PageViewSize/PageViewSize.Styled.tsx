import styled from "styled-components";

const Cell = styled.div`
  padding: var(--size-xs) 0;
  font-size: var(--size-0);
  color: var(--color-heather);
`;

const Marker = styled.div<{ size: number }>`
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  border: 1px solid var(--color-sky);
  border-radius: 50%;
`;

export default { Marker, Cell };
