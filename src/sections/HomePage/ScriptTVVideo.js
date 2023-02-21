import CordCard from "components/CordCard";
import MetachainCircle from "components/MetachainCircle";
import Title from "components/Title";
import React from "react";

function ScriptTVVideo() {
  return (
    <section>
      <div className="container">
        <div className="mb-8 lg:mb-14">
          <Title>
            Script TV <span className="text-primary">Video</span> Infrastructure
          </Title>
        </div>

        <div className="grid md:grid-cols-2 gap-6 xl:gap-8 relative">
          <MetachainCircle />

          <CordCard
            title="Video Advertising Layer"
            desc="First on chain payment protocol for advertisers - pay for ads through SCPT tokens"
            linkTitle="Learn more"
          />
          <CordCard
            title="Utility beyond Blockchain"
            desc="Collect ScriptGlasses and SPAY through being active in the ecosystem, and swap /burn them for real life experiences including cinema tickets and events."
            linkTitle="Learn more"
          />
          <CordCard
            title="Script Node Network"
            desc="Contribute to computing data, transcoding and sharing bandwidth - and earn exciting rewards whilst doing so"
            linkTitle="Learn more"
          />
          <CordCard
            title="Content Layer (NFTs)"
            desc="For the first time ever, create NFT experiences for viewers live, including spontaneous drops, rewards and access. "
            linkTitle="Learn more"
          />
        </div>
      </div>
    </section>
  );
}

export default ScriptTVVideo;
