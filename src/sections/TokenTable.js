import Button from "components/Button";
import Title from "components/Title";
import TokenTableCard from "components/TokenTableCard";
import React from "react";

function TokenTable() {
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
        <TokenTableCard texts={["NA", "Circulating Supply", "NA"]} />
        <TokenTableCard texts={["$0.0.25", "Price At Launch", "TBA"]} />
        <TokenTableCard texts={["Governance", "Use Case", "Transactions"]} />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-center fs-24px font-semibold mb-6">
          Want To Learn More?
        </p>

        <Button label="Read the whitepapper " />
      </div>
    </div>
  );
}

export default TokenTable;
