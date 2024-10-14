import React, { createContext, useContext, useState } from "react";

const BackgroundColorContext = createContext();

export const BackgroundColorProvider = ({ children }) => {
  // Default colors
  const [bgColor, setBgColor] = useState("#fff"); // Default background color
  const [textColor, setTextColor] = useState("#000"); // Default text color

  // Function to reset to default colors
  const resetColors = () => {
    setBgColor("#fff");
    setTextColor("#000");
  };

  // Function to set dark mode
  const setDarkColors = () => {
    setBgColor("#000");
    setTextColor("#fff");
  };

  return (
    <BackgroundColorContext.Provider
      value={{ bgColor, textColor, setDarkColors, resetColors }}
    >
      {children}
    </BackgroundColorContext.Provider>
  );
};

export const useBackgroundColor = () => useContext(BackgroundColorContext);
