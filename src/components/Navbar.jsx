import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsRendered(false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        setIsRendered(true);
      }, 300);
    } else {
      setIsRendered(false);
    }
  };

  return (
    <Nav className="global-container">
      <Logo />

      {isMobile && (
        <HamburgerButton
          onClick={toggleMenu}
          className={isOpen ? "active" : ""}
        >
          <svg viewBox="0 0 100 100" width="40">
            <path className="line top" d="m 30,33 h 40" />
            <path className="line middle" d="m 30,50 h 40" />
            <path className="line bottom" d="m 30,67 h 40" />
          </svg>
        </HamburgerButton>
      )}

      {isMobile ? (
        isOpen &&
        isRendered && (
          <MobileNavLinks>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <Button href="#contact">Let's Talk</Button>
          </MobileNavLinks>
        )
      ) : (
        <DesktopNavLinks>
          <NavLink href="#about">
            About <Underline />{" "}
          </NavLink>
          <NavLink href="#skills">
            Skills <Underline />
          </NavLink>
          <NavLink href="#projects">
            Projects <Underline />
          </NavLink>
          <Button href="#contact">
            Let's Talk <Underline />
          </Button>
        </DesktopNavLinks>
      )}

      <BackgroundCircle className={isOpen ? "open" : ""} />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MobileNavLinks = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  a {
    padding: 0.5rem;
    text-decoration: none;
    font-size: 1.2rem;
  }
`;

const DesktopNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  a {
    text-decoration: none;
    font-size: 1rem;
  }
`;

const NavLink = styled.a`
  position: relative;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;

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
  margin-top: 1.55rem;
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

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;
  display: none;

  svg {
    width: 40px;
    height: 40px;
  }

  .line {
    fill: none;
    stroke: #000;
    stroke-width: 5.5;
    stroke-linecap: round;
  }

  .top {
    stroke-dasharray: 40 139;
  }

  .middle {
    stroke-dasharray: 40 139;
  }

  .bottom {
    stroke-dasharray: 20 180;
    stroke-dashoffset: -20px;
  }

  &.active {
    transform: rotate(45deg);

    .line {
      stroke: #fff !important;
    }

    .top {
      stroke: #fff;
      stroke-dashoffset: -98px;
    }

    .bottom {
      stroke: #fff;
      stroke-dashoffset: -138px;
    }
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const BackgroundCircle = styled.div`
  width: 80px;
  height: 80px;
  background: #000;
  position: fixed;
  top: 1rem;
  right: 1rem;
  border-radius: 50%;
  z-index: 1;
  transform: scale(0);
  transition: transform 1.5s ease-in-out;

  &.open {
    transform: scale(25);
  }
`;
