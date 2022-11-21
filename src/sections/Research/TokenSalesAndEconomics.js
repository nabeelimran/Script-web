import TableList from "components/TableList";
import Title from "components/Title";
import React from "react";

const tokenSales = {
  headings: ["Token Name", "GMT"],
  data: [
    ["Total Token Supply", "6,000,000,000 GMT"],
    ["Private Sale Allocation", "978,000,000 GMT"],
    ["Private Sale Token Price", "~ 0.005 USD / GMT"],
    ["Private Sale Amount Raised", "~ 5,000,000 USD"],
    ["Binance Launchpad Sale Allocation", "420,000,000 GMT"],
    ["Binance Launchpad Sale Price", "	0.010 USD / GMT"],
    ["Binance Launchpad Amount to be Raised", "4,200,000 USD"],
    ["Initial Circ. Supply When Listed on Binance", "600,000,000 GMT (10.00%)"],
  ],
};

const tokenAllocation = {
  headings: ["Private Sale", "GMT"],
  data: [
    ["Total Token Supply", "16.30% of the total token supply"],
    ["Private Sale Allocation", "7.00% of the total token supply"],
    ["Team", "14.20% of the total token supply"],
    ["Advisors", "	2.50% of the total token supply"],
    ["Ecosystem/ Treasury", "30.00% of the total token supply"],
    ["Move and Earn", "30.00% of the total token supply"],
  ],
};

function TokenSalesAndEconomics() {
  return (
    <section>
      <div className="container">
        <Title className="text-primary font-medium mb-6" variant="24">
          4. Token sales and economics
        </Title>

        <div className="space-y-6 mb-14">
          <Title className="text-primary font-medium" variant="24">
            4.1 Token sales data
          </Title>

          <TableList data={tokenSales.data} headings={tokenSales.headings} />
        </div>

        <div className="space-y-6 mb-14">
          <Title className="text-primary font-medium" variant="24">
            4.2 Token allocation
          </Title>

          <TableList
            data={tokenAllocation.data}
            headings={tokenAllocation.headings}
          />
        </div>
      </div>
    </section>
  );
}

export default TokenSalesAndEconomics;
