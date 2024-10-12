import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <H1>
      mani<span className="dot"></span>
    </H1>
  );
};

export default Logo;

const H1 = styled.h1`
  font-size: 2rem;
  position: relative;
  letter-spacing: -2px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .dot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    bottom: 30%;
    margin-left: 2px;
    animation: colorChange 3s infinite ease-in-out;
  }

  @keyframes colorChange {
    0% {
      background-color: #000;
    }
    33% {
      background-color: #2ddb6d;
    }
    66% {
      background-color: #f41745;
    }
    100% {
      background-color: #081ee0;
    }
  }
`;
