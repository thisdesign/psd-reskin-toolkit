import React from "react";
import { H1, ZoomImg, ScrollAnim } from "components";
import S from "./Hero.Styled";

const HERO_IMG =
  "https://dn9tckvz2rpxv.cloudfront.net/psd/img2/img-banner-home2.jpg";

const Hero = () => {
  const START_DUR = 200;
  return (
    <S.HeroWrap src={HERO_IMG}>
      <H1>
        <ScrollAnim delay={START_DUR}>Tell us your why,</ScrollAnim>
        <ScrollAnim delay={START_DUR + 100}>
          We&rsquo;ll find your where.
        </ScrollAnim>
      </H1>
    </S.HeroWrap>
  );
};

export default Hero;
