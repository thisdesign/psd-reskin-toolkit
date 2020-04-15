import styled from "styled-components";
import mq from "style/mq";

const Outline = styled.div`
  font-family: var(--font-mono);
  font-size: var(--size-0);

  background: rgb(243, 236, 224);

  padding: var(--size-2);
  grid-gap: var(--size-1);
  margin: var(--size-0);

  border-radius: var(--size-sm);
  color: rgba(0, 0, 0, 0.5);

  @media ${mq.xs} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default {
  Outline,
};
