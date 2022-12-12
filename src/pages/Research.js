import BlubDivider from "components/BlubDivider";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Title from "components/Title";
import React from "react";
import CoreTeam from "sections/Research/CoreTeam";
import ExistingProducts from "sections/Research/ExistingProducts";
import Hero from "sections/Research/Hero";
import UpdatedRoadmap from "sections/Research/UpdatedRoadmap";
import UpperPoints from "sections/Research/UpperPoints";
import WatchToEarn from "sections/Research/WatchToEarn";
import WhatIsScriptTV from "sections/Research/WhatIsScriptTV";
import WorkFlow from "sections/Research/WorkFlow";

function Research() {
  return (
    <div>
      <div className="relative z-10">
        <div className="mb-4 sm:mb-6 lg:mb-10 z-50 relative">
          <Navbar />
        </div>

        <div className="mb-14">
          <Hero />
        </div>

        <div className="yellow-corner-blob opacity-60"></div>
      </div>

      <div className="mb-12 lg:mb-16">
        <BlubDivider container="container-two" />
      </div>

      <div className="mb-20 lg:mb-20">
        <div className="container-two">
          <Title
            className="text-left font-medium text-primary mb-4 lg:mb-12"
            variant="20"
          >
            1. What is Script Network?
          </Title>
          <img src="images/our-products.jpg" className="w-full" alt="" />
        </div>
      </div>

      <div className="mb-20 lg:mb-20">
        <UpperPoints />
      </div>

      <div className="mb-20 lg:mb-20">
        <BlubDivider container="container-two" />
      </div>

      <div className="mb-20 lg:mb-20">
        <WhatIsScriptTV />
      </div>

      <div className="mb-20 lg:mb-20">
        <WatchToEarn />
      </div>

      <div className="mb-20 lg:mb-20">
        <ExistingProducts />
      </div>

      <div className="mb-20 lg:mb-20">
        <WorkFlow />
      </div>

      <section className="mb-16 lg:mb-20">
        <div className="container-two">
          <div className="mb-10 lg:mb-16">
            <Title className="text-primary font-medium" variant="20">
              4. Tokens in the Script Network ecosystem
            </Title>
          </div>

          <img src="images/scpt.jpg" className="mb-6" alt="" />
          <img src="images/spay.jpg" alt="" />

          <div className="mt-10">
            {/* <TokenSalesAndEconomics /> */}
            <Title
              className="text-primary text-left font-semibold"
              variant="24"
            >
              Read more about SPAY tokenomics{" "}
              <a
                href="https://whitepaper.script.tv/spay-tokenomics"
                rel="noreferrer"
                target="_blank"
                className="text-blue-link"
              >
                HERE
              </a>
            </Title>
          </div>
        </div>
      </section>

      <div className="mb-20 lg:mb-20">
        <CoreTeam />
      </div>

      <div className="mb-20 lg:mb-20">
        <div className="container-two">
          <div className="mb-10 lg:mb-16">
            <div className="mb-4">
              <Title
                // variant="20"
                className="text-primary text-left font-medium"
              >
                6. Revenue Streams
              </Title>
            </div>
            <p className="heading-sub text-white opacity-60 text-left max-w-[46rem]">
              As an ecosystem, it is important that the there is development
              beyond the reliance of tokens. Thus, Script Network has a multiple
              revenue streams, activated from launch.
            </p>
          </div>
          <img src="images/revenue.jpg" className="w-full" alt="" />
        </div>
      </div>

      {/* <div className="mb-20 lg:mb-20">
        <Roadmap />
      </div> */}

      <div className="mb-20 lg:mb-20">
        <UpdatedRoadmap />
      </div>

      <Footer />
    </div>
  );
}

export default Research;
