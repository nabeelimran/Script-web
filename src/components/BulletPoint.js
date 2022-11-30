import React from "react";

const variants = {
  default: {
    img: "images/logos/clean-logo.png",
    className: "",
    component: false,
  },
  white: {
    img: "images/logos/logo-black.png",
    className: "invert",
    component: false,
  },
  bullet1: {
    img: "",
    className: "bg-bulletBG",
    component: true,
  },
  bullet2: {
    img: "",
    className: "bg-primary rounded-full",
    component: true,
  },
};

function BulletPoint({
  point,
  textClassName,
  bulletClassName = "min-w-[10px] h-[10px] rotate-45 mt-[.4em]",
  variant = "default",
  bulletComponent,
}) {
  const v = variants[variant];

  return (
    <div className="flex space-x-4 text-sm md:text-base items-start">
      {v.component ? (
        <div className={`${v.className} ${bulletClassName}`}></div>
      ) : (
        <img
          src={v.img}
          className={`min-w-[16px] w-[16px] mt-[.36em] ${v.className}`}
          alt=""
        />
      )}
      <p className={`text-white lh-1_6 ${textClassName}`}>{point}</p>
    </div>
  );
}

export default BulletPoint;
