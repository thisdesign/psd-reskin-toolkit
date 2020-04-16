import React from "react";
import styled from "styled-components";

const Marker = ({ size, children, index }) => {
  return (
    <Wrapper>
      <MarkerStyle index={index}>{children}</MarkerStyle>
      <Header>
        <div>S{index}</div>
      </Header>
    </Wrapper>
  );
};

const Header = styled.div`
  font-size: var(--size-sm);
  color: var(--color-heather);
  margin-top: var(--size-xs);
`;

const MarkerStyle = styled.div`
  font-size: ${(props) => `var(--size-${props.index})`};
  color: var(--color-brand);
  white-space: nowrap;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;

  padding: var(--size-xs) 0;
  overflow: hidden;
`;
export default Marker;
