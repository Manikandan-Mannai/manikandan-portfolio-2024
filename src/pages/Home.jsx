import React from "react";
import AboutMe from "../components/AboutMe";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import BioSummary from "../components/BioSummary";
import { BackgroundColorProvider } from "../context/BackgroundColorContext";
import Experience from "../components/Experience";
import Services from "../components/Services";

const Home = () => {
  return (
    <BackgroundColorProvider>
      <Navbar />
      <HomeContent />
      <AboutMe />
      <BioSummary />
      <Experience/>
      <Project/>
      <Services/>
    </BackgroundColorProvider>
  );
};

export default Home;
