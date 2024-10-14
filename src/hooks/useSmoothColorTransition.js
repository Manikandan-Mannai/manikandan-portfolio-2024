import { useEffect } from "react";
import { gsap } from "gsap";

const useSmoothColorTransition = (isScrolled, bgColor, textColor) => {
  useEffect(() => {
    gsap.to(".global-container", {
      backgroundColor: isScrolled ? "#000" : bgColor,
      color: isScrolled ? "#fff" : textColor,
      duration: 0.6,
      ease: "power1.inOut",
    });
  }, [isScrolled, bgColor, textColor]);
};

export default useSmoothColorTransition;
