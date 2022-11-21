import TableList from "components/TableList";
import Title from "components/Title";
import React from "react";

function TokenSalesAndEconomics() {
  return (
    <section>
      <div className="container">
        <Title className="text-primary font-medium mb-6">
          4. Token sales and economics
        </Title>

        <div className="space-y-6 mb-14">
          <Title className="text-primary font-medium" variant="30">
            4.1 Token sales data
          </Title>

          <TableList />
        </div>

        <div className="space-y-6 mb-14">
          <Title className="text-primary font-medium" variant="30">
            4.2 Token allocation
          </Title>

          <TableList />
        </div>
      </div>
    </section>
  );
}

export default TokenSalesAndEconomics;
