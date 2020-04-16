import styled from "styled-components";

const HERO_IMG =
  "https://dn9tckvz2rpxv.cloudfront.net/psd/img2/img-banner-home2.jpg";

const HeroWrap = styled.div`
  background-image: url(${HERO_IMG});
  background-size: cover;
  background-position: center;
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
