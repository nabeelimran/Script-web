import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React, { useEffect, useState } from "react";
import Hero from "sections/Calculator/Hero";
import Result from "sections/Calculator/Result";
import StakingInformation from "sections/Calculator/StakingInformation";
import Api from "services/api";

function Calculator() {

  const [suppyData, setSupplyData] = useState({
    totalSCPTVal: 1000000000
  });
  const [marketValues, setMarketValues] = useState({
    circInPercent: 0,
    spayPriceUSD: 0,
    scptPriceUSD: 0
  })
  const initialState = {
    myTotalPortion: 0,
    myAnnualPayout: 0,
    myStakePercentage: 0,
    myMonthlyPayout: 0,
    myWeeklyPayout: 0,
    myDailyPayout: 0,
    totalInvestment: 0,
    myAnnualPayoutMoney: 0,
    myMonthlyPayoutMoney: 0,
    myDailyPayoutMoney: 0,
    myWeeklyPayoutMoney: 0,
    _yield: 0,
  }
  const [amount, setAmount] = useState(null);
  const [result, setResult] = useState(initialState);

  const calculateReward = () => {
    const cirSupply = 1000000000;
    var valueStaked = marketValues.circInPercent / 100;
    const upForGrabs = suppyData.totalSCPTVal;
    const total_staked_num = valueStaked * cirSupply;
    const myTotalPortion = (amount / total_staked_num);
    const myAnnualPayout = myTotalPortion * upForGrabs;
    const myStakePercentage = myTotalPortion * 100;
    const myMonthlyPayout = myAnnualPayout / 12;
    const myWeeklyPayout = myAnnualPayout / 52;
    const myDailyPayout = myAnnualPayout / 365
    const totalInvestment = amount * marketValues.scptPriceUSD;
    const myAnnualPayoutMoney = myAnnualPayout * marketValues.spayPriceUSD;
    const myMonthlyPayoutMoney = myMonthlyPayout * marketValues.spayPriceUSD;
    const myDailyPayoutMoney = myDailyPayout * marketValues.spayPriceUSD;
    const myWeeklyPayoutMoney = myWeeklyPayout * marketValues.spayPriceUSD;
    const _yield = myAnnualPayoutMoney / totalInvestment;
  
    setResult({
        myTotalPortion,
        myAnnualPayout,
        myStakePercentage,
        myMonthlyPayout,
        myWeeklyPayout,
        myDailyPayout,
        totalInvestment,
        myAnnualPayoutMoney,
        myMonthlyPayoutMoney,
        myDailyPayoutMoney,
        myWeeklyPayoutMoney,
        _yield,
    })
  } 
  
  const checkAmount = (e) => {
    setAmount(e.target.value);
    setMarketValues({
      circInPercent: (parseInt(e.target.value) / 1000000000) * 100,
      spayPriceUSD: 0.01,
      scptPriceUSD: 0.025,
    })
  }

  useEffect(() => {
    getSupplyData();
  }, [])
  
  
  const getSupplyData = () => {
    Api.getSupplyData().then((res) => {
      if(res) {
        const scptVal = res.totalScptWeiValue.toFixed(4);
        setSupplyData({
          totalSCPTVal: scptVal
        })
        setMarketValues({
          circInPercent: 0,
          spayPriceUSD: 0.01,
          scptPriceUSD: 0.025,
        })
      }
    })
  }

  const resetResult = () => {
    setResult(initialState)
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 lg:mb-10">
        <Navbar />
      </div>
      <div className="mb-14 lg:mb-24">
        <Hero totalSCPTVal={suppyData.totalSCPTVal} />
      </div>
      <div className="mb-20 lg:mb-24">
        <StakingInformation
          suppyData={suppyData}
          marketValues={marketValues} calculateReward={calculateReward} checkAmount={checkAmount}
          amount = {amount} />
      </div>
      <div className="mb-20 lg:mb-24">
        <Result result={result} amount={amount} marketValues={marketValues} clearForm={resetResult}/>
      </div>
      <Footer />
    </div>
  );
}

export default Calculator;
