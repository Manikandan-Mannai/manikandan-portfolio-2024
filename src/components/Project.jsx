import React, { useState } from "react";
import styled from "styled-components";
import CustomCursor from "../components/CustomCursor";
import { projectsRow1, projectsRow2 } from "../constant";

const Project = () => {
  const [hoveredProjectIdRow1, setHoveredProjectIdRow1] = useState(null);
  const [hoveredProjectIdRow2, setHoveredProjectIdRow2] = useState(null);

  return (
    <Container className="global-container">
      <Title>Recent Projects</Title>

      <Content>
        {projectsRow1.map((project) => (
          <ProjectContent
            key={project.id}
            onMouseEnter={() => setHoveredProjectIdRow1(project.id)}
            onMouseLeave={() => setHoveredProjectIdRow1(null)}
          >
            <CustomCursor />
            <ProjectTitle>
              {/* <div className="dot"></div> */}
              {project.title}
            </ProjectTitle>
            {hoveredProjectIdRow1 === project.id && (
              <ProjectName>{project.title}</ProjectName>
            )}
            <ImageWrapper background={project.background}>
              <img src={project.image} alt={project.title} />
            </ImageWrapper>
            <TagsContainer>
              {project.tags.map((tag, index) => (
                <Tag key={index}>
                  <span>{tag}</span>
                </Tag>
              ))}
            </TagsContainer>
          </ProjectContent>
        ))}
      </Content>

      <Content>
        {projectsRow2.map((project) => (
          <ProjectContent
            key={project.id}
            onMouseEnter={() => setHoveredProjectIdRow2(project.id)}
            onMouseLeave={() => setHoveredProjectIdRow2(null)}
          >
            <CustomCursor />
            <ProjectTitle>
              {/* <div className="dot"></div> */}
              {project.title}
            </ProjectTitle>
            {hoveredProjectIdRow2 === project.id && (
              <ProjectName>{project.title}</ProjectName>
            )}
            <ImageWrapper background={project.background}>
              <img src={project.image} alt={project.title} />
            </ImageWrapper>
            <TagsContainer>
              {project.tags.map((tag, index) => (
                <Tag key={index}>
                  <span>{tag}</span>
                </Tag>
              ))}
            </TagsContainer>
          </ProjectContent>
        ))}
      </Content>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding: 2% 4%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 2% 0; 
`;

const Title = styled.h1``;

const ProjectTitle = styled.h1`
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
 
`;

const ProjectName = styled.h1`
  position: absolute;
  color: rgba(255, 240, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  z-index: 9999;
  transition: all 500ms ease-in;
`;

const ProjectContent = styled.div`
  cursor: pointer;
`;

const Tag = styled.div`
  padding: 12px 22px;
  border: 2px solid #aeae9d;
  background-color: #272721;
  border-radius: 30px;
  margin: 1rem;
`;

const TagsContainer = styled.div`
  margin-top: 0.55rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 42rem;
  height: 22rem;
  display: grid;
  place-items: center;
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7); 
    z-index: 1;
    transition: opacity 0.3s ease; /* Optional for fade effect */
  }

  &:hover {
    &::before {
      transform: scale(1.1);
    }

    img {
      transform: scale(0.95);
    }

    &::after {
      opacity: 0.7; /* Change opacity on hover if desired */
    }
  }

  img {
    position: relative;
    width: 450px;
    height: auto;
    transition: transform 0.3s ease;
    z-index: 2; /* Bring the image above the overlay */
  }
`;
