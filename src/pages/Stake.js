import ExplorerNavbar from "components/ExplorerNavbar";
import Footer from "components/Footer";
import React, { useState, useEffect } from "react";
import Hero from "sections/Stake/Hero";
import ScriptNodes from "sections/Stake/ScriptNodes";
import ExplorerService from "services/explorer";
import { ToastMessage } from "components/ToastMessage";
import BigNumber from "bignumber.js";
import { sumCoin } from "common/helpers/utils";


function Stake() {
  const [stakingList, setStakingList] = useState([]);
  const [totalStake, setTotalStake] = useState(0);
  const [sortedStakesByHolder, setSortedStakesByHolder] = useState([]);
  const [sortedStakesBySource, setSortedStakesBySource] = useState([]);
  const [holders, setHolders] = useState([]);
  const [percentage, setPercentage] = useState([]);

  const getStakingList = () => {
    ExplorerService.getStaking(1, 50).then((res) => {
      if (res && res.body) {
        const stakeList = res.body;
        let sum = stakeList.reduce((sum, info) => { return sumCoin(sum, info.amount) }, 0);
        let holderObj = stakeList.reduce((map, obj) => {
          if (!map[obj.holder]) {
            map[obj.holder] = {
              type: obj.type,
              amount: 0
            };
          }
          map[obj.holder].amount = sumCoin(map[obj.holder].amount, obj.amount).toFixed()
          return map;
        }, {});
        let sourceObj = stakeList.reduce((map, obj) => {
          if (!map[obj.source]) {
            map[obj.source] = {
              amount: 0
            };
          }
          map[obj.source].amount = sumCoin(map[obj.source].amount, obj.amount).toFixed()
          return map;
        }, {});
        let sortedStakesByHolder = Array.from(Object.keys(holderObj), key => {
          return { 'holder': key, 'amount': holderObj[key].amount, 'type': holderObj[key].type }
        }).sort((a, b) => {
          return b.amount - a.amount
        })
        let sortedStakesBySource = Array.from(Object.keys(sourceObj), key => {
          return { 'source': key, 'amount': sourceObj[key].amount }
        }).sort((a, b) => {
          return b.amount - a.amount
        })
        let sumPercent = 0;
        let topList = sortedStakesByHolder.slice(0, 8).map(stake => {
          let obj = {};
          obj.holder = stake.holder;
          obj.percentage = new BigNumber(stake.amount).dividedBy(sum / 100).toFixed(2);
          sumPercent += obj.percentage - '0';
          return obj;
        }).concat({ holder: 'Rest Nodes', 'percentage': (100 - sumPercent).toFixed(2) })
        setStakingList(stakeList);
        setTotalStake(sum);
        setSortedStakesByHolder(sortedStakesByHolder);
        setSortedStakesBySource(sortedStakesBySource);
        setHolders(topList.map(obj => { return obj.holder }));
        setPercentage(topList.map(obj => { return (obj.percentage - '0') }));
      } else {
        ToastMessage("No Block Found");
      }
    });
  };

  useEffect(() => {
    getStakingList();
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative z-10">
      <div className="yellow-corner-blob opacity-40" />

      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <ExplorerNavbar />
      </div>

      <main className="flex-1">
        <div className="mb-10 lg:mb-20">
          <Hero holders={holders}
            percentage={percentage}/>
        </div>

        <div className="mb-20 lg:mb-24">
          <ScriptNodes
            stakingList={stakingList}
            totalStake={totalStake}
            sortedStakesByHolder={sortedStakesByHolder} 
            sortedStakesBySource={sortedStakesBySource}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Stake;
