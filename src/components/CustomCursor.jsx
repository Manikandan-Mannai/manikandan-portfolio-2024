import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CustomCursor = () => {
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
    <CursorDot style={{ left: `${position.x}px`, top: `${position.y}px` }} />
  );
};

export default CustomCursor;

const CursorDot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(107, 114, 128, 0.2);
  border: 2px solid #71717a;
  border-radius: 100%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;


