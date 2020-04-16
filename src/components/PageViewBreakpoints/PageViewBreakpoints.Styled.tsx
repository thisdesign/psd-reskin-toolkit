import styled from "styled-components";

const BreakpointWrapper = styled.div`
  position: relative;
  height: var(--size-5);
  color: var(--color-slate);
  font-size: var(--size-0);
  font-family: var(--font-mono);
  width: 100%;

  border: 1px solid var(--color-ghost);
  border-left: 0;
  border-right: 0;

  overflow: hidden;
`;

const Breakpoint = styled.div<{ width: number | string }>`
  margin: -1px 0;
  width: ${(props) => props.width}px;
  height: 100%;
  border: 1px solid var(--color-ghost);
  border-left: 0;
  position: absolute;
  text-align: right;
  border-radius: 0 var(--size-xs) var(--size-xs) 0;

  > div {
    width: 100%;
  }
`;

const BreakpointInner = styled.div`
  position: relative;
  height: 100%;

  > div {
    position: absolute;
    right: 0;
    transform: translateX(100%);
    width: var(--size-15);
    text-align: left;
    padding: 0 var(--size-0);
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export default {
  Breakpoint,
  BreakpointWrapper,
  BreakpointInner,
};
