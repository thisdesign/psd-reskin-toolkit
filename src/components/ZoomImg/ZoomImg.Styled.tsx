import styled, { css } from "styled-components";

const ZoomImg = styled.div<{ src: string; active: boolean }>`
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    z-index: -1;
    transform: scale(1.05);
    transition: transform 1500ms cubic-bezier(var(--ease-decel));

    ${(props) =>
      props.active &&
      css`
        transform: scale(1);
      `};
  }
`;

export default {
  ZoomImg,
};
