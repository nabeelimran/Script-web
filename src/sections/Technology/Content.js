import Title from "components/Title";
import SideBySideSection from "layouts/SideBySideSection";
import React from "react";

const LeftComponent = () => {
  return (
    <div className="">
      <img src="images/hacker.png" className="w-full" alt="" />
    </div>
  );
};

const RightComponent = () => {
  return (
    <div>
      <Title className="text-primary text-left font-semibold mb-5">
        Content interaction layer:
      </Title>

      <p className="heading-sub text-white">
        Filmmakers / content owners (beyond getting a tonne of benefits such as
        faster pay, more distribution and actual data on viewership) - can
        launch NFTs or bespoke competitions over the top of their film, and have
        users interact with it at the time. In simple terms, if i have my film
        aired on Script TV between 3-5pm, i can launch a NFT spontaneously which
        gives an opportunity to viewers who are watching the film at that time
        only, to buy / mint for free / get a reward. No other company, let alone
        film company, has explored this type of discovery process of NFTs to
        date.
      </p>
    </div>
  );
};

function Content() {
  return (
    <SideBySideSection
      className="items-center"
      LeftComponent={LeftComponent}
      RightComponent={RightComponent}
    />
  );
}

export default Content;
