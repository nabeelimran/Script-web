import BigNumber from "bignumber.js";
import { formatCurrency } from "common/constants";
import { sumCoin } from "common/helpers/utils";
import ScriptNetworkCard from "components/ScriptNetworkCard";
import Title from "components/Title";
import { ToastMessage } from "components/ToastMessage";
import React, { useEffect, useState } from "react";
import ExplorerService from "services/explorer";

function ScriptNetwork() {

  const [totalValidatorNode, setTotalValidatorNode] = useState(0);
  const [stakeSum, setStakeSum] = useState(0);

  const getStakingList = () => {
    ExplorerService.getStaking(1, 50).then((res) => {
      if (res && res.body) {
        let stakeList = res.body;
        stakeList = stakeList.filter(stake => stake.type !== 'eenp');

        let sum = stakeList.reduce((sum, info) => { return sumCoin(sum, info.amount) }, 0);
        setStakeSum(sum / 1000000000000000000);
        setTotalValidatorNode(res.body.filter(stake => stake.type === 'vcp').length)

      } else {
        ToastMessage("No Block Found");
      }
    });
  };

  useEffect(() => {
    getStakingList();
  }, [])

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
            subtitle= {`${formatCurrency(stakeSum)} SCPT`}
          />
          <ScriptNetworkCard
            title="Total Validators"
            subtitle={`${totalValidatorNode} Validators`}
          />
          <ScriptNetworkCard title="Current APR" subtitle="N/A APR" />
        </div>
      </div>
    </section>
  );
}

export default ScriptNetwork;
