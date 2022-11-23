import React from "react";
import Title from "./Title";

function ReadMoreCards({ img = "images/read-more-banner.png" }) {
  return (
    <div className="bg-grey-1 rounded-md overflow-hidden">
      <img src={img} className="w-full block object-cover h-[159px]" alt="" />

      <div className="px-4 py-4 pb-8">
        <Title className="font-medium mb-3" variant="18">
          Stargate Finance (STG)
        </Title>

        <p className="text-sm opacity-80">
          An Omnichain Liquidity Transport Protocol.
        </p>
      </div>
    </div>
  );
}

export default ReadMoreCards;
