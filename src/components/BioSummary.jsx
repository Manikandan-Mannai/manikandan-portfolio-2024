import React from "react";
import styled from "styled-components";
import Bootstrap from "../assets/images/bootstrap.svg";
import CSS from "../assets/images/CSS.svg";
import Express from "../assets/images/express.svg";
import figma from "../assets/images/figma.svg";
import git from "../assets/images/git.svg";
import HTML from "../assets/images/HTML.svg";
import Java from "../assets/images/Java.svg";
import JS from "../assets/images/JS.svg";
import MongoDB from "../assets/images/MongoDB.svg";
import Node from "../assets/images/Node.svg";
import postman from "../assets/images/postman.svg";
import ReactImage from "../assets/images/React.svg";
import SCSS from "../assets/images/SCSS.svg";
import Typescript from "../assets/images/typescript.svg";

const BioSummary = () => {
  return (
    <Container className="global-container">
      <Content>
        <Title>Get to know me!</Title>
        <Description>
          I'm a <b>FullStack Web Developer</b> building the Front-end of
          Websites and Web Applications that leads to the success of the overall
          product. Check out some of my work in the Projects section. I also
          like sharing content related to the stuff that I have learned over the
          years in Web Development so it can help other people of the Dev
          Community. Feel free to Connect or Follow me on my Linkedin where I
          post useful content related to Web Development and Programming.
        </Description>

        <Description style={{ marginTop: "2rem" }}>
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience,
          then don't hesitate to contact me.
        </Description>

        <Title style={{ fontSize: "28px" }}>Professional Skillset</Title>

        <SvgContainer>
          <img src={HTML} alt="html" />
          <img src={CSS} alt="css" />
          <img src={SCSS} alt="scss" />
          <img src={Bootstrap} alt="bootstrap" />
          <img src={JS} alt="javascript" />
          <img src={ReactImage} alt="react js" />
          <img src={Typescript} alt="typescript" />
          <img src={Node} alt="node js" />
          <img src={Express} alt="express" />
          <img src={MongoDB} alt="mongodb" />
          <img src={Java} alt="Java" />
        </SvgContainer>

        <Title style={{ fontSize: "28px" }}>Tools</Title>
        <SvgContainer>
          <img src={figma} alt="figma" />
          <img src={git} alt="git" />
          <img src={postman} alt="postman" />
        </SvgContainer>
      </Content>
    </Container>
  );
};

export default BioSummary;

const Container = styled.div`
  position: relative;
  padding: 2% 4%;
  text-align: center;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const Content = styled.div`
  width: 70%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
    text-align: justify;
  }
`;

const Title = styled.h1`
  font-size: 46px;
  margin: 1rem 0;
  text-align: center;
  .sub-heading {
    font-size: 18px !important;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  gap: 1.55rem;
  flex-wrap: wrap;

  img {
    width: 42px;
    height: 42px;

    @media (max-width: 768px) {
      width: 36px;
      height: 36px;
    }

    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }
`;
