import Button from "components/Button";
import TokenTableCard from "components/TokenTableCard";
import React from "react";

function TokenTable() {
  return (
    <div className="sm:bg-shade-dark-blue sm:rounded-[60px] pb-12 sm:pb-16 pt-8 sm:px-12">
      <div className="flex items-center justify-between mb-6 px-5">
        <h2 className="text-2xl md:text-3xl xl:text-4xl uppercase font-bold">
          SCPT
        </h2>
        <h2 className="text-2xl md:text-3xl xl:text-4xl uppercase font-bold">
          SPAY
        </h2>
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
        <p className="text-center text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 sm:mb-8">
          Want To Learn More?
        </p>

        <Button label="Read the whitepapper " />
      </div>
    </div>
  );
}

export default TokenTable;
