import CordCard from "components/CordCard";
import Title from "components/Title";
import React from "react";

function CordCutting() {
  return (
    <div>
      <div className="container">
        <div className="mb-12 sm:mb-16 xl:mb-20">
          <div className="mb-5">
            <Title>
              The cord cutting,{" "}
              <span className="text-primary">Live TV Experience</span>{" "}
              <br className="hidden sm:block" /> you have been waiting for.
            </Title>
          </div>

          <p className="heading-sub text-center text-white opacity-50">
            Here is just some of the things you can do on Script Network
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 xl:gap-8">
          <CordCard
            title="Earn"
            desc="Multi level reward model – content partners, advertisers, viewers and lightning nodes all can earn rewards daily."
          />
          <CordCard
            title="Trade"
            desc="Trade your SPAY tokens for real world products such as festival, events and tickets through our Script Swap model"
          />
          <CordCard
            title="Upgradeable NFTs"
            desc="Use the game changing ScriptGLASS to your benefit - re-charge, level up and add gems to your glasses to enhance your daily rewards"
          />
          <CordCard
            title="Live chat"
            desc="Join clubs and complete achievements and get rewarded for it."
          />
        </div>
      </div>
    </div>
  );
}

export default CordCutting;
