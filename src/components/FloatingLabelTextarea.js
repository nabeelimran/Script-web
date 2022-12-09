import React from "react";

function FloatingLabelTextarea({ placeholder }) {
  return (
    <textarea
      className="text-sm xl:text-base bg-transparent px-4 xl:px-5 border-1px border-[#313131] h-[150px] w-full rounded-lg resize-none outline-none py-4"
      type="text"
      placeholder={placeholder}
    ></textarea>
  );
}

export default FloatingLabelTextarea;