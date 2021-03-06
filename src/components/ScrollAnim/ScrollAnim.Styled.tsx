import styled, { css } from "styled-components";
import { FADE_IN_TIMING } from "../../constants";

const Wrapper = styled.div<{ inView: boolean }>`
  opacity: 0;
  transform: translate3d(0, 1.5vh, 0);

  transition: ${FADE_IN_TIMING}ms opacity cubic-bezier(var(--ease-decel)),
    ${FADE_IN_TIMING}ms transform cubic-bezier(var(--ease-decel));

  ${(props) =>
    props.inView &&
    css`
      opacity: 1;
      transform: translate3d(0, 0, 0);
    `};
`;

export default {
  Wrapper,
};
