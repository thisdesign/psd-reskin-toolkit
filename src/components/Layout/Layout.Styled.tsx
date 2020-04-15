import styled from "styled-components";

const Header = styled.div`
  border-bottom: 1px solid var(--color-ghost);
  padding: var(--size-5) 0;
`;

const A = styled.a<{ active: boolean }>`
  color: ${(props) =>
    props.active ? "var(--color-navy)" : "var(--color-slate)"};
  font-size: var(--size-1);
`;

export default {
  Header,
  A,
};
