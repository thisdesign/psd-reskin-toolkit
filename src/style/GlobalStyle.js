import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import modularScale from "./modularscale";

export const SCALE = modularScale({
  scale: 1.2,
  stepsDown: 2,
  length: 15,
});

const style = css`
  :root {
    ${SCALE.map((item, i) => `--size-${i}: ${item}rem`).join(";\n")};
  }

  html,
  body {
    font-size: 16px;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${style}
`;

export default GlobalStyle;
