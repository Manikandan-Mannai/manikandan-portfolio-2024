import React from "react";
import AboutMe from "../components/AboutMe";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import BioSummary from "../components/BioSummary";
import { BackgroundColorProvider } from "../context/BackgroundColorContext";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <BackgroundColorProvider>
      <Navbar />
      <HomeContent />
      <AboutMe />
      <BioSummary />
      <Experience/>
    </BackgroundColorProvider>
  );
};

export default Home;
