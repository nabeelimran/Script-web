import TableList from "components/TableList";
import Title from "components/Title";
import React from "react";

const milestones = {
  headings: ["Completion Date", "Milestone", "Commentary"],
  data: [
    ["2021: Q3", "Solana Ignition Hackathon Gaming Track Winner", "Link"],
    [
      "Private Sale Allocation",
      "Public Beta Release with Decentralized Wallet Function Launch",
      "Medium Announcement",
    ],
    // ["Team", "Fundraising Complete", "Medium Announcement"],
    ["Ecosystem/ Treasury", "iOS Official Launch", "Tweet"],
    ["Move and Earn", "Reached 21k DAU and 66k MAU", "Tweet"],
  ],
};

function Roadmap() {
  return (
    <section>
      <div className="container-two">
        <div className="space-y-4 mb-8">
          <Title variant="20" className="text-primary font-medium">
            6. Roadmap, updates, and business development
          </Title>
          <Title variant="20" className="text-primary font-medium">
            6.1 Completed Milestones
          </Title>
        </div>

        <div className="milestone-table">
          <TableList data={milestones.data} headings={milestones.headings} />
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
