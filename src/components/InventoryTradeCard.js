import React from "react";

function InventoryTradeCard({ glass, onClick }) {
  console.log("glass", glass);
  return (
    <div
      // className="bg-[#0E0E0F] rounded-2xl py-6 px-7 transition-all duration-200 hover:bg-primary group hover:scale-[1.12] cursor-pointer"
      className="rounded-2xl py-6 px-7 transition-all duration-200 bg-primary group cursor-pointer"
      onClick={onClick}
    >
      <div className="mb-8">
        <img
          src={glass.img}
          className="w-full h-[70px] lg:h-[70px] object-contain"
          alt=""
        />
      </div>

      <div className="bg-[#0E0E0F] w-fit py-1 px-3 rounded-md lg:rounded-xl mx-auto mb-3 lg:mb-3 transition-all duration-200">
        <p className="text-sm xl:text-base text-white transition-all duration-200 group-hover:text-white text-center">
          #{glass.tokenId}
        </p>
        <p className="text-sm xl:text-base text-white transition-all duration-200 group-hover:text-white text-center">
          Level: {glass.level}
        </p>
        <p className="text-sm xl:text-base text-white transition-all duration-200 group-hover:text-white text-center">
          Type: {glass.type}
        </p>
      </div>
    </div>
  );
}

export default InventoryTradeCard;
