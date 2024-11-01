import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Avatar from "../assets/images/Avatar.png";
import Gif from "../assets/images/gif.gif";
// import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // console.log("Form submitted successfully:", response.data);

    // try {
    //   //   const response = await axios.post("/send-mail", formData);
    //   alert("Message sent successfully!");
    // } catch (error) {
    //   console.error("Error sending form data:", error);
    //   alert("Failed to send message. Please try again.");
    // } finally {
    // }
    setIsSubmitting(false);
  };

  return (
    <Container className="global-container">
      <Title>Contact Me</Title>
      <Content>
        <Left className="animated-border">
          <div>
            <Heading>Got a question or interested in collaborating?</Heading>
            <Description>
              I'm always open to new projects and ideas. Let's create something
              amazing together!
            </Description>
          </div>

          <FormContainer>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", gap: "2rem" }}>
                <FormRow>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </FormRow>
                <FormRow>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormRow>
              </div>
              <FormRow>
                <label htmlFor="subject">Your Subject</label>
                <input
                  type="textarea"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </FormRow>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            <img src={Avatar} alt="Avatar" />
          </FormContainer>
        </Left>
        <Right className="animated-border">
          <img src={Gif} alt="gif" />
          <span>Contact Details</span>
          <p>iammanikandan.mannai@gmail.com</p>

          <span>Digital Workspace:</span>
          <SocialLinks href="#" target="blank">
            Instagram 📸 <Underline />
          </SocialLinks>
          <SocialLinks href="#" target="blank">
            Github 🐱 <Underline />
          </SocialLinks>
          <SocialLinks href="#" target="blank">
            Linkedin 📝 <Underline />
          </SocialLinks>
          <SocialLinks href="#" target="blank">
            Youtube 📺 <Underline />
          </SocialLinks>
        </Right>
      </Content>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: 100vw;
  padding: 2% 4%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex-basis: 65%;
  text-align: left;
  padding: 2%;
  box-shadow: none !important;
  border-radius: 6px;
  img {
    width: 200px;
  }
  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FormRow = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
  }

  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #333;
    font-size: 16px;
    &:focus {
      outline: none;
      border-bottom: 1px solid #555;
    }
  }
`;

const Right = styled.div`
  text-align: left;
  flex-basis: 30%;
  box-shadow: none !important;
  padding: 2%;
  border-radius: 6px;

  span {
    font-weight: 600;
    font-size: 2rem;
    display: block;
    margin: 1rem 0;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    
  }
  `;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: #fff;
  color: black;
  border: 2px solid black;
  position: relative;
  overflow: hidden;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  margin: 0.75rem auto 0;
  border-radius: 0;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  box-shadow: 5px 5px 0px 0px rgba(35, 34, 34, 1);
  cursor: pointer;
  font-weight: bold;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: black;
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:hover {
    color: white;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    ring: 2px solid #232222;
    ring-offset: 2px;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const SocialLinks = styled.a`
  position: relative;
  text-decoration: none;
  font-size: 1.1rem;
  padding-bottom: 0.2rem;
  display: flex;
  align-items: center;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  margin: 1rem 0;
  display: block;

  &:hover {
    color: #000;
  }

  &:hover span {
    width: 50%;
  }
`;

const Underline = styled.span`
  position: absolute;
  top: 50%;
  height: 2px;
  width: 0;
  background-color: #000;
  border-radius: 9999px;
  transition: width 0.3s ease-in-out;
`;
