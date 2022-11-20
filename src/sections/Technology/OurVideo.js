import Title from "components/Title";
import SideBySideSection from "layouts/SideBySideSection";
import React from "react";

const LeftComponent = () => {
  return (
    <div className="">
      <img src="images/ourVideo.png" className="w-full" alt="" />
    </div>
  );
};

const RightComponent = () => {
  return (
    <div>
      <Title className="text-primary text-left font-semibold mb-5">
        Our video advertising protocol layer is an industry first{" "}
      </Title>

      <p className="heading-sub text-white">
        No other platform allows you to buy ads on chain with no need to
        interact with credit cards / sign up forms
      </p>
    </div>
  );
};

function OurVideo() {
  return (
    <SideBySideSection
      className="items-center"
      LeftComponent={LeftComponent}
      RightComponent={RightComponent}
    />
  );
}

export default OurVideo;
