import styled from "styled-components";
import { ZoomImg } from "components";

const HeroWrap = styled(ZoomImg)`
  text-align: center;
  min-height: 80vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    text-shadow: 0 10px 100px black;
  }
`;

export default {
  HeroWrap,
};
