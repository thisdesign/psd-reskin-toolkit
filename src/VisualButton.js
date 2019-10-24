import React from "react";
import styled from "styled-components";

const VisualButton = () => {
  return (
    <Outline>
      <Text>
        <h3 className="serif">Search for a job that’s where you want to be</h3>
      </Text>
      <Image />
    </Outline>
  );
};

const Outline = styled.div`
  overflow: hidden;
  width: 16rem;
  background: grey;
  border-radius: 1.25rem;
  height: 22rem;
  position: relative;
  cursor: pointer;
`;

Outline.Item = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const Image = styled(Outline.Item)`
  background: url("/image-6.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  transition: 600ms transform cubic-bezier(0.36, 0.97, 0.47, 0.99);

  ${Outline}:hover & {
    transform: scale(1.03);
  }
`;

const Text = styled(Outline.Item)`
  z-index: 100;
  padding: 1rem;
  color: white;
  box-sizing: border-box;
  font-family: serif;
  height: 100%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default VisualButton;
