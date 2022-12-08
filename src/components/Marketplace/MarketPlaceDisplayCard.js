import React from "react";

function MarketPlaceDisplayCard() {
  return (
    <div className="bg-[#131313] rounded-xl">
      <img
        src="images/nft.png"
        className="w-full rounded-xl aspect-square object-cover"
        alt=""
      />

      <div className="pt-3 pb-4 px-4  overflow-hidden relative">
        <p
          className="text-sm xl:text-base font-medium mb-4 cut-text"
          style={{ "--width": "100%" }}
        >
          3D Collection #8975305
        </p>
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs">Price</p>

          <div className="flex items-center space-x-2">
            <img src="images/ether.svg" className="w-[8px]" alt="" />
            <p className="text-xs">1.01</p>
          </div>
        </div>

        <p className="text-xs">
          <span className="opacity-70 font-light">Ends in</span>{" "}
          <span className="opacity-80">02:20:20:10</span>
        </p>
      </div>
    </div>
  );
}

export default MarketPlaceDisplayCard;
