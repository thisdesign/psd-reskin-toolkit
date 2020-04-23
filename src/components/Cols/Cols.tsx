import styled from "styled-components";
import mq from "style/mq";

const Cols = styled.div`
  grid-gap: var(--size-10);
  display: grid;
  @media ${mq.sm} {
    grid-gap: var(--size-6);
    grid-template-columns: 1fr 1fr;
  }
`;

export default Cols;
