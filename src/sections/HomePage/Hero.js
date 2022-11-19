import ArrowButton from "components/ArrowButton";
import Button from "components/Button";
import EconomyAvatar from "components/EconomyAvatar";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="container grid grid-cols-2 gap-14">
        <div>
          <h5 className="text-primary mb-4 font-semibold text-2xl">
            Powering Live TV and Film for the next generation.
          </h5>
          <h1 className="text-white font-semibold text-6xl lh-1_2 mb-6">
            Watch To Earn Live TV Decentralised On Chain,{" "}
            <span className="text-primary">For Free</span>
          </h1>

          <p className="text-2xl text-white opacity-50 font-normal mb-12">
            24/7 live television on chain. Earn rewards whilst you watch through
            gameFi and socialFi elements.Join and start earning in minutes!
            Built on Script infrastructure, on Script blockchain.
          </p>

          <div className="flex items-center space-x-7 mb-8">
            <Button label="Whitepapper" />
            <ArrowButton label="Launch app" />
          </div>

          <p className="text-xl font-medium text-white mb-9">
            <span className="opacity-50">Already using script.tv?</span>{" "}
            <a href="/" className="text-primary">
              Sign in
            </a>
          </p>

          <div className="flex space-x-8 items-stretch">
            <div className="flex space-x-6">
              <div className="flex -space-x-7">
                <EconomyAvatar img="images/avatar-1.png" className="z-30" />
                <EconomyAvatar img="images/avatar-2.png" className="z-20" />
                <EconomyAvatar img="images/avatar-3.png" className="z-10" />
              </div>
              <div>
                <p className="text-white font-medium text-4xl mb-1">150,000+</p>
                <p className="text-xl text-white opacity-50">
                  Part of the ecoy <br /> stem pre launch
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-[2px] h-[90%] bg-white opacity-50"></div>
            </div>
            <div>
              <p className="text-white font-medium text-4xl mb-1">24/7/365+</p>
              <p className="text-xl text-white opacity-50">
                Television for free
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="images/hero-img.png" className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
