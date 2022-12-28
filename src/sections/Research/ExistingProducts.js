import BulletPoint from "components/BulletPoint";
import Title from "components/Title";
import React from "react";

function ExistingProducts() {
  return (
    <section className="container-two">
      <Title className="text-left font-medium text-primary mb-6" variant="20">
        3. Existing Products
      </Title>

      <div className="research-list">
        <div className="research-list pb-8">
          <BulletPoint point="Script TV: Simply head to our web app <a href='https://get.script.tv/' className='text-primary'>(get.script.tv)</a> to watch television across a range of channels, and get rewarded for it." />

          <img
            src="images/abc.png"
            className="w-full max-w-[900px] mx-auto"
            alt=""
          />
        </div>

        <BulletPoint point="ScriptGLASS: ScriptGLASS is the NFT collection which is directly integrated to the watch-to-earn protocol within ScriptTV. At least 1 pair of ScriptGLASS must be equipped to watch and earn on a day to day basis. Beyond each glasses being aesthetically unique in color and design, each has a specific rarity which affects how much a users could possibly earn on a day to day basis. When watching content, users will need to re-charge their glasses, upgrade to higher levels (to earn more per day), buy a gem (for multiplier and raffle opportunities), and loot boxes (which is only available to glasses who reach an advanced level). <br/><br/> To ensure a smooth experience for all new users, the first mint of ScriptGLASS will be free, and only require the account to accumulate 1,000 points to mint their first pair of glasses and begin collecting rewards." />

        <img
          src="images/x-10.png"
          className="w-full max-w-[900px] mx-auto"
          alt=""
        />

        <BulletPoint
          point="Head to <a href='https://whitepaper.script.tv/spay-tokenomics#overview' className='text-primary'>https://whitepaper.script.tv/spay-tokenomics#overview</a> to learn more about how the mechanism works."
          variant="bulletNone"
        />

        <BulletPoint point="Script Points: Points are awarded on the basis of tasks being completed across the ecosystem, similar to achievements you collect in a game. These points and tasks vary and will change over time, so users are encouraged to check their dashboard for current tasks and the rewards as much as possible. <br/><br/> Head to <a href='https://get.script.tv/' className='text-primary'>https://get.script.tv/</a> and click sign up in the top right hand corner to create an account and start earning points" />

        <BulletPoint point="Script Blockchain: Run a lightning node, and help secure and scale Script Network whilst getting rewarded per block, or, run a Script Edge node, and get rewarded for transcoding jobs on chain. <br/><br/> Head to <a href='https://faucet.script.tv/' className='text-primary'>https://faucet.script.tv/</a> to get started" />
      </div>
    </section>
  );
}

export default ExistingProducts;
