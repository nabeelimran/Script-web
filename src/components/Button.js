import React from "react";

const VARIANT_DEFAULT = "text-darkGray bg-primary";
const VARIANT_1 = "bg-blue-1 text-white";

const variants = [VARIANT_DEFAULT, VARIANT_1];

function Button({ label, className, variant = 0 }) {
  return (
    <button
      className={`flex items-center text-sm xl:text-base px-6 xl:px-8 min-h-[34px] xl:min-h-[44px] rounded-lg font-semibold ${className} ${variants[variant]}`}
    >
      {label}
    </button>
  );
}

export default Button;
