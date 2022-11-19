import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import CordCutting from "sections/HomePage/CordCutting";
import GreatTeam from "sections/HomePage/GreatTeam";
import Hero from "sections/HomePage/Hero";
import JoinOurCommunity from "sections/HomePage/JoinOurCommunity";
import Roadmap from "sections/HomePage/Roadmap";
import ScriptTVVideo from "sections/HomePage/ScriptTVVideo";
import Television from "sections/HomePage/Television";

function HomePage() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 lg:mb-10">
        <Navbar />
      </div>
      <div className="mb-12 lg:mb-24">
        <Hero />
      </div>
      <div className="mb-12 lg:mb-24">
        <CordCutting />
      </div>
      <div className="mb-12 lg:mb-24">
        <Television />
      </div>
      <div className="mb-12 lg:mb-24">
        <ScriptTVVideo />
      </div>
      <div className="mb-12 lg:mb-24">
        <GreatTeam />
      </div>
      <div className="mb-12 lg:mb-24">
        <Roadmap />
      </div>
      <div className="mb-12 lg:mb-24">
        <JoinOurCommunity />
      </div>
      <div className="mb-12 lg:mb-24"></div>
      <Footer />
    </div>
  );
}

export default HomePage;
