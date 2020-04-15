import React from "react";
import Link from "next/link";
import GlobalStyle from "../../style/GlobalStyle";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <ul>
        {[
          ["Color", "color"],
          ["Sizing", "size"],
          ["Typography", "typography"],
        ].map(([name, route]) => (
          <li key={name}>
            <Link href={`/${route}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      {children}
    </div>
  );
};

export default Layout;
