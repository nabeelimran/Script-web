import ArrowButton from "components/ArrowButton";
import Button from "components/Button";
import EconomyAvatar from "components/EconomyAvatar";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="container grid lg:grid-cols-2 gap-14">
        <div className="text-center lg:text-left relative z-10">
          <h5 className="text-primary mb-4 font-semibold fs-16px">
            Powering Live TV and Film for the next generation.
          </h5>
          <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl lh-1_2 mb-6 max-w-[30rem] lg:max-w-none mx-auto">
            Watch To Earn Live TV Decentralised On Chain,{" "}
            <span className="text-primary">For Free</span>
          </h1>

          <img
            src="images/hero-img.png"
            className="w-full block lg:hidden max-w-[26rem] mx-auto"
            alt=""
          />

          <p className="fs-18px text-white opacity-50 font-normal mb-10 xl:mb-12">
            24/7 live television on chain. Earn rewards whilst you watch through
            gameFi and socialFi elements.Join and start earning in minutes!
            Built on Script infrastructure, on Script blockchain.
          </p>

          <div className="flex items-center space-x-5 lg:space-x-7 mb-8 justify-center lg:justify-start">
            <Button label="Whitepapper" />
            <Button label="Launch app" variant={2} arrowVisible={true} />
          </div>

          <p className="fs-16px font-medium text-white mb-9">
            <span className="opacity-50">Already using script.tv?</span>{" "}
            <a href="/" className="text-primary">
              Sign in
            </a>
          </p>

          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 items-stretch justify-center lg:justify-start">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 justify-center sm:justify-start space-y-4 sm:space-y-0">
              <div className="flex -space-x-4 xl:-space-x-7">
                <EconomyAvatar img="images/avatar-1.png" className="z-30" />
                <EconomyAvatar img="images/avatar-2.png" className="z-20" />
                <EconomyAvatar img="images/avatar-3.png" className="z-10" />
              </div>
              <div>
                <p className="text-white font-medium fs-20px mb-1">150,000+</p>
                <p className="text-sm text-white opacity-50">
                  Part of the ecoy <br /> stem pre launch
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-[50%] mx-auto sm:w-[2px] h-[2px] sm:h-[90%] bg-white opacity-50"></div>
            </div>
            <div>
              <p className="text-white font-medium fs-20px mb-1">24/7/365+</p>
              <p className="text-sm text-white opacity-50">
                Television for free
              </p>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:block">
          <div className="relative z-20">
            <div className="yellow-center-blob -z-20 w-[200px] h-[200px] blur-[140px]"></div>

            <img
              src="images/hero-img.png"
              className="w-full hidden lg:block -z-20 relative"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
