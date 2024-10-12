import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSmoothColorTransition from "../hooks/useSmoothColorTransition";
import MouseScroll from "./Arrow";

const HomeContent = () => {
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

  const bgColor = "#FAFAF9";
  const textColor = "#000";

  useSmoothColorTransition(isScrolled, bgColor, textColor);

  return (
    <Wrapper className="global-container">
      <Row>
        <Left>
          <Title>Manikandan</Title>
          <Designation>
            <Line />
            <span>Software Developer</span>
          </Designation>
          <Description>
            Are you looking for a reliable and experienced full-stack developer
            who can support your agency in the implementation of complex web
            projects? Then you have come to the right place!
          </Description>
          <ButtonContainer>
            <Button className="black">
              <span>Contact</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right size-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
            <Button className="white">Portfolio</Button>
          </ButtonContainer>
        </Left>
        <Right>
          <h1>right</h1>
        </Right>
      </Row>
      <div className="arrow-div">
        <MouseScroll />
      </div>
    </Wrapper>
  );
};

export default HomeContent;

const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;

  .arrow-div {
    position: absolute;
    bottom: 55px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.55rem;
  flex-basis: 45%;
`;

const Right = styled.div`
  flex-basis: 45%;
`;

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  font-family: "Urbanist", sans-serif;
  text-align: left;
`;

const Description = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 22px;
  color: rgb(115, 115, 115);
  line-height: 32px;
  text-align: left;
`;

const Line = styled.div`
  width: 150px;
  height: 2px;
  background-color: #666666;
`;

const Designation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    color: #666666;
    font-size: 22px;
    font-weight: 500;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
  outline: none;
  border-radius: 9999px;
  height: 2.75rem;
  padding: 0 2rem;
  gap: 0.5rem;
  text-decoration: none;
  border: none;
  cursor: not-allowed;

  &:disabled {
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &.black {
    background: #000;
    color: #fff;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }

  &.white {
    background: #fff;
    color: #000;

    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }
  }
`;
