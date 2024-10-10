import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import "./LoadingAnimation.style.css"; // Ensure this file has the appropriate styles
import Home from "../../pages/Home";

const LoadingAnimation = () => {
  const counter3Ref = useRef(null); // Using useRef for accessing DOM elements
  const loadingScreenRef = useRef(null); // Ref for loading screen

  // Function to create number elements for counter-3
  const createCounterElements = useCallback(() => {
    const counter3 = counter3Ref.current;

    // Create num divs for counter-3
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

  // Function to animate loaders and counters
  const animateLoadersAndCounters = useCallback(() => {
    const counter3 = counter3Ref.current;

    // Set animation durations
    const loaderDuration = 5; // Duration for loaders
    const counterDuration = 5; // Duration for counters

    // Animate the loaders
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

    // Animate the counters
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

    // Animate each counter
    animateCounter(counter3, counterDuration, 0);
    animateCounter(document.querySelector(".counter-2"), 6);
    animateCounter(document.querySelector(".counter-1"), 2, 4);

    // Final animations
    gsap.to(".loader", {
      background: "none",
      delay: loaderDuration,
      duration: 0.1,
    });

    // Loader transformations
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

    // Scale and rotate the loader before fading out the loading screen
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

    // Fade out loading screen after all animations
    gsap.to(loadingScreenRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: loaderDuration + 1, // Fade out after everything is done
      ease: "power1.inOut",
    });

    // Reveal website content with staggered effect
    gsap.to(".h1", {
      delay: loaderDuration + 1, // Start after the loaders are done
      y: -80,
      ease: "power4.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  }, []);

  // Using useEffect to handle animations when component mounts
  useEffect(() => {
    createCounterElements();
    animateLoadersAndCounters(); // Call to animate loaders and counters
  }, [createCounterElements, animateLoadersAndCounters]);

  return (
    <>
      <Home />
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
    </>
  );
};

export default LoadingAnimation;
