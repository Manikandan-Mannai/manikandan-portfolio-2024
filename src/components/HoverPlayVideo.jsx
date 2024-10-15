import React, { useRef } from "react";
import Genesis from "../assets/videos/Genesis.mov";
import KL from "../assets/videos/K&L.mov";
import Taxi from "../assets/videos/Taxi.mov";

const HoverPlayVideo = () => {
  // Create references for each video element
  const videoRefs = {
    genesis: useRef(null),
    kl: useRef(null),
    taxi: useRef(null),
  };

  // Function to handle mouse hover (play video)
  const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
  };

  // Function to handle mouse leave (pause and reset video)
  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Reset video to the start
  };

  return (
    <>
      <div>
        <video
          ref={videoRefs.genesis}
          src={Genesis}
          width="800"
          muted
          onMouseEnter={() => handleMouseEnter(videoRefs.genesis)}
          onMouseLeave={() => handleMouseLeave(videoRefs.genesis)}
          loop
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>
        <video
          ref={videoRefs.kl}
          src={KL}
          width="300"
          muted
          onMouseEnter={() => handleMouseEnter(videoRefs.kl)}
          onMouseLeave={() => handleMouseLeave(videoRefs.kl)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>
        <video
          ref={videoRefs.taxi}
          src={Taxi}
          width="300"
          muted
          onMouseEnter={() => handleMouseEnter(videoRefs.taxi)}
          onMouseLeave={() => handleMouseLeave(videoRefs.taxi)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
};

export default HoverPlayVideo;
