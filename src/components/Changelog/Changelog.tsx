import React from "react";
import { Layout, Section, Wrapper, H2, H6, H1, Paragraph } from "components";
import { VERSIONS } from "../../changelog";
import S from "./Changelog.Styled";

const fmtDate = (date: Date): string => {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const versionsParsed = [...VERSIONS].map((version) => ({
  ...version,
  numberParsed: version.number.split(".").map((num) => parseFloat(num)),
}));

const Changelog = () => {
  return (
    <Layout>
      <Wrapper>
        <Section>
          <H1>Changelog</H1>
        </Section>
        <ul>
          <Section>
            {versionsParsed.map((item) => {
              const isMajor = item.numberParsed[1] === 0;
              const isMinor = item.numberParsed[2] === 0;
              const isPatch = !isMajor && !isMinor;

              return (
                <S.ItemWrap isPatch={isPatch} key={item.number}>
                  {item.number} <S.Date>({fmtDate(item.date)})</S.Date>
                  {item.changes.map((change) => (
                    <S.Desc key={change}>{change}</S.Desc>
                  ))}
                </S.ItemWrap>
              );
            })}
          </Section>
        </ul>
      </Wrapper>
    </Layout>
  );
};

export default Changelog;
