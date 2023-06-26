import TableList from "components/TableList";
import Title from "components/Title";
import React from "react";

const table1 = {
  heading: ["Height", "Block Hash", "Age", "Avg Fee", "Txns"]
};

function ScriptNodes({ topBlockList }) {

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
          data={topBlockList}
        />
      </div>
    </section>
  );
}

export default ScriptNodes;
