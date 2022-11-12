import React from "react";

function Button({ label, className }) {
  return (
    <button
      className={`text-darkGray text-base bg-primary px-6 xl:px-8 py-1 xl:py-2 rounded-lg font-semibold ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
