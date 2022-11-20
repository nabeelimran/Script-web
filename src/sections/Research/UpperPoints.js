import BulletPoint from "components/BulletPoint";
import React from "react";

function UpperPoints() {
  return (
    <div>
      <div className="container space-y-8 mb-20">
        <BulletPoint
          point="Script TV is a watch to earn television platform. Users, through watching tv and completing
          tasks / achievements within the platform, can earn rewards. Script has a built in wallet, marketplace,
          and platform for users to engage with 24/7/365 days a year."
        />

        <BulletPoint
          point="Script Network is a dual token mechanism. SCPT - Script Token for protocol and content governance,
advertising and staking, alongside SPAY - Script Payments for transactions and rewards."
        />
        <BulletPoint point="SCPT is the native governance token of Script Network and has the following use cases." />

        <div className="pl-8 space-y-8">
          <BulletPoint
            point="Governance: Stake to participate in governance, the longer the locking period, the higher the 
voting power."
          />
          <BulletPoint point="Governance (Content): SCPT stakers can decide on content being shown for the first time ever." />
          <BulletPoint point="Advertising: Holders can buy advertising space within the platform with SCPT tokens." />
        </div>
      </div>

      <div className="container space-y-8 mb-20">
        <BulletPoint point="SPAY is the transactional token of Script Network and has the following use cases:" />
        <div className="pl-8 space-y-8">
          <BulletPoint point="ScriptGLASS: Used to upgrade, re-charge and purchase gems for glasses" />
          <BulletPoint point="Marketplace: To buy, sell and trade glasses" />
          <BulletPoint point="To unlock exclusive content" />
        </div>
      </div>

      <div className="container space-y-8 mb-20">
        <BulletPoint point="Current features of Script Network includes:" />
        <div className="pl-8 space-y-8">
          <BulletPoint
            point={
              <>
                {" "}
                <a href="script.tv" className="underline">
                  Script.TV
                </a>{" "}
                platform: A fully functioning linear TV platform, with 24/7
                streaming across multiple channels.
              </>
            }
          />
          <BulletPoint
            point="ScriptGLASS NFT: Every glasses is unique in design, but also comes equipped with attributes for
which you can improve and upgrade. All synced into the experience and reward mechanism."
          />
          <BulletPoint
            point="Watch to earn mechanism: Watch content and earn rewards whilst doing so. Earns are based on
the NFT reward system (ScriptGLASS)."
          />
          <BulletPoint
            point="Ecosystem achievements: Like games, enhance your experience and unlock more products and
earnings by completing achievements on and off chain including referrals, connecting online with others and more."
          />
          <BulletPoint point="In-app NFT marketplace: Users can trade their NFTs on the marketplace." />
          <BulletPoint point="In-app swap: Users can swap their token earnings to other forms of cryptocurrencies." />
          <BulletPoint
            point="In-app decentralized wallet: Users can deposit and send cryptocurrencies to the wallet to fund
their spending accounts."
          />
        </div>
      </div>
    </div>
  );
}

export default UpperPoints;
