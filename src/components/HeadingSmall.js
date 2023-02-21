import React from "react";

const HeadingSmall = ({ children, className }) => {
  return (
    <p className={`${className} text-xs xl:text-sm font-medium opacity-60`}>
      {children}
    </p>
  );
};
export default HeadingSmall;
