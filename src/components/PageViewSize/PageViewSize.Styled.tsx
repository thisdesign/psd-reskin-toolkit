import styled from "styled-components";

const Cell = styled.div<{ size: number }>`
  font-size: var(--size-sm);
  color: var(--color-sky);
  height: ${(props) => `var(--size-${props.size})`};
  border: 1px solid var(--color-ghost);
  margin-bottom: -1px;
  margin-top: -1px;
`;

const InUse = styled.div`
  background: var(--color-porcelain);

  h1,
  h2,
  h3,
  p {
    text-align: center;
  }
  * {
    margin: 0 auto;
  }

  ${Cell} {
    border-radius: 0.25rem;
    padding: 0.1rem;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default { Cell, InUse };
