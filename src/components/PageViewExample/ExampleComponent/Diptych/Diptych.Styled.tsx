import styled from "styled-components";
import mq from "style/mq";
import { SIZES } from "../../../../constants";

const Text = styled.div`
  flex-basis: 50%;
  margin-top: var(--size-10);
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    margin: 0 var(--size-4);
  }

  @media ${mq.md} {
    margin: var(--size-4);

    > div {
      max-width: 20rem;
    }

    flex-basis: 40%;
  }
`;

const ImageWrap = styled.div`
  flex-basis: 50%;

  @media ${mq.md} {
    flex-basis: 60%;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Wrapper = styled.div<{ smallWrap?: boolean }>`
  display: flex;
  flex-direction: column;

  max-width: ${(props) => (props.smallWrap ? "1200px" : "1600px")};
  margin: 0 auto;

  @media ${mq.sm} {
    flex-direction: row;
  }

  /* swap down on mobile */

  ${ImageWrap} {
    &:not(:first-child) {
      order: -1;

      @media ${mq.sm} {
        order: inherit;
      }
    }
  }
`;

export default {
  Image,
  Wrapper,
  ImageWrap,
  Text,
};
