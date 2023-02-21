import StakeTableList from "components/StakeTableList";
import Title from "components/Title";
import React from "react";

const table1 = {
  heading: ["ADDRESS", "TOKENS STAKED", "%STAKED"]
};
const table2 = {
  heading: ["ADDRESS", "TYPE", "TOKENS STAKED", "%STAKED"],
};

function ScriptNodes({
  stakingList,
  totalStake,
  sortedStakesByHolder,
  sortedStakesBySource,
  holders,
  percentage
}) {
  return (
    <section className="container">
      <div className="space-y-6 xl:space-y-8 mb-14">
        <Title className="font-bold text-center lh-1 text-primary">
          SCRIPT NODES
        </Title>
        <div className="w-full h-[1px] bg-white"></div>
        <Title
          variant="20"
          className="font-medium text-center lh-1 text-primary"
        >
          Top Staking Wallets
        </Title>
      </div>

      <div className="grid xl:grid-cols-2 gap-8">
        <div className="overflow-x-auto">
          <StakeTableList
            className="stake-nodes-table evenBg min-w-[700px] lg:min-w-full rounded-lg xl:table-fixed"
            headings={table1.heading}
            data={sortedStakesBySource}
            type="wallet"
            totalStake={totalStake}
          />
        </div>
        <div className="overflow-x-auto">
          <StakeTableList
            className="stake-nodes-table evenBg min-w-[700px] lg:min-w-full rounded-lg xl:table-fixed"
            headings={table2.heading}
            data={sortedStakesByHolder}
            type="node"
            totalStake={totalStake}
          />
        </div>
      </div>
    </section>
  );
}

export default ScriptNodes;
