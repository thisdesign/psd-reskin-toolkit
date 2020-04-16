import styled, { css } from "styled-components";

const Wrapper = styled.div<{ inView: boolean }>`
  opacity: 0;
  transform: translate3d(0, var(--size-0), 0);

  transition: 2s opacity cubic-bezier(0.075, 0.82, 0.165, 1),
    2s transform cubic-bezier(0.075, 0.82, 0.165, 1);

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
