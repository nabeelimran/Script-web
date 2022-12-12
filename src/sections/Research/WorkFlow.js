import ProgressBar from "components/ProgressBar";
import Title from "components/Title";
import React from "react";

const ProgressBarWithTitl = ({ value, color, title }) => {
  return (
    <div>
      <Title className="font-medium text-white mb-3" variant="16">
        {title}
      </Title>
      <ProgressBar value={value} color={color} />
    </div>
  );
};

function WorkFlow() {
  return (
    <section>
      <div className="container-two">
        <div className="mb-10 lg:mb-16">
          <Title className="text-primary font-medium mb-3" variant="20">
            The Script TV protocol workflow is based on the ‘Watch to Earn’
            model.
          </Title>
          <Title className="text-primary font-medium" variant="20">
            SPAY Core Tokenomics
          </Title>
        </div>

        {/* <div className="grid lg:grid-cols-[1fr_371px] gap-8 mb-10 lg:mb-16">
          <div className="flex items-center justify-center">
            <img
              src="images/token-chart.png"
              className="max-w-[300px] lg:max-w-[400px] w-full"
              alt=""
            />
          </div>
          <div className="space-y-3 lg:space-y-5">
            <ProgressBarWithTitl
              value={60}
              color="#FF5E8C"
              title="ScriptGLASS rewards"
            />
            <ProgressBarWithTitl
              value={15}
              color="#FF8A0D"
              title="SCPT staking rewards"
            />
            <ProgressBarWithTitl value={10} color="#FFC70D" title="Treasury" />
            <ProgressBarWithTitl
              value={10}
              color="#B8D60B"
              title="Partnerships+Giveaways"
            />
            <ProgressBarWithTitl
              value={5}
              color="#55C9C2"
              title="Token Liquidity"
            />
          </div>
        </div> */}

        {/* <img src="images/vesting-chart.png" className="w-full" alt="" /> */}
      </div>
    </section>
  );
}

export default WorkFlow;
