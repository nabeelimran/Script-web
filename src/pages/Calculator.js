import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import Hero from "sections/Calculator/Hero";
import Result from "sections/Calculator/Result";
import StakingInformation from "sections/Calculator/StakingInformation";

function Calculator() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 lg:mb-10">
        <Navbar />
      </div>
      <div className="mb-14 lg:mb-24">
        <Hero />
      </div>
      <div className="mb-20 lg:mb-24">
        <StakingInformation />
      </div>
      <div className="mb-20 lg:mb-24">
        <Result />
      </div>
      <Footer />
    </div>
  );
}

export default Calculator;
