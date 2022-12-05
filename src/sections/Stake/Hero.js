import NodesChart from "components/NodesChart";
import React from "react";

function Hero() {
  return (
    <section className="container">
      <div className="flex items-center justify-center border-1px border-dashed border-primary rounded-lg py-6 md:py-8 xl:py-10 px-16">
        <NodesChart className="w-[100px] md:w-[120px] xl:w-[157px]" />
      </div>
    </section>
  );
}

export default Hero;
