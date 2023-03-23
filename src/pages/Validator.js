import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import BecomeValidator from "sections/Validator/BecomeValidator";
import Blockchain from "sections/Validator/Blockchain";
import Comparing from "sections/Validator/Comparing";
import Hero from "sections/Validator/Hero";
import ScriptNetwork from "sections/Validator/ScriptNetwork";

function Validator() {
  return (
    <div>
      <div className="relative z-10">
        <div className="mb-4 sm:mb-6 lg:mb-10 z-50 relative">
          <Navbar />
        </div>

        <div className="mb-20 lg:mb-24">
          <Hero />
        </div>

        <div className="yellow-corner-blob"></div>
      </div>

      <div className="mb-20 lg:mb-20">
        <ScriptNetwork />
      </div>
      <div className="mb-20 lg:mb-24">
        <BecomeValidator />
      </div>
      <div className="mb-20 lg:mb-24">
        <Blockchain />
      </div>
      {/* <div className="mb-20 lg:mb-24">
        <Comparing />
      </div> */}
      <Footer container="container" />
    </div>
  );
}

export default Validator;
