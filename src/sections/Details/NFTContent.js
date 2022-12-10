import { Icon } from "@iconify/react";
import React from "react";
import DetailsAccordion from "./DetailsAccordion";

const Row = ({ texts }) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-sm">{texts[0]}</p>
      <p className="text-sm">{texts[1]}</p>
    </div>
  );
};

function NFTContent() {
  return (
    <div>
      <img
        src="images/nft.png"
        className="w-full rounded-xl aspect-square object-cover mb-6"
        alt=""
      />

      <DetailsAccordion
        open={true}
        title="Token Details"
        icon={<Icon icon="material-symbols:info-outline" />}
      >
        <div className="pt-3">
          <div className="bg-[#131313] rounded-lg py-3 px-4 space-y-2">
            <Row texts={["Mint address", "BagCJ...tDC"]} />
            <Row texts={["On-chain Collection", "BagCJ...tDC"]} />
            <Row texts={["Token address", "BagCJ ... tDC"]} />
            <Row texts={["Owner", "BagCJ ... tDC"]} />
            <Row texts={["Creator Royalties", "2%"]} />
            <Row texts={["Transaction Fee", "0%"]} />
            <Row texts={["Listing/Bidding/Cancel", "Free"]} />
          </div>
        </div>
      </DetailsAccordion>
    </div>
  );
}

export default NFTContent;
