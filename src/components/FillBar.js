import React from "react";

function FillBar({ progress = "50%", barColor = "#FFEF00" }) {
  return (
    <div className="h-[8px] w-full relative bg-[#1F1F1F] rounded-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full"
        style={{ backgroundColor: barColor, width: progress }}
      ></div>
    </div>
  );
}

export default FillBar;
