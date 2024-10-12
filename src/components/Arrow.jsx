import React from "react";
import styled, { keyframes } from "styled-components";

const mouseWheelAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(6px);
  }
`;

const mouseScrollAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const MouseScrollContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 100px;
`;

const Arrow = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  margin: 0 0 3px 4px;

  &.unu {
    animation: ${mouseScrollAnimation} 1s infinite;
    animation-delay: 0.1s;
    animation-direction: alternate;
    margin-top: 1px;
  }

  &.doi {
    animation: ${mouseScrollAnimation} 1s infinite;
    animation-delay: 0.2s;
    animation-direction: alternate;
    margin-top: -6px;
  }

  &.trei {
    animation: ${mouseScrollAnimation} 1s infinite;
    animation-delay: 0.3s;
    animation-direction: alternate;
    margin-top: -6px;
  }
`;

const Mouse = styled.div`
  height: 42px;
  width: 24px;
  border-radius: 14px;
  border: 2px solid black;
  top: 100px;
  position: relative;
`;

const Wheel = styled.div`
  height: 4px;
  width: 4px;
  display: block;
  margin: 5px auto;
  background: black;
  position: relative;
  border: 2px solid black;
  border-radius: 8px;
  animation: ${mouseWheelAnimation} 0.6s linear infinite;
`;

const MouseScroll = () => {
  return (
    <MouseScrollContainer className="mouse_scroll">
      <Mouse className="mouse">
        <Wheel className="wheel" />
      </Mouse>
      <div>
        <Arrow className="m_scroll_arrows unu" />
        <Arrow className="m_scroll_arrows doi" />
        <Arrow className="m_scroll_arrows trei" />
      </div>
    </MouseScrollContainer>
  );
};

export default MouseScroll;
