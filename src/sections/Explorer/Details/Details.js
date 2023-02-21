import Title from "components/Title";
import TransactionHistoryChart from "components/TransactionHistoryChart";
import React from "react";
import ScriptNodes from "./ScriptNodes";

function Details() {
  return (
    <section className="container grid lg:grid-cols-2 gap-10">
      <div className="rounded-3xl py-5 px-8 bg-blue-1">
        <Title className="text-left mb-6" variant="24">
          Script Nodes
        </Title>

        <ScriptNodes />
      </div>

      <div className="border-2 border-primary rounded-2xl py-5 px-8">
        <Title className="text-left mb-6" variant="24">
          Script Transaction History (14 Days)
        </Title>

        <TransactionHistoryChart />
      </div>
    </section>
  );
}

export default Details;
