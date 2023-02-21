import { Icon } from "@iconify/react";
import React from "react";
import ActivityRow from "./ActivityRow";
import DetailsAccordion from "./DetailsAccordion";
import NFTContent from "./NFTContent";
import RightContent from "./RightContent";

function NFTDetails() {
  return (
    <div>
      <div className="grid md:grid-cols-[300px_1fr] gap-8 mb-10">
        <NFTContent />
        <RightContent />
      </div>

      <DetailsAccordion
        open={true}
        title="Activity"
        icon={<Icon icon="ic:baseline-format-list-bulleted" />}
      >
        <div className="pt-3">
          <div className="rounded-[10px] bg-[#131313] py-4 px-6 overflow-x-auto">
            <table className="nft-activity-table">
              <thead>
                <th>Name</th>
                <th>Transaction ID</th>
                <th>Transaction Type</th>
                <th>Time</th>
                <th>Total Amount</th>
                <th>Buyer</th>
                <th>Seller</th>
              </thead>
              <tbody>
                <ActivityRow />
                <ActivityRow />
                <ActivityRow />
                <ActivityRow />
                <ActivityRow />
                <ActivityRow />
              </tbody>
            </table>
          </div>
        </div>
      </DetailsAccordion>
    </div>
  );
}

export default NFTDetails;
