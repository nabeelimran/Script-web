import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React, { useEffect, useState } from "react";
import { Component } from "react";
import Hero from "sections/Calculator/Hero";
import Result from "sections/Calculator/Result";
import StakingInformation from "sections/Calculator/StakingInformation";
import Api from "services/api";

function Calculator() {

  const [suppyData, setSupplyData] = useState({
    totalSCPTVal: 0,
    marketValues: {
      circInPercent: 0,
      spayPriceUSD: 0,
      scptPriceUSD: 0,
    }
  });
  const [marketPrice, setMarketPrice] = useState([]);
  const [amount, setAmount] = useState(0);

  const calculateReward = () => {
    
  } 
  
  const checkAmount = (e) => {
    const result = (amount/1000000000)*100;
    setAmount(e.target.value);
    setSupplyData({
      marketValues: {
        circInPercent: result,
        spayPriceUSD: 0.01,
        scptPriceUSD: 0.025,
      }
    })
  }

  useEffect(() => {
    getSupplyData();
    getMarketPrice();
  }, [])
  
  
  const getSupplyData = () => {
    Api.getSupplyData().then((res) => {
      if(res) {
        const scptVal = res.totalScptWeiValue.toFixed(4);
        setSupplyData({
          totalSCPTVal: scptVal,
          marketValues: {
            circInPercent: 0 / 1000000000 * 100,
            spayPriceUSD: 0.01,
            scptPriceUSD: 0.025,
          }
        })
      }
    })
  }

  const getMarketPrice = () => {
    Api.getMarketPrice().then(res => console.log(res,'res'));
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
        <StakingInformation totalSCPTVal={suppyData.totalSCPTVal} marketValues={suppyData.marketValues} setSupplyData={setSupplyData} 
        calculateReward={calculateReward} checkAmount={checkAmount} amount = {amount} />
      </div>
      <div className="mb-20 lg:mb-24">
        <Result />
      </div>
      <Footer />
    </div>
  );
}

export default Calculator;
