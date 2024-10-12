import React, { createContext, useContext, useState, useEffect } from "react";

const BackgroundColorContext = createContext();

export const BackgroundColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState("#FAFAF9");
  const [textColor, setTextColor] = useState("#000");
  const [transitionDuration, setTransitionDuration] = useState("0.3s"); 


  return (
    <BackgroundColorContext.Provider
      value={{
        bgColor,
        textColor,
        transitionDuration, 
        setBgColor,
        setTextColor,
        setTransitionDuration, 
      }}
    >
      {children}
    </BackgroundColorContext.Provider>
  );
};

export const useBackgroundColor = () => {
  return useContext(BackgroundColorContext);
};
