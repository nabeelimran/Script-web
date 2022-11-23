import CordCard from "components/CordCard";
import Title from "components/Title";
import React from "react";

function ScriptTVVideo() {
  return (
    <section>
      <div className="container">
        <div className="mb-8 lg:mb-14">
          <Title>
            Script Tv <span className="text-primary">Video</span> Infrastructure
          </Title>
        </div>

        <div className="w-[200px] xl:w-[253px] h-[200px] xl:h-[253px] bg-primary rounded-full flex items-center justify-center mx-auto mb-10">
          <div className="px-6">
            <p className="text-xl xl:text-2xl text-center font-bold text-black mb-1">
              Metachain
            </p>

            <p className="text-center text-sm xl:text-base text-black mb-2">
              Customize Highly Scable blockchain for your web3 Business
            </p>

            <a
              href="/"
              className="block w-fit mx-auto text-sm underline text-black font-medium"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
          <CordCard
            title="Web3 Video API"
            desc={
              <>
                Lowe youe cost to encode,store <br /> and deliver video
              </>
            }
            linkTitle="Learn more"
          />
          <CordCard
            title="Enterprise Validators"
            desc="Trade your SPAY tokens for real world
products such as festival, events and cinema
tickets through our Script Swap model"
            linkTitle="Learn more"
          />
          <CordCard
            title="Global Edge Network"
            desc="Share bandwidth, storage and
computing to earn rewards."
            linkTitle="Learn more"
          />
          <CordCard
            title="NFTs with DRM"
            desc="Monetize your content and IP
secure with digital rights"
            linkTitle="Learn more"
          />
        </div>
      </div>
    </section>
  );
}

export default ScriptTVVideo;
