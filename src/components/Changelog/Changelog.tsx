import React from "react";
import { Layout, Section, Wrapper, H2, H6, H1, Paragraph } from "components";
import { VERSIONS } from "../../changelog";

const fmtDate = (date: Date): string => {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};
const Changelog = () => {
  return (
    <Layout>
      <Wrapper>
        <Section>
          <H1>Changelog</H1>
        </Section>
        <Section>
          {[...VERSIONS].reverse().map((item) => (
            <div>
              <H2>{item.number}</H2>
              <H6>Updated {fmtDate(item.date)}</H6>

              <Paragraph>
                <ul>
                  {item.changes.map((change) => (
                    <li>• {change}</li>
                  ))}
                </ul>
              </Paragraph>
            </div>
          ))}
        </Section>
      </Wrapper>
    </Layout>
  );
};

export default Changelog;
