import React from "react";

function Button({ label, className }) {
  return (
    <button
      className={`flex items-center text-darkGray text-base bg-primary px-6 xl:px-8 min-h-[44px] rounded-lg font-semibold ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
