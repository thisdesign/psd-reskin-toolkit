import React from "react";
import { Section } from "components";
import S from "./Diptych.Styled";

const DiptychWrapper: React.FC<{}> = ({ children }) => {
  return (
    <Section>
      <S.Wrapper>{children}</S.Wrapper>
    </Section>
  );
};

const DiptychText: React.FC<{}> = ({ children }) => {
  return (
    <S.Text>
      <div>{children}</div>
    </S.Text>
  );
};

const DiptychImage: React.FC<{ src: string }> = ({ src }) => {
  return (
    <S.ImageWrap>
      <S.Image src={src} alt="" />
    </S.ImageWrap>
  );
};

const Diptych = {
  Wrapper: DiptychWrapper,
  Text: DiptychText,
  Image: DiptychImage,
};

export default Diptych;
