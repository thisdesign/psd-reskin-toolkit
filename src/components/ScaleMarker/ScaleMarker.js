import React from "react";
import styled from "styled-components";

const Marker = ({ size, children, index }) => {
  return (
    <Wrapper>
      <Header>
        Size {index + 1} • {size}rem • Equates to {Math.round(size * 16)}px
      </Header>
      <MarkerStyle size={size}>{children}</MarkerStyle>
    </Wrapper>
  );
};

const Header = styled.div`
  font-size: var(--size-1);
  color: grey;
  margin-bottom: var(--size-0);
`;
const MarkerStyle = styled.div`
  font-size: ${(props) => props.size}em;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;
  padding: var(--size-2);
`;
export default Marker;
