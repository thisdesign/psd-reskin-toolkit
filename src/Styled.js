import styled from "styled-components";
import { helpers } from "./theme";

export const Code = styled.code`
  font-family: "menlo", monospace;
  background: #f3ece0;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 60%;
  color: rgba(0, 0, 0, 0.75);
`;

export const Overlay = styled(Code)`
  /* position: sticky; */
  display: flex;
  padding: 1rem;
  /* top: 1rem; */
  margin: 1rem;

  box-sizing: border-box;

  div {
    flex: 1;
  }
`;

export const Wrap = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.5rem;
`;

export const Section = styled.section`
  margin: 6rem 0;
`;

export const TextBlock = styled.div`
  max-width: 40rem;
  text-align: ${({ center }) => (center ? "center" : "left")};
  margin: ${({ center }) => (center ? "0 auto" : "0")};

  p {
    max-width: 30em;
    text-align: ${({ center }) => (center ? "center" : "left")};
    margin: ${({ center }) => (center ? "0 auto" : "0")};
  }
`;

export const SideBySide = styled.div`
  max-width: 1700px;
  margin: 0 auto;

  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    flex-direction: ${props => (props.invert ? "row-reverse" : "row")};

    margin: 4rem auto;

    & > * {
      width: 50%;
    }
  }
`;

SideBySide.Text = styled.div`
  @media (max-width: 760px) {
    br {
      display: none;
    }
  }

  @media (min-width: 760px) {
    max-width: 20rem;
    margin: 0 auto;
  }
`;

SideBySide.Wrapper = styled.div`
  max-width: 600px;
  margin: 4rem 2rem;
`;

export const Button = styled.div`
  font-size: 0.8rem;
  color: white;
  background: ${props => helpers.toRgb(props.theme.colors.navy)};

  display: inline-block;
  padding: calc(0.5em + 2px) 1.5em;
  border-radius: 1.75em;
  cursor: pointer;
  transition: background 150ms ease-out;
  margin: 0 0.25em;

  &:hover {
    background: ${props => helpers.toRgb(props.theme.colors.navyAlt)};
  }
`;

Button.Alt = styled(Button)`
  background: ${props => helpers.toRgb(props.theme.colors.sky)};

  &:hover {
    background: ${props => helpers.toRgb(props.theme.colors.skyAlt)};
  }
`;

Button.Ghost = styled(Button)`
  background: transparent;
  color: ${props => helpers.toRgb(props.theme.colors.slate)};
  border: 2px solid ${props => helpers.toRgb(props.theme.colors.sky)};

  padding: 0.5em 1.5em;

  &:hover {
    color: white;
    background: ${props => helpers.toRgb(props.theme.colors.sky)};
  }
`;
