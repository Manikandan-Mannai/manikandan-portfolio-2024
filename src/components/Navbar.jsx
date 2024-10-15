import React from "react";
import Logo from "../components/Logo";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav className="global-container">
      <Logo />
      <NavLinks>
        <NavLink href="#about">
          About <Underline />
        </NavLink>
        <NavLink href="#skills">
          Skills <Underline />
        </NavLink>
        <NavLink href="#projects">
          Projects <Underline />
        </NavLink>
        <Button href="#contact">Let's Talk</Button>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  /* background-color: #fff; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  position: relative;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding-bottom: 0.2rem;
  display: flex;
  align-items: center;
  transition: color 0.3s ease-in-out;
  cursor: pointer; 

  &:hover {
    color: #000;
  }

  &:hover > span {
    width: 100%;
  }
`;

const Underline = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.125em;
  width: 0;
  background-color: #000;
  border-radius: 9999px;
  transition: width 0.3s ease-in-out;
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