import React, { useEffect } from "react";
import styled from "styled-components";
import { experiences } from "../constant";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Container className="global-container" id="experience">
      <Content>
        <Title data-aos="fade-up" data-aos-delay="0">
          Current Journey
        </Title>
        <Description data-aos="fade-up" data-aos-delay="200">
          This section tells about my life journey in the tech and education
          field
        </Description>
        <TimeLine>
          <VerticalLine data-aos="fade" data-aos-delay="400" />
          <PingCircle
            className="animate-ping"
            data-aos="fade"
            data-aos-delay="800"
          />
          <TimelineContent>
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id}>
                <Card
                  className="animated-border"
                  data-aos="fade-left"
                  data-aos-delay={800 + index * 300} 
                >
                  <h1 className="role">{exp.role}</h1>
                  <p className="designation">
                    At{" "}
                    <a href={exp.url} target="_blank" rel="noopener noreferrer">
                      {exp.company}
                    </a>
                  </p>
                  <p className="date">{exp.date}</p>
                </Card>
              </TimelineItem>
            ))}
          </TimelineContent>
        </TimeLine>
      </Content>
    </Container>
  );
};


export default Experience;

// Styled components

const Container = styled.div`
  position: relative;
  padding: 4% 8%;
  text-align: center;
  min-height: 100vh;
  max-width: 100vw;
`;

const Content = styled.div`
  width: 90%;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.span`
  display: block;
  margin-bottom: 2rem;
`;

const TimeLine = styled.div`
  position: relative;
  margin-top: 2rem;
  max-width: 1080px;
  margin: auto;
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 3px;
  background-color: #1e1f1f;
  height: 100%;
  left: 30%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    left: 0;
  }
`;

const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-left: 2rem;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PingCircle = styled.span`
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #38bdf8;
  left: calc(30% - 0.5rem);
  top: calc(10% - 0.5rem);
  animation: ping 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 200%;
    height: 200%;
    border-radius: 50%;
    animation: ping-ring 1.25s infinite;
    opacity: 0.5;
  }

  @keyframes ping {
    0% {
      transform: scale(0.8);
      opacity: 1;
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
      opacity: 0;
    }
  }

  @keyframes ping-ring {
    0% {
      transform: scale(0.33);
      opacity: 1;
    }
    80%,
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    left: -2.5%;
  }
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 1);
  color: #000;
  padding: 1rem 2rem;
  width: 22rem;
  text-align: left;
  border-radius: 4px;
  /* border: 2px solid black !important; */
  box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 0.75);

  h1 {
    font-size: 1.25rem;
  }

  p {
    margin: 0.2rem 0;
  }

  a {
    font-weight: 600;
    color: #98b4fc;
    text-decoration: none;
  }
`;
