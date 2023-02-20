import React from "react";

function ProgressBar({ value = 0, color = "red" }) {
  return (
    <div className="h-[28px] lg:h-[36px] w-full bg-white relative z-10">
      <div
        className="absolute top-0 left-0 h-full z-10 transition-all duration-300"
        style={{ backgroundColor: color, width: value ? value + "%" : "50%" }}
      ></div>
      <p className="absolute top-1/2 -translate-y-1/2 right-6 text-sm lg:text-base text-black z-20 font-bold">
        {value < 10 ? `0${value}` : value}%
      </p>
    </div>
  );
}

export default ProgressBar;
