import styled from "styled-components";

const Header = styled.div`
  border-bottom: 1px solid var(--color-slate);
  padding: var(--size-8) 0;
`;

const A = styled.a<{ active: boolean }>`
  color: ${(props) =>
    props.active ? "var(--color-navy)" : "var(--color-slate)"};
`;

export default {
  Header,
  A,
};
