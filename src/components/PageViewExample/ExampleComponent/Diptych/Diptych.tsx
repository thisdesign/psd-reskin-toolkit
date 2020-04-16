import React from "react";
import { Section } from "components";
import S from "./Diptych.Styled";

const DiptychWrapper: React.FC<{ smallWrap?: boolean }> = ({
  children,
  smallWrap,
}) => {
  return (
    <Section>
      <S.Wrapper smallWrap={smallWrap}>{children}</S.Wrapper>
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
