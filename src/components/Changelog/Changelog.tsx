import React from "react";
import { Layout, Section, Wrapper, H2, H1, Paragraph } from "components";
import { VERSIONS } from "../../changelog";

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
