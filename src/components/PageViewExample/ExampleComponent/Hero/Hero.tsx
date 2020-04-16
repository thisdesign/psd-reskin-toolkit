import React from "react";
import { H1 } from "components";
import S from "./Hero.Styled";

const Hero = () => {
  return (
    <S.HeroWrap>
      <H1>
        Tell us your why,
        <br />
        We&rsquo;ll find your where.
      </H1>
    </S.HeroWrap>
  );
};

export default Hero;
