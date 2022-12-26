import Footer from "components/Footer";
import TvNavbar from "components/TvNavbar";
import React from "react";
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

      <div className="container">
        <h4 className="text-xl mb-4">Tip Of the Day</h4>
        <div className="bg-[#0e0e0f] py-5 px-5 rounded">
          <p className="text-lg">Be Yourself and have a Fun</p>
          <p className="py-3 w-2/3">
            People come to Twich to see you. Try to be yourself, have fun and
            enjoy the process. The biggest advantures start with smallest if it
            take time to get your first viewers, its part of the process.
          </p>
          <a href="#" className="text-[#3c58ed]">
            What is useful ?
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rewards;
