import styled from "styled-components";

const ColorBlock = styled.div<{ colorName: string; isDarkText?: boolean }>`
  background: ${(props) => `var(--color-${props.colorName})`};
  color: ${(props) => (props.isDarkText ? "var(--color-slate)" : "white")};
  padding: var(--size-8);

  code {
  }
`;

export default {
  ColorBlock,
};
