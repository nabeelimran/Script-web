import React from "react";

function Hero({
  totalSCPTVal
}) {
  return (
    <section className="container">
      <h1
        className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl max-w-[18em] mx-auto mb-6 lg:mb-10"
        style={{ lineHeight: 1.4 }}
      >
        Calculate Your Estimated Earning On{" "}
        <span className="text-primary">Script Network.</span>
      </h1>

      <h4 className="text-center font-semibold fs-18px text-white">
        Current Circulating Supply: {totalSCPTVal}
      </h4>
    </section>
  );
}

export default Hero;
