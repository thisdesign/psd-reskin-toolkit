import React from "react";
import styled from "styled-components";

const Marker = ({ size, children, index }) => {
  return (
    <Wrapper>
      <MarkerStyle index={index}>{children}</MarkerStyle>
      <Header>
        <div>Size {index}</div>
        <div>{size}rem</div>
        <div>{Math.round(size * 16)}px</div>
      </Header>
    </Wrapper>
  );
};

const Header = styled.div`
  font-size: var(--size-1);
  color: var(--color-slate);
  margin-top: var(--size-sm);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 20rem;
`;

const MarkerStyle = styled.div`
  font-size: ${(props) => `var(--size-${props.index})`};
  color: var(--color-brand);
  white-space: nowrap;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;
  padding: var(--size-2);
  overflow: hidden;
`;
export default Marker;
