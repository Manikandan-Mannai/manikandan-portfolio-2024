import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSmoothColorTransition from "../hooks/useSmoothColorTransition";

const AboutMe = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 200);
  };

  useEffect(() => {
    const handleScrollDebounce = () => {
      setTimeout(() => {
        handleScroll();
      }, 100);
    };

    window.addEventListener("scroll", handleScrollDebounce);

    return () => {
      window.removeEventListener("scroll", handleScrollDebounce);
    };
  }, []);

  const bgColor = "#fff"; // Default background color
  const textColor = "#000"; // Default text color

  // Use the custom hook for smooth color transition
  useSmoothColorTransition(isScrolled, bgColor, textColor);

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
