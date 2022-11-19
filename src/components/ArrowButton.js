import React from "react";
import { Icon } from "@iconify/react";

const VARIANT_DEFAULT = "bg-shade-grayis text-white";
const VARIANT_2 = "bg-primary text-black";

const variants = [VARIANT_DEFAULT, VARIANT_2];

function ArrowButton({ label, className, variant = 0 }) {
  return (
    <button
      className={`${variants[variant]} ${className} flex items-center space-x-3 text-sm xl:text-base min-h-[34px] xl:min-h-[44px] px-6 xl:px-7 rounded-lg font-semibold `}
    >
      <span className="lh-1 color-inherit">{label}</span>

      <Icon
        icon="material-symbols:arrow-right-alt-rounded"
        className={`text-xl xl:text-2xl ${variant === 1 ? "invert" : ""}`}
      />
    </button>
  );
}

export default ArrowButton;
