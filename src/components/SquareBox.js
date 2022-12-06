import React from "react";

const one = "bg-transparent border-2 border-primary";
const two = "bg-primary";

const variants = [one, two];

const SquareBox = ({ children, variant = 0, className }) => {
  return (
    <div
      className={`${variants[variant]} ${className} h-[70px] xl:h-[90px] py-4 px-5 rounded-lg justify-center flex flex-col items-center`}
    >
      {children}
    </div>
  );
};

export default SquareBox;
