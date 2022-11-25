import Title from "components/Title";
import React from "react";

function Hero() {
  return (
    <section>
      <div className="container-two">
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 justify-center mb-6">
          {/* <img
            src="images/logo.svg"
            className="w-[100px] md:w-[120px] xl:w-[160px]"
            alt=""
          /> */}
          <img
            src="images/logos/script-tv-logo.svg"
            className="w-[50px] xl:w-[50px]"
            alt=""
          />
          <Title className="text-center lg:text-left font-medium" variant="30">
            ScriptGLASS + The Script Payment Token (SPAY)
          </Title>
        </div>

        <h2 className="text-center text-white fs-18px font-medium mb-5 lg:mb-6 xl:mb-8">
          The NFT collection supporting the reward system in Script Network
        </h2>
        <h2 className="text-center text-white fs-16px font-medium">
          November 5th 2022
        </h2>
      </div>
    </section>
  );
}

export default Hero;
