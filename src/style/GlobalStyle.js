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
    --size-xs: 0.25rem;
    --size-sm: 0.5rem;
    ${SCALE.map((item, i) => `--size-${i}: ${item}rem`).join(";\n")};

    --color-brand: rgb(0, 30, 65);
    --color-slate: rgb(123, 132, 147);
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    font-size: 16px;
    font-family: CircularPro-Book;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${style}
`;

export default GlobalStyle;
