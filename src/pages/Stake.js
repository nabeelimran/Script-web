import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import Hero from "sections/Stake/Hero";
import ScriptNodes from "sections/Stake/ScriptNodes";

function Stake() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      <div className="yellow-corner-blob opacity-40" />

      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <Navbar />
      </div>

      <main className="flex-1">
        <div className="mb-10 lg:mb-20">
          <Hero />
        </div>

        <div className="mb-20 lg:mb-24">
          <ScriptNodes />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Stake;
