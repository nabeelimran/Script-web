import BulletPoint from "components/BulletPoint";
import Title from "components/Title";
import React from "react";

function WatchToEarn() {
  return (
    <section className="container-two">
      <Title className="text-left font-medium text-primary mb-10" variant="20">
        What are the key benefits of Script Network
      </Title>

      <div className="research-list">
        <BulletPoint point="Redefining crypto advertising (allowing crypto/NFT projects to easily promote via the platform)" />
        <BulletPoint
          point="Gamified Reward Structure - earn rewards through our viewing content, engaging, and
upgrading your NFTs"
        />
        <BulletPoint point="Fully Decentralised video storage solution - lowering costs by over 80% for Web2 companies" />
        <BulletPoint point="Watch online TV and get paid rewards per minute" />
      </div>
    </section>
  );
}

export default WatchToEarn;
