import StakingCard from "components/StakingCard";
import Title from "components/Title";
import React from "react";

const stakingData = [
  { title: "SCPT (USD)", value: "0.025", active: false },
  { title: "SPAY (USD)", value: "0.01", active: false },
  { title: "Market Cap (USD)", value: "25,005.4", active: false },
  { title: "Market Cap Spay (USD)", value: "7771.887", active: true },
  { title: "Validator Stake", value: "50,250,000", active: false },
  { title: "Lightning Stake", value: "10,000", active: false },
  { title: "Total Staked Nodes", value: "3", active: false },
  { title: "Total Staked (%)", value: "5.03%", active: false },
  { title: "24h Blocks", value: "0.025", active: true },
  { title: "24h Transactions", value: "0.025", active: false },
  { title: "Total Onchain Wallets", value: "0.025", active: false },
  { title: "Daliy Active Wallets", value: "0.025", active: false },
];

function Staking({
  stakeProps
}) {
  return (
    <section>
      {console.log(stakeProps)}
      <div className="container">
        <div className="flex items-end space-x-4 mb-10 lg:mb-14">
          <Title className="text-primary font-semibold lh-1">Staking</Title>
          <div className="pb-1 flex-1">
            <div className="w-full h-[1px] bg-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {stakingData.map((item, index) => (
            <StakingCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Staking;
