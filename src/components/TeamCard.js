import React from "react";

function TeamCard({ title, subtitle }) {
  return (
    <div className="flex space-x-4 md:space-x-5">
      <div>
        <div className="w-9 md:w-11 xl:w-[48px] h-9 md:h-11 xl:h-[48px] rounded-full bg-[#D9D9D9]"></div>
      </div>
      <div>
        <p className="heading-sub text-white mb-1 font-bold">{title}</p>
        <p className="text-xs md:text-sm text-white opacity-70">{subtitle}</p>
      </div>
    </div>
  );
}

export default TeamCard;
