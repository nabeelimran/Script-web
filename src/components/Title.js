import React from "react";

const variants = {
  48: "text-xl lg:text-3xl xl:text-5xl",
  44: "text-xl lg:text-3xl xl:text-4xl",
  36: "text-xl lg:text-2xl xl:text-3xl",
  30: "text-xl lg:text-2xl xl:text-[28px]",
  24: "text-base lg:text-lg xl:text-2xl",
  20: "text-base lg:text-base xl:text-xl",
  18: "text-base lg:text-base xl:text-lg",
  16: "text-sm md:text-base",
};

function Title({
  children,
  className = "text-white font-bold text-center",
  variant = "36",
  lineHeight = 1.4,
}) {
  return (
    <h1
      className={`${variants[variant]} ${className}`}
      style={{ lineHeight: lineHeight }}
    >
      {children}
    </h1>
  );
}

export default Title;
