import React from "react";

function InventoryTradeCard() {
  return (
    <div className="bg-[#0E0E0F] rounded-2xl py-6 px-7 transition-all duration-200 hover:bg-primary group hover:scale-[1.12]">
      <div className="mb-8">
        <img
          src="images/cool-glasses.png"
          className="w-full h-[40px] lg:h-[70px] object-contain"
          alt=""
        />
      </div>

      <div className="bg-primary w-fit py-1 px-3 rounded-md lg:rounded-xl mx-auto mb-3 lg:mb-8 transition-all duration-200 group-hover:bg-[#0E0E0F]">
        <p className="text-sm xl:text-base text-black transition-all duration-200 group-hover:text-white">
          #535435
        </p>
      </div>
    </div>
  );
}

export default InventoryTradeCard;
