import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSmoothColorTransition from "../hooks/useSmoothColorTransition";
import MouseScroll from "./Arrow";
import { useBackgroundColor } from "../context/BackgroundColorContext";
import TypingComponent from "./TypingComponent";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeContent = () => {
  const { resetColors } = useBackgroundColor();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 5000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (
      (scrollPosition >= 200 && scrollPosition <= 900) ||
      (scrollPosition >= 2100 && scrollPosition < 4200)
    ) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
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

  useSmoothColorTransition(isScrolled, "#fff", "#000");

  useEffect(() => {
    resetColors();
  }, [resetColors]);

  return (
    <Wrapper className="global-container">
      <Row>
        <Left>
          <Title data-aos="fade-up">Manikandan</Title>
          <Designation data-aos="fade-up" data-aos-delay="500">
            <Line />
            <TypingComponent
              strings={["Web Developer", "Freelancer", "UI/UX Designer"]}
            />
          </Designation>
          <Description data-aos="fade-up" data-aos-delay="1000">
            Are you looking for a reliable and experienced full-stack developer
            who can support your agency in the implementation of complex web
            projects? Then you have come to the right place!
          </Description>
          <ButtonContainer data-aos="fade-up" data-aos-delay="1500">
            <Button className="black">
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right size-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
            <Button className="white animated-border">Portfolio</Button>
          </ButtonContainer>
        </Left>
        <Right>
          <h1>right</h1>
        </Right>
      </Row>
      <div className="arrow-div" data-aos="fade" data-aos-delay="2000">
        <MouseScroll />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .arrow-div {
    position: absolute;
    bottom: 55px;
  }

  @media (max-width: 768px) {
    .arrow-div {
      display: none;
    }
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2% 4%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.55rem;
  flex-basis: 60%;
  min-width: 300px;
`;

const Right = styled.div`
  flex-basis: 35%;
  min-width: 300px;
  h1 {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  text-align: left;
  font-family: "Urbanist", sans-serif;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 22px;
  color: rgb(115, 115, 115);
  line-height: 32px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 26px;
  }
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

    @media (max-width: 768px) {
      font-size: 18px;
    }
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
    box-shadow: none !important;

    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export default HomeContent;
