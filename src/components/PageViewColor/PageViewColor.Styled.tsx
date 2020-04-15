import styled from "styled-components";
import mq from "style/mq";

const Wrapper = styled.div`
  @media ${mq.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--size-6);
  }
`;

const ColorBlock = styled.div<{ colorName: string; isDarkText?: boolean }>`
  background: ${(props) => `var(--color-${props.colorName})`};
  color: white;
  padding: var(--size-8);

  code {
  }
`;

export default {
  Wrapper,
  ColorBlock,
};
