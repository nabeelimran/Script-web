import React from "react";

const StakingCard = ({ data }) => {
  const { title, value, active } = data;
  return (
    <div
      className={`h-[110px] sm:h-[140px] lg:h-[153px] py-4 lg:py-5 px-5 lg:px-6 rounded-lg flex flex-col justify-between ${
        active ? "bg-transparent border-2 border-dashed" : "bg-blue-1"
      }`}
    >
      <p className="text-xs sm:text-sm font-bold uppercase">{title}</p>
      <p className="fs-20px font-bold">{value}</p>
    </div>
  );
};

export default StakingCard;
