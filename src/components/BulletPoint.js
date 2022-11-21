import React from "react";

function BulletPoint({ point }) {
  return (
    <div className="flex space-x-4 text-sm md:text-base">
      <div className="min-w-[10px] h-[10px] bg-bulletBG rotate-45 mt-[.4em]"></div>
      <p className="text-white lh-1_6">{point}</p>
    </div>
  );
}

export default BulletPoint;
