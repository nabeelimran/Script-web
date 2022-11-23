import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import CordCutting from "sections/HomePage/CordCutting";
import GreatTeam from "sections/HomePage/GreatTeam";
import Hero from "sections/HomePage/Hero";
import JoinOurCommunity from "sections/HomePage/JoinOurCommunity";
import PartnersSlider from "sections/HomePage/PartnersSlider";
import Roadmap from "sections/HomePage/Roadmap";
import ScriptTVVideo from "sections/HomePage/ScriptTVVideo";
import Start from "sections/HomePage/Start";
import Television from "sections/HomePage/Television";

function HomePage() {
  return (
    <div>
      <div className="relative z-10">
        <img
          src="images/yellow-blob.png"
          className="absolute -top-1/2 -left-[40%] -z-10"
          alt=""
        />

        <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
          <Navbar />
        </div>
        <div className="mb-12 lg:mb-24 z-20">
          <Hero />
        </div>
      </div>
      <div className="mb-20 lg:mb-24">
        <PartnersSlider />
      </div>
      <div className="mb-20 lg:mb-24">
        <CordCutting />
      </div>
      <div className="mb-20 lg:mb-24">
        <Television />
      </div>
      <div className="mb-20 lg:mb-24">
        <ScriptTVVideo />
      </div>
      <div className="mb-20 lg:mb-24">
        <GreatTeam />
      </div>
      <div className="mb-20 lg:mb-24">
        <Roadmap />
      </div>
      <div className="mb-20 lg:mb-40">
        <JoinOurCommunity />
      </div>
      <div className="mb-20 lg:mb-24">
        <Start />
      </div>
      <Footer container="container" />
    </div>
  );
}

export default HomePage;
