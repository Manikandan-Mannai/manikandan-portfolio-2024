import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Typed from "typed.js";

const TypingComponent = ({ strings }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 150,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return (
    <>
      <Word ref={typedRef}></Word>
    </>
  );
};

const Word = styled.span`
  color: hsl(0, 0%, 50%);
`;

export default TypingComponent;
