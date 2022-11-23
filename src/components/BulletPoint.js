import React from "react";

const variants = {
  1: "bg-bulletBG",
  2: "bg-primary rounded-full",
};

function BulletPoint({
  point,
  textClassName,
  bulletClassName = "min-w-[10px] h-[10px] rotate-45 mt-[.4em]",
  variant = 1,
}) {
  return (
    <div className="flex space-x-4 text-sm md:text-base">
      <div className={`${variants[variant]} ${bulletClassName}`}></div>
      <p className={`text-white lh-1_6 ${textClassName}`}>{point}</p>
    </div>
  );
}

export default BulletPoint;
