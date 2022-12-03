import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import Details from "sections/Explorer/Details/Details";
import Hero from "sections/Explorer/Hero";
import Staking from "sections/Explorer/Staking";

function Explorer() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <Navbar />
      </div>

      <div className="mb-20 lg:mb-24">
        <Hero />
      </div>

      <div className="mb-20 lg:mb-24">
        <Staking />
      </div>

      <div className="mb-20 lg:mb-24">
        <Details />
      </div>

      <Footer />
    </div>
  );
}

export default Explorer;
