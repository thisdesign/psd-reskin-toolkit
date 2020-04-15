import styled from "styled-components";

const Code = styled.code`
  display: block;
  font-family: roboto mono, monospace;
  text-transform: uppercase;
  line-height: 1.2;
`;

export const InlineCode = styled.code`
  font-family: var(--font-mono);
  display: inline;
  font-size: var(--size-1);
  padding: 0 var(--size-xs);
  border-radius: var(--size-xs);
  background: var(--color-cloud);
  color: var(--color-sky);
`;

export default Code;
