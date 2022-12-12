import ListIntended from "components/ListIntended";
import Title from "components/Title";
import React from "react";

function WhatIsScriptTV() {
  return (
    <section>
      <div className="container-two">
        {/* <div className="mb-4">
          <Title
            className="text-left font-medium text-primary mb-4 lg:mb-12"
            variant="20"
          >
            1. What is Script Network?
          </Title>

          <img
            src="images/hero-img.png"
            className="mx-auto w-full max-w-[400px]"
            alt=""
          />
        </div> */}

        <div className="research-list">
          <ListIntended
            title="Script TV daily rewards from active users can be used to redeem further rewards including
premium content, upgradable NFTs and more."
          />
          <ListIntended
            title="The core user first product of Script Network is Script TV - a watch to earn platform which uses
an upgradeable NFT mechanism which users have to upgrade, re-charge and enhance to
enhancetheir earnings."
          />
          <ListIntended
            title="Script Network is a dual token economy, comprising of SCPT - for governance, and SPAY -
for payments, transactions and rewards."
          />
          <ListIntended
            title="The company aims to change the way television is viewed for its users, whilst improving the
lives of filmmakers and content owners worldwide through more data, faster payments and more tools."
          />
          <ListIntended
            title="Script TV offers multiple channels with hundreds of hours of shows around the clock, with in-app
gamification where users can enhance their experience, and earn more per day."
          />
          <ListIntended
            title="Script TV daily rewards from active users can be used to redeem further rewards including
premium content, upgradable NFTs and more."
          />
        </div>
      </div>
    </section>
  );
}

export default WhatIsScriptTV;
