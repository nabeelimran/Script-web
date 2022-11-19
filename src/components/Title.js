import React from "react";

function Title({ children, className = "text-white font-bold text-center" }) {
  return (
    <h1 className={`text-2xl lg:text-3xl xl:text-5xl lh-1_4 ${className}`}>
      {children}
    </h1>
  );
}

export default Title;
