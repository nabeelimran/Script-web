import FillBar from "components/FillBar";
import React from "react";

const CardProgress = ({
  color = "#0E0E0F",
  title,
  description,
  barColor = "#FFEF00",
  progress = "90%",

  bgColor = "#1F1F1F",
}) => {
  return (
    <div className={`py-4 px-5 rounded-lg bg-[${color}] flex flex-col`}>
      <div className="flex items-center space-x-3 flex-1 mb-2">
        <div className="w-[24px] h-[24px] rounded-full bg-white"></div>
        <p className="fs-18px font-semibold">{title}</p>
      </div>

      <p className="text-xs mb-2">{description}</p>
      <FillBar barColor={barColor} progress={progress} bgColor={bgColor} />
    </div>
  );
};

export default CardProgress;
