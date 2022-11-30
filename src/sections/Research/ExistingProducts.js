import BulletPoint from "components/BulletPoint";
import Title from "components/Title";
import React from "react";

function ExistingProducts() {
  return (
    <section className="container-two">
      <Title className="text-left font-medium text-primary mb-10" variant="20">
        3. Existing Products
      </Title>

      <div className="research-list">
        <div className="research-list">
          <BulletPoint point="Script TV: Simply head to our web app (get.script.tv) to watch television across a range of channels, and get rewarded for it." />

          <img
            src="images/abc.png"
            className="w-full max-w-[900px] mx-auto"
            alt=""
          />
        </div>

        <BulletPoint point="ScriptGLASS NFT: ScriptGLASS NFTs can be upgraded, re-charged and be enhanced through gems - all by burning tokens. These enhancements increase the rate of rewards you can earn per session." />
        <BulletPoint point="Script Blockchain: Run a node, and help secure and scale the media and entertainment chain whilst getting rewarded per block." />
        <BulletPoint point="Users can buy, sell and trade different Script Glasses on the marketplace. These are all exclusively in SPAY tokens." />
      </div>
    </section>
  );
}

export default ExistingProducts;
