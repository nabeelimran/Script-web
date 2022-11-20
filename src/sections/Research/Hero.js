import Title from "components/Title";
import React from "react";

function Hero() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center space-x-6 justify-center mb-10">
          <img src="images/bitcoin.png" className="max-w-[70px]" alt="" />
          <Title className="text-left font-medium">
            ScriptGLASS + The Script Payment Token (SPAY)
          </Title>
        </div>

        <h2 className="text-center text-white text-2xl font-medium mb-8">
          The NFT collection supporting the reward system in Script Network
        </h2>
        <h2 className="text-center text-white text-2xl font-medium">
          November 5th 2022
        </h2>
      </div>
    </section>
  );
}

export default Hero;
