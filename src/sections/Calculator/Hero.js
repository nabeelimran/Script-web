import React from "react";

function Hero() {
  return (
    <section className="container">
      <h1
        className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-[50rem] mx-auto mb-6 lg:mb-10"
        style={{ lineHeight: 1.2 }}
      >
        Calculate Your Estimated Earning On{" "}
        <span className="text-primary">Script Network.</span>
      </h1>

      <h4 className="text-center font-semibold text-base lg:text-lg xl:text-2xl text-white">
        Current Circulating Supply: 1000216.0000
      </h4>
    </section>
  );
}

export default Hero;
