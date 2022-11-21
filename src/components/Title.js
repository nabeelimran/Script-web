import React from "react";

const variants = {
  36: "text-2xl lg:text-3xl xl:text-4xl",
  30: "text-xl lg:text-2xl xl:text-3xl",
};

function Title({
  children,
  className = "text-white font-bold text-center",
  variant = "36",
}) {
  return (
    <h1 className={`${variants[variant]} lh-1_4 ${className}`}>{children}</h1>
  );
}

export default Title;
