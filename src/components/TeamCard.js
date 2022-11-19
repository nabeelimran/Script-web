import React from "react";

function TeamCard({ title, subtitle }) {
  return (
    <div className="flex space-x-5">
      <div>
        <div className="w-[56px] h-[56px] rounded-full bg-[#D9D9D9]"></div>
      </div>
      <div>
        <p className="text-xl text-white mb-1 font-bold">{title}</p>
        <p className="text-base text-white opacity-70">{subtitle}</p>
      </div>
    </div>
  );
}

export default TeamCard;
