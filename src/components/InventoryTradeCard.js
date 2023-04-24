import React from "react";

function InventoryTradeCard({ glass, onClick }) {
  console.log("glass", glass);
  return (
    <div
      // className="bg-[#0E0E0F] rounded-2xl py-6 px-7 transition-all duration-200 hover:bg-primary group hover:scale-[1.12] cursor-pointer"
      className="rounded-2xl py-4 px-4 transition-all duration-200 bg-white group cursor-pointer border-[#ffef00] relative"
      style={{"border-width": "5px"}}
      onClick={onClick}
    >
      <div className="absolute h-full w-full bg-[#ffef00] mix-blend-darken top-0 left-0"></div>
      <div className="mb-8">
        <img
          src={glass.img}
          className="w-full h-[120px] lg:h-[120px] object-contain"
          alt=""
        />
      </div>

      <div className="bg-white w-fit py-1 px-3 rounded-md lg:rounded-xl mx-auto mb-3 lg:mb-3 transition-all duration-200">
        <p className="text-sm xl:text-base text-black transition-all duration-200 group-hover:text-black text-left">
          Token Id: #{glass.tokenId}
        </p>
        <p className="text-sm xl:text-base text-black transition-all duration-200 group-hover:text-black text-left">
          Level: {glass.level}
        </p>
        <p className="text-sm xl:text-base text-black transition-all duration-200 group-hover:text-blacck text-left">
          Type: {glass.type}
        </p>
      </div>
    </div>
  );
}

export default InventoryTradeCard;
