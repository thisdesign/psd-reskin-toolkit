import React from "react";
import { Section, ScrollAnim } from "components";
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
      <ScrollAnim>
        <div>{children}</div>
      </ScrollAnim>
    </S.Text>
  );
};

const DiptychImage: React.FC<{ src: string }> = ({ src }) => {
  return (
    <S.ImageWrap>
      <ScrollAnim>
        <S.Image src={src} alt="" />
      </ScrollAnim>
    </S.ImageWrap>
  );
};

const Diptych = {
  Wrapper: DiptychWrapper,
  Text: DiptychText,
  Image: DiptychImage,
};

export default Diptych;
