import styled from "styled-components";
import mq from "style/mq";

const Cols = styled.div`
  @media ${mq.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--size-6);
  }
`;

export default Cols;
