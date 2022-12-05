import React from "react";

const variants = {
  default: "",
  white: "brightness-[0] invert",
  black: "brightness-[0]",
};

const GemTitle = ({ title, gemVariant = "default" }) => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="images/gem.svg"
        className={`w-[18px] ${variants[gemVariant]}`}
        alt=""
      />
      <p className="fs-16px font-medium">{title}</p>
    </div>
  );
};

export default GemTitle;
