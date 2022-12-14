import Title from "components/Title";
import SideBySideSection from "layouts/SideBySideSection";
import React from "react";

const LeftComponent = () => {
  return (
    <div>
      <Title className="text-primary text-left font-semibold mb-5">
        Our multi BFT consensus layer allows for the first time ever
      </Title>

      <p className="heading-sub text-white lh-1_7">
        For you to not only have governance over protocol level decision in the
        ecosystem, but decision making power on future content being aired. This
        is part of our long term vision to make television decentralized, and
        give viewers the power and control they deserve.
      </p>
    </div>
  );
};

const RightComponent = () => {
  return (
    <div className="row-start-1 row-end-2 md:row-start-auto md:row-end-auto">
      <img src="images/blocks.png" className="w-full" alt="" />
    </div>
  );
};

function Multi() {
  return (
    <SideBySideSection
      className="items-center"
      LeftComponent={LeftComponent}
      RightComponent={RightComponent}
    />
  );
}

export default Multi;
