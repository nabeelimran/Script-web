import BulletPoint from "components/BulletPoint";
import Title from "components/Title";
import React from "react";

function WhatIsScriptTV() {
  return (
    <section>
      <div className="container">
        <div className="mb-16">
          <Title className="text-left font-medium text-primary mb-12">
            1. What is Script Network?
          </Title>

          <img
            src="images/hero-img.png"
            className="mx-auto max-w-[624px]"
            alt=""
          />
        </div>

        <div className="space-y-8 mb-14">
          <BulletPoint
            point="Script TV daily rewards from active users can be used to redeem further rewards including
premium content, upgradable NFTs and more."
          />
          <BulletPoint
            point="The core user first product of Script Network is Script TV - a watch to earn platform which uses
an upgradeable NFT mechanism which users have to upgrade, re-charge and enhance to
enhancetheir earnings."
          />
          <BulletPoint
            point="Script Network is a dual token economy, comprising of SCPT - for governance, and SPAY -
for payments, transactions and rewards."
          />
          <BulletPoint
            point="The company aims to change the way television is viewed for its users, whilst improving the
lives of filmmakers and content owners worldwide through more data, faster payments and more tools."
          />
          <BulletPoint
            point="Script TV offers multiple channels with hundreds of hours of shows around the clock, with in-app
gamification where users can enhance their experience, and earn more per day."
          />
          <BulletPoint
            point="Script TV daily rewards from active users can be used to redeem further rewards including
premium content, upgradable NFTs and more."
          />
          <BulletPoint point="" />
        </div>

        <Title className="text-left font-medium text-primary mb-16">
          2. Watch-to-earn with online watch TV online and get paid rewards per
          block
        </Title>

        <div className="space-y-8 mb-14">
          <BulletPoint point="Redefining crypto advertising (allowing crypto/NFT projects to easily promote via the platform)." />
          <BulletPoint point="Redefining crypto advertising (allowing crypto/NFT projects to easily promote via the platform)" />
          <BulletPoint
            point="Gamified Reward Structure - earn rewards through our viewing content, engaging, and
upgrading your NFTs"
          />
          <BulletPoint point="Fully Decentralised video storage solution - lowering costs by over 80% for Web2 companies" />
        </div>

        <Title className="text-left font-medium text-primary mb-10">
          3. Existing Products
        </Title>

        <div className="space-y-8 mb-14">
          <BulletPoint
            point="Script TV: Simply head to our web app (get.script.tv) to watch television across a range of channels,
and get rewarded for it.
"
          />
        </div>
      </div>
    </section>
  );
}

export default WhatIsScriptTV;
