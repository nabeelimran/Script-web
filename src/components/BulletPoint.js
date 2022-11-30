import React from "react";

// const variants = {
//   1: "bg-bulletBG",
//   2: "bg-primary rounded-full",
// };

const variants = {
  default: {
    img: "images/logos/clean-logo.png",
    className: "",
  },
  white: {
    img: "images/logos/logo-black.png",
    className: "invert",
  },
};

function BulletPoint({
  point,
  textClassName,
  bulletClassName = "min-w-[10px] h-[10px] rotate-45 mt-[.4em]",
  variant = "default",
}) {
  const v = variants[variant];

  return (
    <div className="flex space-x-4 text-sm md:text-base items-start">
      {/* <div className={`${variants[variant]} ${bulletClassName}`}></div> */}
      <img
        src={v.img}
        className={`min-w-[16px] w-[16px] mt-[.36em] ${v.className}`}
        alt=""
      />
      <p className={`text-white lh-1_6 ${textClassName}`}>{point}</p>
    </div>
  );
}

export default BulletPoint;
