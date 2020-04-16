import React from "react";
import Link from "next/link";
import { Wrapper, SizeBar, H4, Paragraph, Section } from "components";
import { withRouter, Router } from "next/router";
import Head from "next/head";
import GlobalStyle from "../../style/GlobalStyle";
import S from "./Layout.Styled";

const Layout: React.FC<{ router: Router }> = ({ children, router }) => {
  return (
    <div>
      <Head>
        <title>PS&amp;D Style Guide</title>
      </Head>
      <GlobalStyle />
      <SizeBar />
      <S.Header>
        <Wrapper>
          <H4>Style Guide</H4>

          <ul>
            {[
              ["Color", "color"],
              ["Breakpoints", "breakpoints"],
              ["Sizing", "size"],
              ["Typography", "typography"],
              ["Component Example", "example"],
            ].map(([name, route]) => (
              <li key={name}>
                <Link href={`/${route}`}>
                  <S.A active={router.route === `/${route}`}>{name}</S.A>
                </Link>
              </li>
            ))}
          </ul>
        </Wrapper>
      </S.Header>

      {children}
    </div>
  );
};

export default withRouter(Layout);
