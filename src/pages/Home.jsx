import React from "react";
import AboutMe from "../components/AboutMe";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";

const Home = () => {

  return (
    <>
      <Navbar />
      <HomeContent />
      <AboutMe />
    </>
  );
};

export default Home;
