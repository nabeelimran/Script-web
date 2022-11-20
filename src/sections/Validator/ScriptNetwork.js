import ScriptNetworkCard from "components/ScriptNetworkCard";
import Title from "components/Title";
import React from "react";

function ScriptNetwork() {
  return (
    <section>
      <div className="container">
        <div className="mb-8 lg:mb-12">
          <Title>
            The <span className="text-primary">Script</span> Network
          </Title>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-[24rem] lg:max-w-none mx-auto lg:mx-0">
          <ScriptNetworkCard
            title="Total SCPT Staked"
            subtitle="51,695,000 SCPT"
          />
          <ScriptNetworkCard
            title="Total Validators"
            subtitle="10 Validatiors"
          />
          <ScriptNetworkCard title="Current APR" subtitle="5.1% APR" />
        </div>
      </div>
    </section>
  );
}

export default ScriptNetwork;
