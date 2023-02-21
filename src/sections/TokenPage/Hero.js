import React from "react";

function Hero() {
  return (
    <div className="container">
      <h1
        className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl max-w-[18em] mx-auto"
        style={{ lineHeight: 1.4 }}
      >
        Introducing Two Tokens For Governance and Utility To Our Network{" "}
        <span className="text-primary"> - SCPT and SPAY</span>
      </h1>
    </div>
  );
}

export default Hero;
