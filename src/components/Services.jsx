import React, { useState } from "react";
import styled from "styled-components";
import { services } from "../constant";
import Texture from "../assets/images/texture.jpg";

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <ServicesContainer className="global-container">
      <Title>Services</Title>
      <Wrapper>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            color={hoveredId === service.id ? service.color : "transparent"}
          >
            <IconWrapper style={{ color: service.color }}>
              <service.icon />
            </IconWrapper>
            <ServiceContent>
              <ServiceTitle
                hovered={hoveredId === service.id}
                color={hoveredId === service.id ? service.color : "#fff"}
              >
                {service.title}
              </ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
          </ServiceCard>
        ))}
      </Wrapper>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  padding: 2%;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ServiceCard = styled.div`
  background: #151515;
  width: 32rem;
  height: 10rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  flex: 1 1 calc(33% - 20px);
  text-align: left;
  transition: transform 0.2s, border-left 0.2s;
  border-left: 5px solid ${(props) => props.color};
  display: flex;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  text-align: center;
  font-size: 45px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 7em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-image: url(${Texture});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-transform: uppercase;
`;

const ServiceContent = styled.div``;

const ServiceTitle = styled.h3`
  font-weight: 500;
  font-size: 22px;
  margin: 10px 0;
  color: ${(props) => (props.hovered ? props.color : "#fff")};
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #555;
`;
