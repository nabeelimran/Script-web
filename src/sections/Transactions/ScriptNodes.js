import TableList from "components/TableList";
import Title from "components/Title";
import React from "react";
import { Link } from "react-router-dom";

const table1 = {
  heading: ["Type", "Txn Hash", "Block", "Age", "From", "To", "Value"],
  data: [
    [
      "Coinbase",
      <Link to="/" className="hover:text-blue-link">
        0x32b9907a84011c75a3e6e9fce54357898ae...
      </Link>,
      "2240094",
      "a few seconds",
      <Link to="/" className="hover:text-blue-link">
        0x98fd878cd226757...
      </Link>,
      "",
      "0 SCPT 0 SPAY",
    ],
    [
      "Coinbase",
      <Link to="/" className="hover:text-blue-link">
        0x32b9907a84011c75a3e6e9fce54357898ae...
      </Link>,
      "2240094",
      "a few seconds",
      <Link to="/" className="hover:text-blue-link">
        0x98fd878cd226757...
      </Link>,
      "",
      "0 SCPT 0 SPAY",
    ],
    [
      "Coinbase",
      <Link to="/" className="hover:text-blue-link">
        0x32b9907a84011c75a3e6e9fce54357898ae...
      </Link>,
      "2240094",
      "a few seconds",
      <Link to="/" className="hover:text-blue-link">
        0x98fd878cd226757...
      </Link>,
      "",
      "0 SCPT 0 SPAY",
    ],
    [
      "Coinbase",
      <Link to="/" className="hover:text-blue-link">
        0x32b9907a84011c75a3e6e9fce54357898ae...
      </Link>,
      "2240094",
      "a few seconds",
      <Link to="/" className="hover:text-blue-link">
        0x98fd878cd226757...
      </Link>,
      "",
      "0 SCPT 0 SPAY",
    ],
    [
      "Coinbase",
      <Link to="/" className="hover:text-blue-link">
        0x32b9907a84011c75a3e6e9fce54357898ae...
      </Link>,
      "2240094",
      "a few seconds",
      <Link to="/" className="hover:text-blue-link">
        0x98fd878cd226757...
      </Link>,
      "",
      "0 SCPT 0 SPAY",
    ],
  ],
};

function ScriptNodes() {
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
        <TableList
          className="stake-nodes-table evenBg min-w-[700px] lg:min-w-full rounded-lg xl:table-fixed"
          headings={table1.heading}
          data={table1.data}
        />
      </div>
    </section>
  );
}

export default ScriptNodes;
