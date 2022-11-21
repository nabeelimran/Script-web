import BulletPoint from "components/BulletPoint";
import Title from "components/Title";
import React from "react";

function WatchToEarn() {
  return (
    <section className="container">
      <Title className="text-left font-medium text-primary mb-10" variant="24">
        2. Watch-to-earn with online watch TV online and get paid rewards per
        block
      </Title>

      <div className="research-list">
        <BulletPoint point="Redefining crypto advertising (allowing crypto/NFT projects to easily promote via the platform)." />
        <BulletPoint point="Redefining crypto advertising (allowing crypto/NFT projects to easily promote via the platform)" />
        <BulletPoint
          point="Gamified Reward Structure - earn rewards through our viewing content, engaging, and
upgrading your NFTs"
        />
        <BulletPoint point="Fully Decentralised video storage solution - lowering costs by over 80% for Web2 companies" />
      </div>
    </section>
  );
}

export default WatchToEarn;
