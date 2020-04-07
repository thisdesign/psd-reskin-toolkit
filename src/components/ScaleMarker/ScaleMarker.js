import React from "react";
import styled from "styled-components";

const Marker = ({ size, children, index }) => {
  return (
    <Wrapper>
      <Header>
        Size {index} • {size}rem • {Math.round(size * 16)}px
      </Header>
      <MarkerStyle size={size}>{children}</MarkerStyle>
    </Wrapper>
  );
};

const Header = styled.div`
  font-size: var(--size-1);
  color: var(--color-slate);
  margin-bottom: var(--size-sm);
`;
const MarkerStyle = styled.div`
  font-size: ${(props) => props.size}em;
  color: var(--color-brand);
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;
  padding: var(--size-2);
`;
export default Marker;
