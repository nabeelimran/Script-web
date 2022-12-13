import { Icon } from "@iconify/react";
import HowToEarnCard from "components/HowToEarnCard";
import Title from "components/Title";
import React from "react";

function HowToEarn() {
  return (
    <section className="container">
      <div className="mb-10 lg:mb-14">
        <Title>
          How to Earn on <span className="text-primary">Script Network</span>
        </Title>
      </div>

      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <HowToEarnCard
          img="images/tv/earn-1.svg"
          title="Mint a ScriptGLASS"
          desc="No upfront costs - create and account and mint a ScriptGLASS NFT in seconds! Each one completely unique and your pass to earn daily rewards."
        />
        <div className="flex items-center justify-center text-xl xl:text-3xl">
          <Icon
            icon="material-symbols:arrow-right-alt-rounded"
            className="rotate-90 lg:rotate-0"
          />
        </div>
        <HowToEarnCard
          img="images/tv/earn-2.svg"
          title="Watch TV"
          desc="Upgrade your glasses, and watch from multiple channels 24/7/365, whilst connecting with other users, and get rewarded for doing so."
        />
        <div className="flex items-center justify-center text-xl xl:text-3xl">
          <Icon
            icon="material-symbols:arrow-right-alt-rounded"
            className="rotate-90 lg:rotate-0"
          />
        </div>
        <HowToEarnCard
          img="images/tv/earn-3.svg"
          title="Stake and Run Nodes"
          desc="Help secure and scale the future of Script Network and its ecosystem by staking your tokens, or running a node - both with significant reward opportunities."
        />
      </div>
    </section>
  );
}

export default HowToEarn;
