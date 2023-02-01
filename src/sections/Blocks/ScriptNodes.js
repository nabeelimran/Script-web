import TableList from "components/TableList";
import Title from "components/Title";
import React from "react";
import { Link } from "react-router-dom";

const table1 = {
  heading: ["Height", "Block Hash", "Age", "Avg Fee", "Txns"],
  data: [
    [
      "2230011",
      <Link to="/" className="hover:text-blue-link">
        0x7bd2cdf1f65610be3e7a667f6004efc3cbd...
      </Link>,
      "a few seconds",
      "0 Gwei",
      "1",
    ],
    [
      "2230011",
      <Link to="/" className="hover:text-blue-link">
        0x7bd2cdf1f65610be3e7a667f6004efc3cbd...
      </Link>,
      "a few seconds",
      "0 Gwei",
      "1",
    ],
    [
      "2230011",
      <Link to="/" className="hover:text-blue-link">
        0x7bd2cdf1f65610be3e7a667f6004efc3cbd...
      </Link>,
      "a few seconds",
      "0 Gwei",
      "1",
    ],
    [
      "2230011",
      <Link to="/" className="hover:text-blue-link">
        0x7bd2cdf1f65610be3e7a667f6004efc3cbd...
      </Link>,
      "a few seconds",
      "0 Gwei",
      "1",
    ],
    [
      "2230011",
      <Link to="/" className="hover:text-blue-link">
        0x7bd2cdf1f65610be3e7a667f6004efc3cbd...
      </Link>,
      "a few seconds",
      "0 Gwei",
      "1",
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
          Blocks
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
