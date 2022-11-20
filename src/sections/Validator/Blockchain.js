import Title from "components/Title";
import ValidatorCard from "components/ValidatorCard";
import React from "react";

function Blockchain() {
  return (
    <section>
      <div className="container">
        <div className="mb-14">
          <div className="max-w-[40rem] mx-auto mb-6">
            <Title>
              The <span className="text-primary">Blockchain</span> That Is Built
              To Bridge The Gap Between Traditional Media And{" "}
              <span className="text-primary">Web3</span>
            </Title>
          </div>

          <p className="heading-sub text-center text-white opacity-80 max-w-[60rem] mx-auto">
            Have An Idea? Then Start Building On Script, Submit Your Idea Below,
            And Join The Growing Community Of Developers, Creators, And
            Enthusiasts Building To Help Change And Shape The Future.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-7 mb-16">
          <ValidatorCard
            img="images/blockchain/earn.png"
            title="Earn Exclusive Rewards"
            desc="Earn More Than Just Tokens, Get Airdrops
Durring The Year of NFT’s And Claimable 
Off- Chain Rewards."
          />
          <ValidatorCard
            img="images/blockchain/stake.png"
            title="Stake SCPT, Earn SPAY Tokens"
            desc="Our Dual Token Ecosystem Alloes You To
Benifits From Holding Booth Tokens Long
Term, Bringing Further Acesss to Oppor-
tunity
Reward And Partctical Use."
          />
          <ValidatorCard
            img="images/blockchain/compound.png"
            title="Compound"
            desc="Delayed Gratification. Earn More Through 
Compunding Time By Claiming Less Often."
          />
          <ValidatorCard
            img="images/blockchain/exc.png"
            title="Exclusive Community"
            desc="Be Part Of An Exclusive Community And
Network of Builders For Web3 TV, Film, And
DApps"
          />
        </div>
      </div>
    </section>
  );
}

export default Blockchain;
