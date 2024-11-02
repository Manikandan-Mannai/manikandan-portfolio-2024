import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isDelayed, setIsDelayed] = useState(false);

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
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setIsDelayed(true);
      }, 800);
    } else {
      setIsDelayed(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 800);
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
          {isOpen && isDelayed ? (
            <CloseIcon className="icon" />
          ) : (
            <MenuIcon className="icon" />
          )}
        </HamburgerButton>
      )}

      {isMobile ? (
        <MobileNavLinks isOpen={isOpen} isDelayed={isDelayed}>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <Button href="#contact">Let's Talk</Button>
        </MobileNavLinks>
      ) : (
        <DesktopNavLinks>
          <NavLink href="#about">
            About <Underline />
          </NavLink>
          <NavLink href="#experience">
            Experience <Underline />
          </NavLink>
          <NavLink href="#projects">
            Projects <Underline />
          </NavLink>
          <NavLink href="#services">
            Services <Underline />
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

const MobileNavLinks = styled.div.attrs(({ isDelayed }) => ({
  style: {
    opacity: isDelayed ? 1 : 0,
    visibility: isDelayed ? "visible" : "hidden",
  },
}))`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;

  a {
    padding: 0.5rem;
    text-decoration: none;
    font-size: 1.2rem;
    color: #fff;
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
  z-index: 999;
  position: relative;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 999 !important;
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

  .icon {
    width: 40px;
    height: 40px;
    color: #000;
    transition: color 0.3s ease;
  }

  &.active .icon {
    color: #fff;
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

// const HamburgerButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 20;
//   display: none;

//   svg {
//     width: 40px;
//     height: 40px;
//   }

//   .line {
//     fill: none;
//     stroke: #000;
//     stroke-width: 5.5;
//     stroke-linecap: round;
//   }

//   .top {
//     stroke-dasharray: 40 139;
//   }

//   .middle {
//     stroke-dasharray: 40 139;
//   }

//   .bottom {
//     stroke-dasharray: 20 180;
//     stroke-dashoffset: -20px;
//   }

//   .hide {
//     display: none;
//   }

//   &.active {
//     transform: rotate(45deg);

//     .line {
//       stroke: #fff !important;
//     }

//     .top {
//       stroke: #fff;
//       stroke-dashoffset: 198px;
//     }

//     .bottom {
//       stroke: #fff;
//       stroke-dashoffset: -138px;
//     }
//   }

//   @media (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 1rem;
//     right: 1rem;
//   }
// `;

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
