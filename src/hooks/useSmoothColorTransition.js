import { useEffect } from "react";
import { gsap } from "gsap";

const useSmoothColorTransition = (isScrolled, bgColor, textColor) => {
  useEffect(() => {
    gsap.to(".animated-border", {
      border: isScrolled ? "2px solid white" : "2px solid black",
      backgroundColor: isScrolled ? "#1E1F1F" : bgColor,
      color: isScrolled ? "#fff" : textColor,
      boxShadow: isScrolled
        ? "6px 6px 0px 0px rgba(255, 255, 255, 1)"
        : "6px 6px 0px 0px rgba(0, 0, 0, 0.75)",
      duration: 0.6,
      ease: "power1.inOut",
    });

    gsap.to(".global-container", {
      backgroundColor: isScrolled ? "#000" : bgColor,
      color: isScrolled ? "#fff" : textColor,

      duration: 0.6,
      ease: "power1.inOut",
    });
  }, [isScrolled, bgColor, textColor]);
};

export default useSmoothColorTransition;
