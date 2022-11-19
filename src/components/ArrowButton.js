import React from "react";
import { Icon } from "@iconify/react";

function ArrowButton({ label, className }) {
  return (
    <button
      className={`flex items-center space-x-3 text-base bg-shade-grayis px-6 xl:px-7 min-h-[44px] rounded-lg font-semibold text-white ${className}`}
    >
      <span className="lh-1">{label}</span>

      <Icon
        icon="material-symbols:arrow-right-alt-rounded"
        className="text-2xl"
      />
    </button>
  );
}

export default ArrowButton;
