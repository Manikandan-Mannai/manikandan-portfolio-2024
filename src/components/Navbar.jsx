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
        <NavLink href="#contact">Let's Talk</NavLink>
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
  /* color: #333; */
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
