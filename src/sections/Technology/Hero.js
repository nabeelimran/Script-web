import React from "react";

function Hero() {
  return (
    <section>
      <div className="container-two">
        <div className="max-w-[30rem] xl:max-w-[40rem]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-medium mb-4 xl:mb-6">
            Script Technology
          </h1>
          <p className="fs-20px text-white">
            Script.tv is pioneering a new paradigm in blockchain design.
            Aminimal Modular consensus layer for rollups.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
