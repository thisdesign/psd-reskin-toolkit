import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import { SCALE_VARS, COLOR_VARS } from "../constants";
import mq from "./mq";

const style = css`
  :root {
    --size-xs: 0.25rem;
    --size-sm: 0.5rem;
    ${SCALE_VARS.join(";\n")};
    ${COLOR_VARS.join(";\n")};

    --color-brand: rgb(0, 30, 65);
    --color-slate: rgb(123, 132, 147);

    --font-serif: "SangBleu", times, serif;
    --font-sans: "Circular", helvetica, arial, sans-serif;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: "Circular";
    src: url("/fonts/lineto-circular-book.woff2");
  }

  @font-face {
    font-family: "SangBleu";
    src: url("/fonts/SangBleuKingdom-Regular.woff2");
  }

  html,
  body {
    font-size: 16px;
    font-family: var(--font-sans);
    line-height: 1.2;
    font-size: 17px;

    @media ${mq.xs} {
      font-size: 17px;
    }

    @media ${mq.sm} {
      font-size: 18px;
    }

    @media ${mq.md} {
      font-size: 20px;
    }

    @media ${mq.lg} {
      font-size: 21px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${style}
`;

export default GlobalStyle;
