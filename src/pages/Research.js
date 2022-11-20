import BlubDivider from "components/BlubDivider";
import BulletPoint from "components/BulletPoint";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import Hero from "sections/Research/Hero";
import UpperPoints from "sections/Research/UpperPoints";
import WhatIsScriptTV from "sections/Research/WhatIsScriptTV";

function Research() {
  return (
    <div>
      <div className="relative z-10">
        <div className="mb-4 sm:mb-6 lg:mb-10 z-50 relative">
          <Navbar />
        </div>

        <div className="mb-8 lg:mb-14">
          <Hero />
        </div>

        <div className="yellow-corner-blob"></div>
      </div>

      <div className="mb-20 lg:mb-24">
        <BlubDivider />
      </div>

      <div className="mb-20 lg:mb-24">
        <UpperPoints />
      </div>

      <div className="mb-20 lg:mb-24">
        <BlubDivider />
      </div>

      <div className="mb-20 lg:mb-24">
        <WhatIsScriptTV />
      </div>

      <Footer />
    </div>
  );
}

export default Research;
