import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <Container className="global-container">
      <Text>
        <Highlight>I'm a</Highlight> Software Developer
        <br />
        <Highlight>Who loves</Highlight> to create awesome,
        <br />
        big-scale apps <Highlight>with</Highlight> smooth user interactions.
      </Text>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;
  padding: 2% 4%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 88px;
  font-weight: 500;
  line-height: 91px;
  text-align: left;
`;

const Highlight = styled.span`
  color: #666666;
`;

export default AboutMe;
