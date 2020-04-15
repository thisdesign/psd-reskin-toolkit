import React from "react";
import Link from "next/link";
import { Wrapper, SizeBar } from "components";
import { withRouter, Router } from "next/router";
import GlobalStyle from "../../style/GlobalStyle";
import S from "./Layout.Styled";

const Layout: React.FC<{ router: Router }> = ({ children, router }) => {
  return (
    <div>
      <GlobalStyle />
      <SizeBar />
      <S.Header>
        <Wrapper>
          <ul>
            {[
              ["Color", "color"],
              ["Sizing", "size"],
              ["Typography", "typography"],
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
