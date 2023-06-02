import Button from "components/Button";
import Title from "components/Title";
import TokenTableCard from "components/TokenTableCard";
import React, { useEffect, useState } from "react";
import Api from '../services/api';
import { helper } from "utils/helper";

function TokenTable() {

  const [supplyData, setSupplyData] = useState({
    totalScptWeiValue: 0,
    totalSpayWeiValue: 0
  });

  const getSupplyData = () => {
    Api.getSupplyData().then((res) => {
      if(res) {
        setSupplyData({
          totalScptWeiValue: res.totalScptWeiValue.toFixed(4),
          totalSpayWeiValue: res.totalSpayWeiValue.toFixed(4),
        })
      }
    })
  }

  useEffect(() => {
    getSupplyData();
  }, [])

  return (
    <div className="sm:bg-shade-dark-blue sm:rounded-[60px] pb-12 sm:pb-16 pt-8 sm:px-12">
      <div className="flex items-center justify-between mb-6 px-5">
        <Title>SCPT</Title>
        <Title>SPAY</Title>
      </div>

      <div className="space-y-3 xl:space-y-5 mb-8">
        <TokenTableCard
          texts={["1,000,000,000", "Total Supply", "5,000,000,000"]}
        />
        <TokenTableCard texts={[`${helper.numberFormat(+supplyData.totalScptWeiValue)}`, "Circulating Supply", `${helper.numberFormat(+supplyData.totalSpayWeiValue)}`]} />
        <TokenTableCard texts={["$0.01", "Price At Launch", "$0.0005"]} />
        <TokenTableCard texts={["Governance", "Use Case", "Transactions"]} />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-center fs-24px font-semibold mb-6">
          Want To Learn More?
        </p>

        <Button label="Read the whitepapper " buttonProps={{
          onClick: () => {
            helper.openLink('https://whitepaper.script.tv/')
          },
        }} />
      </div>
    </div>
  );
}

export default TokenTable;
