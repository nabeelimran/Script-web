import Footer from "components/Footer";
import TvNavbar from "components/TvNavbar";
import React, { useEffect } from "react";
import Collect from "sections/Rewards/Collect";
import DailyTasks from "sections/Rewards/DailyTasks";
import Hero from "sections/Rewards/Hero";

function Rewards() {
  return (
    <div>
      {/* <div className="mb-4 sm:mb-6 relative z-50">
        <TvNavbar />
      </div> */}

      <div className="mb-16 lg:mb-20 mt-5">
        <Hero />
      </div>

      <div className="mb-14">
        <Collect />
      </div>

      <div className="mb-16 lg:mb-20">
        <DailyTasks />
      </div>

      <Footer />
    </div>
  );
}

export default Rewards;
