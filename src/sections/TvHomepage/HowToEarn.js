import HowToEarnCard from "components/HowToEarnCard";
import Title from "components/Title";
import React from "react";

function HowToEarn() {
  return (
    <section className="container">
      <div className="mb-14">
        <Title>
          How to Earn on <span className="text-primary">Script Network</span>
        </Title>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <HowToEarnCard
          img="images/tv/earn-1.svg"
          title="Watching Videos"
          desc="Simply creat an account and watch
hundreds of shows and films through a live
TV ecperience, available 24/7, 365 days a
year. Earn token which you can then use
to yield further benifits within Script
Network"
        />
        <HowToEarnCard
          img="images/tv/earn-2.svg"
          title="Become A Node"
          desc="Earn daily rewards, exclusive NFT's and
limited opportunities for helping secure
and grow the Script Network ecosystem.
"
        />
        <HowToEarnCard
          img="images/tv/earn-3.svg"
          title="Watching Videos"
          desc="Be an active part of the community and
gain multiple rewards including cinema
tickets IRL, fractionalised payouts for Script
Network assets and more. Be engaged = 
get rewarded for doing so.
"
        />
      </div>
    </section>
  );
}

export default HowToEarn;
