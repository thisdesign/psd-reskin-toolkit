import styled from "styled-components";

const ColorBlock = styled.div<{ colorName: string; isDarkText?: boolean }>`
  background: ${(props) => `var(--color-${props.colorName})`};
  color: white;
  padding: var(--size-8);

  code {
  }
`;

export default {
  ColorBlock,
};
