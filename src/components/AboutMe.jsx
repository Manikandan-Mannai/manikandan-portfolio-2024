import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Container className="global-container">
      <Text data-aos="fade-right">
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
  max-width: 100vw;

  @media (max-width: 768px) {
    padding: 2%;
  }
`;

const Text = styled.h1`
  font-size: 88px;
  font-weight: 500;
  line-height: 91px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 52px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    line-height: 40px;
  }
`;

const Highlight = styled.span`
  color: #666666;
`;

export default AboutMe;
