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
        Content interaction layer
      </Title>

      <p className="heading-sub text-white lh-1_7">
        Filmmakers and content owners already will get a range of benefits from
        being part of Script Network - including faster payment, extra data and
        actual data on their audience - but there is so much more to unlock.{" "}
        <br /> <br />
        In the near future, content owners can, during their show / film being
        aired, release NFTs or bespoke competitions in real time, giving all
        viewers at the time unrivalled access, opportunity and rewards. <br />{" "}
        <br />
        In simple terms, if Andrew has a film that is aired on Script Network
        between 3pm-5pm - he can release a special access NFT or quiz on his
        film to viewers. Those who interact and answer correctly gets exclusive
        access on or off chain.
        <br /> <br />
        Our goal is to do more with NFTs to benefit collectors and owners,
        whilst providing best in class innovation to the industry.
      </p>
    </div>
  );
};

function Content() {
  return (
    <SideBySideSection
      className=""
      LeftComponent={LeftComponent}
      RightComponent={RightComponent}
    />
  );
}

export default Content;
