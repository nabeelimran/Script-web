import Title from "components/Title";
import TransactionTableList from "components/TransactionTableList";
import React from "react";
import * as _ from "lodash";

const table1 = {
  heading: ["Type", "Txn Hash", "Block", "Age", "From", "To", "Value"],
};

function ScriptNodes({
  transactionList
}) {

  transactionList = _.orderBy(transactionList, 'number', 'desc');

  return (
    <section className="container">
      <div className="space-y-6 xl:space-y-8 mb-14">
        <Title
          variant="24"
          className="font-medium text-center lh-1 text-primary"
        >
          Transactions
        </Title>
      </div>

      <div className="overflow-x-auto">
        <TransactionTableList
          className="stake-nodes-table evenBg min-w-[700px] lg:min-w-full rounded-lg xl:table-fixed"
          headings={table1.heading}
          data={transactionList}
        />
      </div>
    </section>
  );
}

export default ScriptNodes;
