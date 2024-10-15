import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../assets/images/up-arrow.png";

const CustomCursor = ({ isHovering }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <CursorDot
      isHovering={isHovering}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {isHovering && <Icon src={ArrowIcon} alt="Arrow" />}
    </CursorDot>
  );
};

export default CustomCursor;

const CursorDot = styled.div`
  position: fixed;
  background-color: rgba(107, 114, 128, 0.2);
  border: 3px solid #71717a;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isHovering }) => (isHovering ? "80px" : "15px")};
  height: ${({ isHovering }) => (isHovering ? "80px" : "15px")};
  transition: width 0.2s ease, height 0.2s ease;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  transform: rotate(35deg);
`;
