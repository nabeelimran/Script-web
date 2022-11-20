import React from "react";

function Hero() {
  return (
    <section>
      <div className="container">
        <div className="max-w-[30rem] xl:max-w-[50rem]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl text-primary font-medium mb-4 xl:mb-6">
            Technology
          </h1>
          <p className="text-base xl:text-2xl text-white">
            Script.tv is pioneering a new paradigm in blockchain design.
            Aminimal Modular consensus layer for rollups.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
