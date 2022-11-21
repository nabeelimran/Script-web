import BlubDivider from "components/BlubDivider";
import BulletPoint from "components/BulletPoint";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import CoreTeam from "sections/Research/CoreTeam";
import ExistingProducts from "sections/Research/ExistingProducts";
import Hero from "sections/Research/Hero";
import Roadmap from "sections/Research/Roadmap";
import TokenSalesAndEconomics from "sections/Research/TokenSalesAndEconomics";
import UpdatedRoadmap from "sections/Research/UpdatedRoadmap";
import UpperPoints from "sections/Research/UpperPoints";
import WatchToEarn from "sections/Research/WatchToEarn";
import WhatIsScriptTV from "sections/Research/WhatIsScriptTV";
import WorkFlow from "sections/Research/WorkFlow";

function Research() {
  return (
    <div>
      <div className="relative z-10">
        <div className="mb-4 sm:mb-6 lg:mb-10 z-50 relative">
          <Navbar />
        </div>

        <div className="mb-14">
          <Hero />
        </div>

        <div className="yellow-corner-blob"></div>
      </div>

      <div className="mb-12 lg:mb-24">
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

      <div className="mb-20 lg:mb-24">
        <WatchToEarn />
      </div>

      <div className="mb-20 lg:mb-24">
        <ExistingProducts />
      </div>

      <div className="mb-20 lg:mb-24">
        <TokenSalesAndEconomics />
      </div>

      <div className="mb-20 lg:mb-24">
        <WorkFlow />
      </div>

      <div className="mb-20 lg:mb-24">
        <CoreTeam />
      </div>

      <div className="mb-20 lg:mb-24">
        <Roadmap />
      </div>

      <div className="mb-20 lg:mb-24">
        <UpdatedRoadmap />
      </div>

      <Footer />
    </div>
  );
}

export default Research;
