import TableList from "components/TableList";
import Title from "components/Title";
import React from "react";
import { Link } from "react-router-dom";

const table1 = {
  heading: ["ADDRESS", "TOKENS STAKED", "%STAKED"],
  data: [
    [
      <Link to="/" className="hover:text-blue-link">
        0x98fd878cd2267570x98fd878cd226757
      </Link>,
      "50,000,000",
      "99.48%",
    ],
    [
      <Link to="/" className="hover:text-blue-link">
        0x62679274cb75f1b0x62679274cb75f1b
      </Link>,
      "25,000",
      "0.51%",
    ],
    [
      <Link to="/" className="hover:text-blue-link">
        0xcaea64853e8c23d0xcaea64853e8c23d
      </Link>,
      "5,000",
      "0.01%",
    ],
    ["", "", ""],
    ["", "50,260,000", "100%"],
  ],
};
const table2 = {
  heading: ["ADDRESS", "TYPE", "TOKENS STAKED", "%STAKED"],
  data: [
    ["0x98fd878cd2267570x98fd878cd226757", "Validator", "50,000,000", "99.48%"],
    ["0x62679274cb75f1b0x62679274cb75f1b", "Validator", "25,000", "0.51%"],
    ["0xcaea64853e8c23d0xcaea64853e8c23d", "Lightning", "5,000", "0.01%"],
    ["", "", "", ""],
    ["", "", "50,260,000", "100%"],
  ],
};

function ScriptNodes() {
  return (
    <section className="container">
      <div className="space-y-6 xl:space-y-8 mb-14">
        <Title className="font-bold text-center lh-1 text-primary">
          SCRIPT NODES
        </Title>
        <div className="w-full h-[1px] bg-white"></div>
        <Title
          variant="20"
          className="font-medium text-center lh-1 text-primary"
        >
          Top Staking Wallets
        </Title>
      </div>

      <div className="grid xl:grid-cols-2 gap-8">
        <div className="overflow-x-auto">
          <TableList
            className="stake-nodes-table"
            headings={table1.heading}
            data={table1.data}
          />
        </div>
        <div className="overflow-x-auto">
          <TableList
            className="stake-nodes-table"
            headings={table2.heading}
            data={table2.data}
          />
        </div>
      </div>
    </section>
  );
}

export default ScriptNodes;
