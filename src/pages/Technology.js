import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import Content from "sections/Technology/Content";
import Hero from "sections/Technology/Hero";
import Multi from "sections/Technology/Multi";
import OurVideo from "sections/Technology/OurVideo";
import JoinOurCommunity from "sections/HomePage/JoinOurCommunity";

function Technology() {
  return (
    <div>
      <div className="relative z-10">
        <div className="mb-4 sm:mb-6 lg:mb-10 z-50 relative">
          <Navbar />
        </div>

        <div className="mb-20 lg:mb-12">
          <Hero />
        </div>

        <div className="yellow-corner-blob"></div>
      </div>

      <div className="mb-24 lg:mb-0">
        <OurVideo />
      </div>

      <div className="mb-24 lg:mb-16">
        <Multi />
      </div>

      <div className="mb-16 lg:mb-24">
        <Content />
      </div>

      <div className="mb-20 lg:mb-24" id="homepage-community-section">
        <JoinOurCommunity />
      </div>

      <Footer />
    </div>
  );
}

export default Technology;
