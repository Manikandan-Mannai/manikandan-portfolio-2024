import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import "./LoadingAnimation.style.css";

const LoadingAnimation = ({ onLoadingComplete }) => {
  const counter3Ref = useRef(null);
  const loadingScreenRef = useRef(null);

  const createCounterElements = useCallback(() => {
    const counter3 = counter3Ref.current;

    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);
  }, []);

  const animateLoadersAndCounters = useCallback(() => {
    const counter3 = counter3Ref.current;

    const loaderDuration = 5;
    const counterDuration = 5;

    gsap.fromTo(
      ".loader-1",
      { width: 0 },
      { width: "200px", duration: loaderDuration, ease: "power2.inOut" }
    );
    gsap.fromTo(
      ".loader-2",
      { width: 0 },
      {
        width: "100px",
        duration: loaderDuration + 1,
        ease: "power2.inOut",
        delay: 1,
      }
    );

    const animateCounter = (counter, duration, delay = 0) => {
      const numHeight = counter.querySelector(".num").clientHeight;
      const totalDistance =
        (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    };

    animateCounter(counter3, counterDuration, 0);
    animateCounter(document.querySelector(".counter-2"), 6);
    animateCounter(document.querySelector(".counter-1"), 2, 4);

    gsap.to(".loader", {
      background: "none",
      delay: loaderDuration,
      duration: 0.1,
    });

    gsap.to(".loader-1", {
      rotate: 90,
      y: -50,
      duration: 0.5,
      delay: loaderDuration,
    });

    gsap.to(".loader-2", {
      x: -75,
      y: 75,
      duration: 0.5,
      delay: loaderDuration,
    });

    gsap.to(".loader", {
      scale: 40,
      duration: 1,
      delay: loaderDuration + 0.5,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      rotate: 45,
      y: 500,
      x: 2000,
      duration: 1,
      delay: loaderDuration + 0.5,
      ease: "power2.inOut",
    });

    gsap.to(loadingScreenRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: loaderDuration + 1,
      ease: "power1.inOut",
      onComplete: onLoadingComplete, 
    });

    gsap.to(".h1", {
      delay: loaderDuration + 1,
      y: -80,
      ease: "power4.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  }, [onLoadingComplete]);

  useEffect(() => {
    createCounterElements();
    animateLoadersAndCounters();
  }, [createCounterElements, animateLoadersAndCounters]);

  return (
    <div className="loading-animation">
      <div className="loading-screen" ref={loadingScreenRef}>
        <div className="loader">
          <div className="loader-1 bar"></div>
          <div className="loader-2 bar"></div>
        </div>
        <div className="counter">
          <div className="counter-1 digit">
            <div className="num">0</div>
            <div className="num num-offset1">1</div>
          </div>
          <div className="counter-2 digit">
            <div className="num">0</div>
            <div className="num num1">1</div>
            <div className="num num-offset1">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          <div className="counter-3 digit" ref={counter3Ref}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
