import React from "react";

function InventoryTradeCard() {
  return (
    <div className="bg-[#0E0E0F] rounded-2xl py-6 px-7 transition-all duration-200 hover:bg-primary group hover:scale-[1.12]">
      <div className="mb-8">
        <img
          src="images/cool-glasses.png"
          className="w-full h-[70px] object-contain"
          alt=""
        />
      </div>

      <div className="bg-primary w-fit py-1 px-3 rounded-xl mx-auto mb-8 transition-all duration-200 group-hover:bg-[#0E0E0F]">
        <p className="fs-16px text-black transition-all duration-200 group-hover:text-white">
          #535435
        </p>
      </div>
    </div>
  );
}

export default InventoryTradeCard;
