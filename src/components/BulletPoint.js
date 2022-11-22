import React from "react";

function BulletPoint({
  point,
  textClassName,
  bulletClassName = "min-w-[10px] h-[10px] rotate-45 mt-[.4em]",
}) {
  return (
    <div className="flex space-x-4 text-sm md:text-base">
      <div className={`bg-bulletBG ${bulletClassName}`}></div>
      <p className={`text-white lh-1_6 ${textClassName}`}>{point}</p>
    </div>
  );
}

export default BulletPoint;
