import ExplorerNavbar from "components/ExplorerNavbar";
import Footer from "components/Footer";
import React, { useEffect, useState } from "react";
import Details from "sections/Explorer/Details/Details";
import Hero from "sections/Explorer/Hero";
import Staking from "sections/Explorer/Staking";
import Api from "services/api";
import ExplorerService from "services/explorer";

function Explorer() {

  const [totalStakeNode, setTotalStakeNode] = useState(0);
  const [oneDayTransactionCount, setOneDayTransactionCount] = useState(0);
  const [oneDayBlockCount, setOneDayBlockCount] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [supplyData, setSupplyData] = useState({
    totalSCPTVal: 1000000000
  });
  const [marketValues, setMarketValues] = useState({
    circInPercent: 0,
    spayPriceUSD: 0.01,
    scptPriceUSD: 0.025,
  })
  const [totalLightningNode, setTotalLightningNode] = useState(0);
  const [totalValidatorNode, setTotalValidatorNode] = useState(0);
  const [totalOnChainWallet, setTotalOnChainWallet] = useState(0);
  const [totalActiveWallet, setTotalActiveWallet] = useState(0);
  const [topBlocks, setTopBlocks] = useState([]);

  const getTotalStakeNode = () => {
    ExplorerService.getStakeTotalHolderAddress().then((res) => {
      if(res && res.nodeCount) {
        setTotalStakeNode(res.nodeCount);
      }
    })
  }

  const getOneDayTransactionCount = () => {
    ExplorerService.getOneDayTransactionsCount().then((res) => {
      if(res && res.body) {
        setOneDayTransactionCount(res.body.total_num_tx);
      }
    })
  }

  const getOneDayBlockCount = () => {
    ExplorerService.getOneDayBlocksCount().then((res) => {
      if(res && res.body) {
        setOneDayBlockCount(res.body.total_num_block); 
      }
    })
  }

  const getOnChainWalletCount = () => {
    ExplorerService.getOnChainWalletCount().then((res) => {
      if(res && res.total_number_account) {
        setTotalOnChainWallet(res.total_number_account); 
      }
    })
  }

  const getDailyActiveWalletCount = () => {
    ExplorerService.getDailyActiveWalletCount().then((res) => {
      if(res && res.body) {
        setTotalActiveWallet(res.body.amount); 
      }
    })
  }

  const getTotalLightningNode = () => {
    ExplorerService.getTotalLightningNode().then((res) => {
      if(res && res.lightningNode) {
        setTotalLightningNode(res.lightningNode); 
      }
    })
  }

  const getTotalValidatorNode = () => {
    ExplorerService.getTotalValidatorNode().then((res) => {
      if(res && res.validatorNode) {
        setTotalValidatorNode(res.validatorNode); 
      }
    })
  }

  const getTransactionHistory = () => {
    ExplorerService.getTransactionHistory().then((res) => {
      if(res && res.body) {
        setTransactionHistory(res.body.data); 
      }
    })
  }

  useEffect(() => {
    getTotalStakeNode();
    getOneDayTransactionCount();
    getOneDayBlockCount();
    getOnChainWalletCount();
    getDailyActiveWalletCount();
    getTotalLightningNode();
    getTotalValidatorNode();
    getTransactionHistory();
  }, [])

  return (
    <div>
      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <ExplorerNavbar />
      </div>

      <div className="mb-20 lg:mb-24">
        <Hero />
      </div>

      <div className="mb-20 lg:mb-24">
        <Staking totalStakeNode={totalStakeNode} />
      </div>

      <div className="mb-20 lg:mb-24">
        <Details />
      </div>

      <Footer />
    </div>
  );
}

export default Explorer;
