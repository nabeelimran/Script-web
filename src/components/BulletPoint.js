import React from "react";

function BulletPoint({ point }) {
  return (
    <div className="flex space-x-5 text-xl">
      <div className="min-w-[13px] h-[13px] bg-bulletBG rotate-45 mt-[.4em]"></div>
      <p className="text-white lh-1_6">{point}</p>
    </div>
  );
}

export default BulletPoint;
