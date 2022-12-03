import React from "react";

function FillBar({
  progress = "50%",
  barColor = "#FFEF00",
  bgColor = "#1F1F1F",
}) {
  return (
    <div
      className="h-[8px] w-full relative rounded-full overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="absolute top-0 left-0 h-full"
        style={{ backgroundColor: barColor, width: progress }}
      ></div>
    </div>
  );
}

export default FillBar;
